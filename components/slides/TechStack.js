import React, { useEffect, useState } from "react";
import BadgeSelect from "../elements/buttons/BadgeSelect";
import NextButton from "../elements/buttons/NextButton";
import Pagination from "../elements/Pagination";
import { useGPRMStore } from "../mobx/GPRMcontext";
import Donate from "./Donate";
import { useObserver } from "mobx-react";
import { data } from "../../data/tech";
import { searchFilter } from "../../utils/searchFilter";
import { SearchIcon } from "@heroicons/react/outline";

export default function TechStack({ back }) {
  const [isVisible, setIsVisible] = useState(false);
  const gprmStore = useGPRMStore();
  const [BadgeStyle, setBadgeStyle] = useState(gprmStore.data.badge_theme);
  const [techData, setTechData] = useState(data);
  useEffect(() => {
    gprmStore.data.badge_theme = BadgeStyle;
  }, [BadgeStyle]);
  return useObserver(() => (
    <>
      {isVisible ? (
        <Donate back={() => setIsVisible(false)} />
      ) : (
        <div className="flex flex-col items-center fade-on-appear">
          <button
            className="left-0 absolute m-10 opacity-80 hover:opacity-100 transition-all ease-in-out outline-none"
            onClick={back}
          >
            ◄ Go Back
          </button>
          <p className="w-full text-center text-3xl my-10 mt-20">
            Add Tech that you use
          </p>
          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent outline-none ring-2 p-4 px-8 ring-green-200 rounded-full text-green-300 pr-16"
              placeholder="Search tech"
              onChange={(e) => setTechData(searchFilter(e.target.value))}
            />
            <SearchIcon className="w-8 absolute right-4 top-1/2 -translate-y-1/2" />
          </div>
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex w-full md:w-6/12 justify-center items-center">
              <img
                src="/girlonpc.svg"
                alt=""
                className="md:w-8/12 aspect-square select-none pointer-events-none"
                draggable="false"
              />
            </div>
            <div className="flex flex-col w-full md:w-6/12">
              {/* NOT USING ANY DATA FILE TO POPULATE BADGES */}
              <div className="flex flex-col h-full items-center">
                {/* Languages */}
                <p className="flex justify-center text-lg md:text-xl">
                  LANGUAGES
                </p>
                <div className="flex flex-row flex-wrap text-gray-700 md:justify-center">
                  {techData.lang.map((data, key) => (
                    <BadgeSelect key={key} label={data.label} url={data.url} />
                  ))}
                </div>
                {/* Hosting/SaaS */}
                <p className="flex justify-center text-lg md:text-xl mt-4">
                  HOSTING/SaaS
                </p>
                <div className="flex flex-row flex-wrap text-gray-700 md:justify-center">
                  {techData.hosting.map((data, key) => (
                    <BadgeSelect key={key} label={data.label} url={data.url} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-green-100">
            {/* FRAMEWORKS, PLATFORMS & LIBRARIES */}
            <p className="flex justify-center text-lg md:text-xl mt-4">
              FRAMEWORKS, PLATFORMS & LIBRARIES
            </p>
            <div className="flex flex-row flex-wrap text-gray-700 md:justify-center w-full md:w-10/12">
              {techData.frameworks.map((data, key) => (
                <BadgeSelect key={key} label={data.label} url={data.url} />
              ))}
            </div>
            {/* SERVERS */}
            <p className="flex justify-center text-lg md:text-xl mt-4">
              SERVERS
            </p>
            <div className="flex flex-row flex-wrap text-gray-700 md:justify-center  w-full md:w-10/12">
              {techData.servers.map((data, key) => (
                <BadgeSelect key={key} label={data.label} url={data.url} />
              ))}
            </div>
            {/* DATABASES */}
            <p className="flex justify-center text-lg md:text-xl mt-4">
              DATABASES
            </p>
            <div className="flex flex-row flex-wrap text-gray-700 md:justify-center  w-full md:w-10/12">
              {techData.database.map((data, key) => (
                <BadgeSelect key={key} label={data.label} url={data.url} />
              ))}
            </div>
            {/* DESIGN */}
            <p className="flex justify-center text-lg md:text-xl mt-4">
              DESIGN
            </p>
            <div className="flex flex-row flex-wrap text-gray-700 md:justify-center  w-full md:w-10/12">
              {techData.design.map((data, key) => (
                <BadgeSelect key={key} label={data.label} url={data.url} />
              ))}
            </div>
            {/* ML/DL */}
            <p className="flex justify-center text-lg md:text-xl mt-4">ML/DL</p>
            <div className="flex flex-row flex-wrap text-gray-700 md:justify-center w-full md:w-10/12">
              {techData.ml.map((data, key) => (
                <BadgeSelect key={key} label={data.label} url={data.url} />
              ))}
            </div>
            {/* OTHER */}
            <p className="flex justify-center text-lg md:text-xl mt-4">OTHER</p>
            <div className="flex flex-row flex-wrap text-gray-700 md:justify-center w-full md:w-10/12 mb-10">
              {techData.others.map((data, key) => (
                <BadgeSelect key={key} label={data.label} url={data.url} />
              ))}
            </div>
          </div>
          {/* Select Badge Type (with preview) */}
          <div className="flex flex-row flex-wrap justify-center items-center border p-2 px-4 border-green-300/50 rounded-md mb-6">
            Theme:
            <select
              id="badgestyle"
              value={
                gprmStore.data.badge_theme
                  ? gprmStore.data.badge_theme
                  : "for-the-badge"
              }
              onChange={() =>
                setBadgeStyle(document.getElementById("badgestyle").value)
              }
              className="bg-transparent py-1 px-2 outline-none w-max"
            >
              <option value="for-the-badge" className="bg-zinc-900">
                For the badge
              </option>
              <option value="flat" className="bg-zinc-900">
                Flat
              </option>
              <option value="flat-square" className="bg-zinc-900">
                Flat Square
              </option>
              <option value="plastic" className="bg-zinc-900">
                Plastic
              </option>
              {/* Social style is not enabled as it is not compatible with all badges */}
              {/* <option value="social" className="bg-zinc-900">
                Social
              </option> */}
            </select>
            <img
              src={`https://img.shields.io/badge/Preview-1ED760?style=${BadgeStyle}&logo=spotify&logoColor=white`}
              alt=""
              className="w-max max-w-xs ml-4"
            />
          </div>
          <NextButton onClick={() => setIsVisible(true)} />
          <Pagination val={4} />
        </div>
      )}
    </>
  ));
}
