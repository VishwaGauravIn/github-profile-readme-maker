import { GoogleGenerativeAI } from "@google/generative-ai";

const SCHEMA = `{
  "username": "GitHub username if mentioned, else empty string",
  "aboutme": "2-4 bullet point lines in GitHub profile emoji style (e.g. '🔭 I am currently working on...'). Use \\n to separate lines.",
  "tech": ["array of lowercase or common-name tech strings, e.g. react, node.js, python, postgresql"],
  "socials": {
    "linkedin": "LinkedIn handle/username only (not full URL), empty string if not found",
    "github": "GitHub username only, empty string if not found",
    "twitter": "Twitter/X handle only (without @), empty string if not found",
    "instagram": "Instagram handle only, empty string if not found",
    "youtube": "YouTube channel handle only, empty string if not found"
  }
}`;

const SYSTEM_PROMPT = `You are a precise resume parser.
Extract structured data from the provided resume text.
Return ONLY valid JSON matching the schema below — no markdown fences, no explanation, no extra keys.
If a field cannot be determined, use an empty string or empty array.

IMPORTANT for username/socials extraction:
- For "github" in socials: look for any github.com URL or handle anywhere in the resume (header, contact section, links, footer). Extract ONLY the username part — e.g. from "github.com/AnkitaKumariii" extract "AnkitaKumariii". Never return a full URL.
- For "username": use the GitHub username you found, or empty string.
- Strip http://, https://, www., github.com/, and leading @ from all social handles.

Schema:
${SCHEMA}`;


// Fallback chain — tries each model in order until one succeeds (handles 503 spikes)
const MODEL_CHAIN = [
  "gemini-2.5-flash-lite",
  "gemini-2.0-flash-lite",
  "gemini-1.5-flash",
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { rawText } = req.body;

  if (!rawText || rawText.trim().length < 20) {
    return res.status(400).json({ error: "Raw text is too short or empty" });
  }

  // Prefer user-supplied key (from browser localStorage via header) over server key.
  // The user key is used only for this request — never stored or logged.
  const apiKey =
    (req.headers["x-user-gemini-key"] || "").trim() ||
    (process.env.GEMINI_API_KEY || "").trim();

  if (!apiKey) {
    return res.status(401).json({
      error:
        "No Gemini API key found. Please enter your key in the Upload Resume screen (🔑), or add GEMINI_API_KEY to .env.local.",
    });
  }

  const prompt = `${SYSTEM_PROMPT}\n\nResume text:\n${rawText.slice(0, 8000)}`;
  let lastError = null;

  for (const modelName of MODEL_CHAIN) {
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      const responseText = result.response.text().trim();

      // Strip any accidental markdown fences
      const cleaned = responseText
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/i, "")
        .replace(/\s*```$/i, "")
        .trim();

      let parsed;
      try {
        parsed = JSON.parse(cleaned);
      } catch {
        console.error(`[${modelName}] returned non-JSON:`, cleaned);
        lastError = "AI returned malformed JSON. Please try again.";
        continue; // try next model
      }

      // Sanitise — ensure all expected fields exist
      const safe = {
        username: typeof parsed.username === "string" ? parsed.username : "",
        aboutme: typeof parsed.aboutme === "string" ? parsed.aboutme : "",
        tech: Array.isArray(parsed.tech) ? parsed.tech : [],
        socials: {
          linkedin: parsed.socials?.linkedin ?? "",
          github: parsed.socials?.github ?? "",
          twitter: parsed.socials?.twitter ?? "",
          instagram: parsed.socials?.instagram ?? "",
          youtube: parsed.socials?.youtube ?? "",
        },
        _model: modelName, // useful for debugging
      };

      console.log(`[extract-resume] Success with model: ${modelName}`);
      return res.status(200).json(safe);

    } catch (err) {
      // Continue to next model for capacity/quota errors; fail fast for auth errors
      const isRetryable =
        err.message?.includes("503") ||
        err.message?.includes("Service Unavailable") ||
        err.message?.includes("high demand") ||
        err.message?.includes("429") ||
        err.message?.includes("Too Many Requests") ||
        err.message?.includes("quota");

      console.warn(`[${modelName}] failed (${isRetryable ? "retryable" : "fatal"}):`, err.message?.slice(0, 120));
      lastError = err.message;

      if (!isRetryable) {
        // Auth errors, bad requests etc. — fail immediately
        return res.status(500).json({ error: err.message || "Gemini API error" });
      }
      // Retryable → try next model in chain
    }
  }

  // All models failed with 503
  return res.status(503).json({
    error: lastError || "All Gemini models are currently busy. Please try again in a moment.",
  });
}
