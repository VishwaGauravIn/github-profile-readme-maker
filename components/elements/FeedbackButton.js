import React from "react";

export default function FeedbackButton() {
  return (
    <a
      href="mailto:itsvgin@gmail.com"
      className="fixed hidden md:flex -left-10 p-1 pb-2 px-3 bottom-28 rotate-90 bg-zinc-900 border border-b-0 rounded-md opacity-50 hover:opacity-100 shadow-xl hover:shadow-green-200 transition-all ease-in-out"
    >
      Feedback
    </a>
  );
}
