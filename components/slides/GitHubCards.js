import React, { useState } from "react";
import NextButton from "../elements/NextButton";

export default function GitHubStats() {
  const [isVisible, setIsVisible] = useState(false);
  const username = "VishwaGauravIn";
  const [theme, setTheme] = useState("radical");
  const [border, setBorder] = useState(false);
  const [includeAll, setIncludeAll] = useState(false);
  const [includePrivate, setIncludePrivate] = useState(false);
  return (
    <>
      {isVisible ? (
        <></>
      ) : (
        <div className="flex flex-col items-center">
          <p className="w-full text-center text-3xl my-10">
            Flex your GitHub Stats
          </p>
          {/* Options */}
          <div className="">
              Theme:
            <select
              id="theme"
              onChange={() => setTheme(document.getElementById("theme").value)}
              className="bg-transparent py-1 px-2 outline-none"
            >
              {themes.map((item) => {
                return (
                  <option
                    key={item}
                    value={item}
                    className="bg-zinc-900"
                  >
                    {item}
                  </option>
                );
              })}
            </select>
            <button className="p-1 px-4 ring-2 ring-green-300 hover:ring-green-200 active:scale-95 transition-all ease-in-out duration-200 ml-3 rounded-lg" onClick={()=> setBorder(!border)}>Border</button>
            <button className="p-1 px-4 ring-2 ring-green-300 hover:ring-green-200 active:scale-95 transition-all ease-in-out duration-200 ml-3 rounded-lg" onClick={()=> setIncludeAll(!includeAll)}>Lifetime Commits</button>
            <button className="p-1 px-4 ring-2 ring-green-300 hover:ring-green-200 active:scale-95 transition-all ease-in-out duration-200 ml-3 rounded-lg" onClick={()=> setIncludePrivate(!includePrivate)}>Private Commits</button>
          </div>
          <div className="w-full md:w-8/12 justify-center flex flex-wrap my-10">
            <img
              className="m-2"
              src={`https://github-readme-stats.vercel.app/api?username=${username}&theme=${theme}&hide_border=${border}&include_all_commits=${includeAll}&count_private=${includePrivate}`}
              alt=""
            />
            <img
              className="m-2"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=${theme}&hide_border=${border}&include_all_commits=${includeAll}&count_private=${includePrivate}&layout=compact`}
              alt=""
            />
            <img
              className="m-2"
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=${border}`}
              alt=""
            />
          </div>
          <NextButton onClick={() => setIsVisible(true)} />
        </div>
      )}
    </>
  );
}

const themes = [
  "default",
  "dark",
  "radical",
  "merko",
  "gruvbox",
  "tokyonight",
  "onedark",
  "synthwave",
  "highcontrast",
  "dracula",
  "prussian",
  "monokai",
  "vue",
  "vue-dark",
  "shades-of-purple",
  "nightowl",
  "buefy",
  "blue-green",
  "algolia",
  "great-gatsby",
  "darcula",
  "bear",
  "solarized-dark",
  "solarized-light",
  "chartreuse-dark",
  "nord",
  "gotham",
  "material-palenight",
  "graywhite",
  "vision-friendly-dark",
  "ayu-mirage",
  "midnight-purple",
  "calm",
  "flag-india",
  "omni",
  "react",
  "jolly",
  "maroongold",
  "yeblu",
  "blueberry",
  "slateorange",
  "kacho_ga",
  "city_light",
  "swift",
];
