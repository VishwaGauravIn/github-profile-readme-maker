import React from "react";
import TextLoop from "react-text-loop/lib/components/TextLoop";

export default function AnimatedText() {
  return (
    <div className="text-zinc-500 text-6xl font-medium overflow-y-hidden">
      Create{" "}
      <TextLoop>
        <span className="text-rose-200 underline underline-offset-4 decoration-dashed">Beautiful</span>
        <span className="text-cyan-200 underline underline-offset-4 decoration-dashed">Modern</span>
        <span className="text-amber-200 underline underline-offset-4 decoration-dashed">Interactive</span>
      </TextLoop>{" "}
      ReadMe
    </div>
  );
}
