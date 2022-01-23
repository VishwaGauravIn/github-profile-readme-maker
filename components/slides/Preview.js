import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { finaldata } from "./Extras";

export default function Preview() {
  const [markdown, setMarkdown] = useState(finaldata);
  var md = require("markdown-it")({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
    quotes: "“”‘’",
    highlight: function (/*str, lang*/) {
      return "";
    },
  });
  useEffect(() => {
    document.getElementById("content").innerHTML = md.render(finaldata);
    console.log(md.render(finaldata));
  }, []);
  return (
    <div className="w-full flex flex-col items-center">
      <p className="w-full text-center text-3xl my-10">
        Your Awesome Profile is ready !
      </p>
      <div
        id="content"
        className="w-8/12 p-3 py-6 bg-zinc-800 rounded-lg ring-1 ring-green-200 shadow-xl shadow-green-200/30"
      ></div>
    </div>
  );
}
