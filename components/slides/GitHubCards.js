import { useObserver } from "mobx-react";
import React, { useEffect, useState } from "react";
import themes from "../../data/themes";
import FilterButton from "../elements/buttons/FilterButton";
import NextButton from "../elements/buttons/NextButton";
import Pagination from "../elements/Pagination";
import Socials from "./Socials";
import { useProfileMaker } from "../../contexts/profile-maker";

export default function GitHubStats({ back }) {
  const [isVisible, setIsVisible] = useState(false);
  const profileMaker = useProfileMaker();
  const [theme, setTheme] = useState(profileMaker.data.stats.theme);
  const [border, setBorder] = useState(profileMaker.data.stats.border);
  const [includeAll, setIncludeAll] = useState(profileMaker.data.stats.lifetime);
  const [includePrivate, setIncludePrivate] = useState(
    profileMaker.data.stats.prv
  );
  function onNext() {
    githubstats = `# 📊 GitHub Stats:
![](${document.getElementById("stats").getAttribute("src")})<br/>
`;
    setIsVisible(true);
  }
  useEffect(() => {
    profileMaker.data.stats.theme = theme;
    profileMaker.data.stats.border = border;
    profileMaker.data.stats.lifetime = includeAll;
    profileMaker.data.stats.prv = includePrivate;
  });
  return useObserver(() => (
    <>
      {isVisible ? (
        <Socials back={() => setIsVisible(false)} />
      ) : (
        <div className="flex flex-col items-center fade-on-appear">
          <button
            className="left-0 absolute m-10 opacity-80 hover:opacity-100 transition-all ease-in-out outline-none"
            onClick={back}
          >
            ◄ Go Back
          </button>
          <p className="w-full text-center text-3xl my-10 mt-20">
            Flex your GitHub Stats
          </p>
          {/* Options */}
          <div className="flex flex-wrap justify-center items-center">
            Theme:
            <select
              id="theme"
              value={profileMaker.data.stats.theme}
              onChange={() => setTheme(document.getElementById("theme").value)}
              className="bg-transparent py-1 px-2 outline-none"
            >
              {themes.map((item) => {
                return (
                  <option key={item} value={item} className="bg-zinc-900">
                    {item}
                  </option>
                );
              })}
            </select>
            <FilterButton
              chk={border}
              title="Border"
              onClick={() => setBorder(!border)}
            />
            <FilterButton
              title="Lifetime Commits"
              chk={includeAll}
              onClick={() => setIncludeAll(!includeAll)}
            />
            <FilterButton
              title="Private Commits"
              chk={includePrivate}
              onClick={() => setIncludePrivate(!includePrivate)}
            />
          </div>
          <p className="mt-4 text-green-300 opacity-90">
            please wait for images to load after changing any values
          </p>
          <div className="w-full md:w-8/12 justify-center flex flex-col flex-wrap md:my-4">
            <img
              className="m-2 select-none pointer-events-none"
              draggable="false"
              id="stats"
              src={`https://github-readme-stats.vercel.app/api?username=${
                profileMaker.data.username
              }&theme=${theme}&hide_border=${!border}&include_all_commits=${includeAll}&count_private=${includePrivate}`}
              alt=""
            />
          </div>
          <NextButton onClick={() => onNext()} />
          <Pagination val={2} />
          {/* <FeedbackButton /> */}
        </div>
      )}
    </>
  ));
}

export var githubstats = ``;
