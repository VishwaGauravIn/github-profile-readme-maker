import React from "react";

export default function Pagination({ val }) {
  return (
    <div className="fixed bottom-2 left-2 px-6 py-2 bg-green-300 text-zinc-800 rounded-full font-semibold">
      {val} / 6
    </div>
  );
}
