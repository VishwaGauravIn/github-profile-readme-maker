import axios from "axios";
import React, { useState } from "react";

export default function Broadcast() {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  axios.get("https://itsvg.in/api/broadcast").then((res) => {
    if (res.data.title) {
      setTitle(res.data.title);
      setLink(res.data.link);
      setIsVisible(true);
    }
  });
  return (
    <>
      {isVisible && (
        <div className="h-8">
          <div className="flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute w-full h-8 top-0 left-0 text-white text-xs sm:text-sm md:text-base">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
