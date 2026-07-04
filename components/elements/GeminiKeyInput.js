import React, { useState, useEffect } from "react";

const STORAGE_KEY = "gitcraft_gemini_key";

/** Mask key — show only last 6 chars: ••••••••••••abc123 */
function maskKey(key) {
  if (!key || key.length < 8) return "••••••••••••••••";
  return "•".repeat(key.length - 6) + key.slice(-6);
}

/**
 * GeminiKeyInput
 * - Reads/writes Gemini API key from localStorage
 * - Exposes the raw key via onChange(key)
 * - Shows a masked preview when a key is saved
 */
export default function GeminiKeyInput({ onChange }) {
  const [savedKey, setSavedKey] = useState("");
  const [inputKey, setInputKey] = useState("");
  const [editing, setEditing] = useState(false);
  const [showRaw, setShowRaw] = useState(false);

  // Load saved key on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) || "";
      setSavedKey(stored);
      if (stored) onChange(stored);
    } catch {
      // localStorage unavailable (private browsing etc.)
    }
  }, []);

  function save() {
    const key = inputKey.trim();
    if (!key) return;
    try {
      localStorage.setItem(STORAGE_KEY, key);
    } catch {}
    setSavedKey(key);
    onChange(key);
    setInputKey("");
    setEditing(false);
    setShowRaw(false);
  }

  function forget() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    setSavedKey("");
    onChange("");
    setEditing(false);
    setInputKey("");
    setShowRaw(false);
  }

  // ── Saved key view ─────────────────────────────────────────────────────────
  if (savedKey && !editing) {
    return (
      <div className="w-full max-w-xl my-3 p-3 rounded-xl border border-green-400/20 bg-green-400/5 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-green-400 text-lg">🔑</span>
          <div className="min-w-0">
            <p className="text-xs text-zinc-400 leading-none mb-0.5">Your Gemini API Key</p>
            <code className="text-green-300 text-xs font-mono tracking-widest">
              {showRaw ? savedKey : maskKey(savedKey)}
            </code>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setShowRaw((v) => !v)}
            title={showRaw ? "Hide" : "Show"}
            className="text-zinc-500 hover:text-zinc-300 text-xs px-2 py-1 rounded border border-zinc-700 hover:border-zinc-500 transition-all"
          >
            {showRaw ? "Hide" : "Show"}
          </button>
          <button
            onClick={() => { setEditing(true); setInputKey(savedKey); }}
            className="text-zinc-500 hover:text-zinc-300 text-xs px-2 py-1 rounded border border-zinc-700 hover:border-zinc-500 transition-all"
          >
            Change
          </button>
          <button
            onClick={forget}
            className="text-red-400/70 hover:text-red-400 text-xs px-2 py-1 rounded border border-red-400/20 hover:border-red-400/50 transition-all"
          >
            Forget
          </button>
        </div>
      </div>
    );
  }

  // ── Input / edit view ──────────────────────────────────────────────────────
  return (
    <div className="w-full max-w-xl my-3">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-green-400 text-base">🔑</span>
        <label className="text-sm text-zinc-300 font-medium">
          Your Gemini API Key
        </label>
        <a
          href="https://aistudio.google.com/app/apikey"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-green-400/70 hover:text-green-300 underline underline-offset-2 transition-colors"
        >
          Get free key ↗
        </a>
      </div>
      <p className="text-xs text-zinc-500 mb-2">
        Saved in your browser only. Never sent to our servers — goes directly to Google.
      </p>
      <div className="flex gap-2">
        <input
          type="password"
          id="gemini-api-key-input"
          value={inputKey}
          onChange={(e) => setInputKey(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && save()}
          placeholder="AIza••••••••••••••••••••••••••••••••••••"
          autoComplete="off"
          spellCheck={false}
          className="flex-1 bg-zinc-900 border border-zinc-700 focus:border-green-400/60 outline-none text-green-200 text-sm font-mono px-3 py-2 rounded-lg transition-colors placeholder-zinc-600"
        />
        <button
          onClick={save}
          disabled={!inputKey.trim()}
          className="px-4 py-2 rounded-lg bg-green-400/10 border border-green-400/40 text-green-300 text-sm font-medium hover:bg-green-400/20 hover:border-green-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Save
        </button>
        {editing && (
          <button
            onClick={() => { setEditing(false); setInputKey(""); }}
            className="px-3 py-2 rounded-lg border border-zinc-700 text-zinc-500 text-sm hover:text-zinc-300 transition-all"
          >
            Cancel
          </button>
        )}
      </div>
      <p className="text-xs text-zinc-600 mt-1.5">
        🔒 Stored in <code className="text-zinc-500">localStorage</code> — clears when you clear browser data.
      </p>
    </div>
  );
}
