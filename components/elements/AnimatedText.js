import React from "react";
import TextLoop from "react-text-loop/lib/components/TextLoop";

export default function AnimatedText() {
  return (
    <div className="text-green-200 text-5xl font-semibold overflow-y-hidden">
        Create{" "}<TextLoop><span>Beautiful</span><span>Modern</span><span>Interactive</span></TextLoop>{" "}ReadMe
    </div>
  );
}
