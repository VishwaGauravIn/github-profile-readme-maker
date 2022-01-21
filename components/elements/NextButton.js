import React from "react";

export default function NextButton({ onClick }) {
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <button
      className="relative inline-block group text-green-100"
      onClick={() => onClick() & topFunction()}
    >
      <span className="relative inline-block px-6 py-3 font-bold tracking-widest uppercase border-2 hover:border-green-200 border-green-300 rounded-lg">
        Next
      </span>
    </button>
  );
}
