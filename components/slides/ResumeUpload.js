import React, { useState, useCallback } from "react";
import { useGPRMStore } from "../mobx/GPRMcontext";
import { normalizeTechToUrls } from "../../utils/normalizeTech";
import AboutMe from "./AboutMe";

// ── Step indicators ────────────────────────────────────────────────────────────
const STEPS = ["Upload", "Parse", "AI Extract", "Review & Fill"];

function StepBar({ current }) {
  return (
    <div className="flex items-center justify-center w-full my-6 gap-0">
      {STEPS.map((label, i) => (
        <React.Fragment key={i}>
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                i < current
                  ? "bg-green-400 border-green-400 text-zinc-900"
                  : i === current
                  ? "bg-transparent border-green-300 text-green-300 animate-pulse"
                  : "bg-transparent border-zinc-600 text-zinc-500"
              }`}
            >
              {i < current ? "✓" : i + 1}
            </div>
            <span
              className={`text-xs mt-1 hidden sm:block ${
                i === current ? "text-green-300" : "text-zinc-500"
              }`}
            >
              {label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div
              className={`h-[2px] flex-1 mx-1 transition-all duration-500 ${
                i < current ? "bg-green-400" : "bg-zinc-700"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// ── Drag-and-drop upload zone ──────────────────────────────────────────────────
function DropZone({ onFile, disabled }) {
  const [dragging, setDragging] = useState(false);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDragging(false);
      if (disabled) return;
      const file = e.dataTransfer.files?.[0];
      if (file) onFile(file);
    },
    [onFile, disabled]
  );

  return (
    <label
      htmlFor="resume-upload-input"
      className={`relative flex flex-col items-center justify-center w-full max-w-md h-52 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300 select-none
        ${dragging ? "border-green-300 bg-green-300/10 scale-[1.02]" : "border-green-500/40 hover:border-green-400 hover:bg-green-400/5"}
        ${disabled ? "opacity-40 cursor-not-allowed" : ""}
      `}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
    >
      <svg className="w-12 h-12 mb-3 text-green-400 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <p className="text-green-300 font-semibold text-base">Drop your resume here</p>
      <p className="text-zinc-400 text-sm mt-1">or click to browse</p>
      <p className="text-zinc-500 text-xs mt-2">PDF · DOCX · Scanned PDFs supported via OCR</p>
      <input
        id="resume-upload-input"
        type="file"
        accept=".pdf,.docx,.doc"
        className="hidden"
        disabled={disabled}
        onChange={(e) => { if (e.target.files?.[0]) onFile(e.target.files[0]); }}
      />
    </label>
  );
}

// ── Status message ─────────────────────────────────────────────────────────────
function StatusMsg({ type, text }) {
  const colors = {
    info: "text-blue-300",
    success: "text-green-300",
    error: "text-red-400",
    loading: "text-yellow-300",
  };
  return (
    <p className={`text-sm mt-3 text-center ${colors[type] ?? "text-zinc-300"}`}>
      {type === "loading" && (
        <span className="inline-block w-4 h-4 border-2 border-yellow-300 border-t-transparent rounded-full animate-spin mr-2 align-middle" />
      )}
      {text}
    </p>
  );
}

// ── Extracted data preview cards ───────────────────────────────────────────────
function ExtractedPreview({ data }) {
  return (
    <div className="w-full max-w-xl mt-6 space-y-3 text-sm">
      {data.username && (
        <div className="flex gap-2 items-start p-3 rounded-lg bg-green-400/10 border border-green-400/20">
          <span className="text-green-400 font-bold min-w-[90px]">Username</span>
          <span className="text-zinc-200">{data.username}</span>
        </div>
      )}
      {data.aboutme && (
        <div className="flex gap-2 items-start p-3 rounded-lg bg-green-400/10 border border-green-400/20">
          <span className="text-green-400 font-bold min-w-[90px]">About Me</span>
          <span className="text-zinc-200 whitespace-pre-line">{data.aboutme}</span>
        </div>
      )}
      {data.tech?.length > 0 && (
        <div className="flex gap-2 items-start p-3 rounded-lg bg-green-400/10 border border-green-400/20">
          <span className="text-green-400 font-bold min-w-[90px]">Tech</span>
          <span className="text-zinc-200">{data.tech.join(", ")}</span>
        </div>
      )}
      {Object.values(data.socials ?? {}).some(Boolean) && (
        <div className="flex gap-2 items-start p-3 rounded-lg bg-green-400/10 border border-green-400/20">
          <span className="text-green-400 font-bold min-w-[90px]">Socials</span>
          <span className="text-zinc-200">
            {Object.entries(data.socials)
              .filter(([, v]) => v)
              .map(([k, v]) => `${k}: ${v}`)
              .join(" · ")}
          </span>
        </div>
      )}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function ResumeUpload({ back }) {
  const gprmStore = useGPRMStore();

  const [step, setStep] = useState(0);           // 0-3
  const [status, setStatus] = useState(null);    // { type, text }
  const [extracted, setExtracted] = useState(null);
  const [goToAbout, setGoToAbout] = useState(false);
  const [busy, setBusy] = useState(false);
  const [manualUsername, setManualUsername] = useState("");

  // ── Extract text from PDF (text layer first, then OCR fallback) ──────────────
  async function extractPDF(file) {
    setStatus({ type: "loading", text: "Reading PDF text layer…" });

    // Dynamic import keeps pdfjs out of the initial bundle
    const pdfjsLib = await import("pdfjs-dist");
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

    let fullText = "";
    for (let i = 1; i <= pdfDoc.numPages; i++) {
      const page = await pdfDoc.getPage(i);
      const content = await page.getTextContent();
      fullText += content.items.map((item) => item.str).join(" ") + "\n";
    }

    // If text layer is basically empty → scanned PDF, run OCR
    if (fullText.trim().length < 80) {
      setStatus({ type: "loading", text: "No text layer found — running OCR (Tesseract)… this may take ~10s" });
      fullText = await ocrPDF(pdfDoc);
    }

    return fullText;
  }

  // ── OCR a PDF using Tesseract.js ─────────────────────────────────────────────
  async function ocrPDF(pdfDoc) {
    const Tesseract = (await import("tesseract.js")).default;
    let result = "";

    for (let i = 1; i <= Math.min(pdfDoc.numPages, 6); i++) {
      const page = await pdfDoc.getPage(i);
      const viewport = page.getViewport({ scale: 2 });
      const canvas = document.createElement("canvas");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext("2d");
      await page.render({ canvasContext: ctx, viewport }).promise;
      const imageData = canvas.toDataURL("image/png");

      const { data } = await Tesseract.recognize(imageData, "eng", {
        logger: () => {}, // suppress verbose logs
      });
      result += data.text + "\n";
    }

    return result;
  }

  // ── Extract text from DOCX ────────────────────────────────────────────────────
  async function extractDOCX(file) {
    setStatus({ type: "loading", text: "Parsing DOCX…" });
    const mammoth = (await import("mammoth/mammoth.browser")).default;
    const arrayBuffer = await file.arrayBuffer();
    const { value } = await mammoth.extractRawText({ arrayBuffer });
    return value;
  }

  // ── Main pipeline on file pick ────────────────────────────────────────────────
  async function handleFile(file) {
    if (busy) return;
    setBusy(true);
    setExtracted(null);
    setStep(1);

    try {
      let rawText = "";
      const name = file.name.toLowerCase();

      if (name.endsWith(".pdf")) {
        rawText = await extractPDF(file);
      } else if (name.endsWith(".docx") || name.endsWith(".doc")) {
        rawText = await extractDOCX(file);
      } else {
        setStatus({ type: "error", text: "Unsupported file type. Upload a PDF or DOCX." });
        setBusy(false);
        setStep(0);
        return;
      }

      if (rawText.trim().length < 30) {
        setStatus({ type: "error", text: "Could not extract enough text. The file may be encrypted or corrupted." });
        setBusy(false);
        setStep(0);
        return;
      }

      setStep(2);
      setStatus({ type: "loading", text: "Sending to AI for extraction… (1–4s)" });

      const res = await fetch("/api/extract-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rawText }),
      });

      const json = await res.json();

      if (!res.ok) {
        setStatus({ type: "error", text: json.error || "AI extraction failed." });
        setBusy(false);
        setStep(0);
        return;
      }

      setExtracted(json);
      setStep(3);
      setStatus({ type: "success", text: "Extracted successfully! Review below and click Apply →" });
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", text: err.message || "Something went wrong." });
      setStep(0);
    } finally {
      setBusy(false);
    }
  }

  // ── Sanitise a raw GitHub username value from AI output ─────────────────────
  function sanitizeUsername(raw) {
    if (!raw) return "";
    return raw
      .replace(/https?:\/\//gi, "")   // strip http(s)://
      .replace(/github\.com\//gi, "")  // strip github.com/
      .replace(/^\/+|\/+$/g, "")       // strip leading/trailing slashes
      .replace(/^@/, "")               // strip leading @
      .split("/")[0]                   // take only the first path segment
      .trim();
  }

  // ── Apply extracted data to the MobX store ────────────────────────────────────
  function applyToStore() {
    if (!extracted) return;

    // Always prefer the manually-typed username if provided
    const finalUsername = sanitizeUsername(manualUsername || extracted.username);
    if (finalUsername) gprmStore.data.username = finalUsername;

    if (extracted.aboutme) gprmStore.data.aboutme = extracted.aboutme;

    // Map AI tech strings → badge URL strings
    const urls = normalizeTechToUrls(extracted.tech ?? []);
    urls.forEach((url) => {
      if (!gprmStore.data.tech.includes(url)) {
        gprmStore.data.tech.push(url);
      }
    });

    // Map socials
    const s = extracted.socials ?? {};
    const ghHandle = sanitizeUsername(s.github);
    if (ghHandle)    gprmStore.data.username           = ghHandle; // prefer explicit social github
    if (finalUsername && !ghHandle) gprmStore.data.username = finalUsername;
    if (s.linkedin)  gprmStore.data.socials.linkedin   = s.linkedin;
    if (s.twitter)   gprmStore.data.socials.x          = s.twitter;
    if (s.instagram) gprmStore.data.socials.instagram  = s.instagram;
    if (s.youtube)   gprmStore.data.socials.youtube    = s.youtube;

    setGoToAbout(true);
  }

  // ── If applied, hand off to existing AboutMe slide ────────────────────────────
  if (goToAbout) {
    return <AboutMe back={() => setGoToAbout(false)} />;
  }

  return (
    <div className="flex flex-col items-center fade-on-appear px-4 pb-16">
      {/* Back button */}
      <button
        className="left-0 absolute m-10 opacity-80 hover:opacity-100 transition-all ease-in-out outline-none"
        onClick={back}
      >
        ◄ Go Back
      </button>

      <p className="w-full text-center text-3xl my-6 mt-20">Upload Your Resume</p>
      <p className="text-zinc-400 text-sm mb-4 text-center max-w-md">
        Your file is parsed entirely in your browser — only the extracted text is sent to the AI.
        No file upload to any server.
      </p>

      <StepBar current={step} />

      <DropZone onFile={handleFile} disabled={busy} />

      {status && <StatusMsg type={status.type} text={status.text} />}

      {extracted && step === 3 && (
        <>
          <ExtractedPreview data={extracted} />

          {/* Username confirm / fallback input */}
          {(() => {
            const detectedUsername =
              extracted.socials?.github?.replace(/https?:\/\//gi, "").replace(/github\.com\//gi, "").replace(/^@/, "").split("/")[0].trim() ||
              extracted.username?.replace(/https?:\/\//gi, "").replace(/github\.com\//gi, "").replace(/^@/, "").split("/")[0].trim() ||
              "";

            return (
              <div className="w-full max-w-xl mt-5">
                <label className="block text-sm text-zinc-400 mb-1">
                  GitHub Username <span className="text-red-400">*</span>{" "}
                  <span className="text-zinc-600 text-xs">(required for stats cards)</span>
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 text-sm">github.com/</span>
                  <input
                    type="text"
                    id="resume-github-username"
                    value={manualUsername || detectedUsername}
                    onChange={(e) => setManualUsername(e.target.value)}
                    placeholder="your-github-handle"
                    className="flex-1 bg-transparent border-b-2 border-green-400/50 focus:border-green-300 outline-none text-green-200 text-base px-1 py-1 transition-colors"
                  />
                </div>
                {!(manualUsername || detectedUsername) && (
                  <p className="text-yellow-400 text-xs mt-1">
                    ⚠ AI could not detect your GitHub username. Please enter it above.
                  </p>
                )}
              </div>
            );
          })()}

          <div className="flex gap-4 mt-6 flex-wrap justify-center">
            <button
              id="resume-apply-btn"
              onClick={applyToStore}
              disabled={
                !manualUsername &&
                !extracted.socials?.github &&
                !extracted.username
              }
              className="bg-green-400 text-zinc-900 font-semibold px-6 py-2 rounded-full hover:bg-green-300 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Apply &amp; Continue →
            </button>
            <button
              onClick={() => { setStep(0); setExtracted(null); setStatus(null); setManualUsername(""); }}
              className="border border-zinc-600 text-zinc-400 px-6 py-2 rounded-full hover:border-zinc-400 hover:text-zinc-200 transition-all"
            >
              Re-upload
            </button>
          </div>

          <p className="text-zinc-500 text-xs mt-4 text-center">
            You can edit any field on the next screens before generating your README.
          </p>
        </>
      )}
    </div>
  );
}
