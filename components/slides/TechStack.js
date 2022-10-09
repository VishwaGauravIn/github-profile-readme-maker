import React, { useEffect, useMemo, useState } from 'react';
import BadgeSelect from '../elements/buttons/BadgeSelect';
import NextButton from '../elements/buttons/NextButton';
import Pagination from '../elements/Pagination';
import { useGPRMStore } from '../mobx/GPRMcontext';
import Donate from './Donate';
import { useObserver } from 'mobx-react';
import {
  databases,
  hostSaas,
  languages,
  MLDL,
  servers,
  other,
  design,
  frameWorks,
} from '../../utils';
import Search from '../elements/textinput/Search';

export default function TechStack({ back }) {
  const [languageSearch, setLanguageSearch] = useState('');
  const [hostSassSearch, sethostSassSearch] = useState('');
  const [serversSearch, setServersSearch] = useState('');
  const [databasesSearch, setDatabasesSearch] = useState('');
  const [MLDLSearch, setMLDLSearch] = useState('');
  const [designSearch, setDesignSearch] = useState('');
  const [otherSearch, setOtherSearch] = useState('');
  const [frameworkSearch, setFrameworkSearch] = useState('');

  const [isVisible, setIsVisible] = useState(false);
  const gprmStore = useGPRMStore();
  const [BadgeStyle, setBadgeStyle] = useState(gprmStore.data.badge_theme);
  useEffect(() => {
    gprmStore.data.badge_theme = BadgeStyle;
  }, [BadgeStyle]);

  const showLanguage = useMemo(() => {
    if (!languageSearch) {
      return languages;
    }

    return languages.filter((item) =>
      item.label.toLowerCase().includes(languageSearch.toLowerCase())
    );
  }, [languageSearch]);

  const showHostSass = useMemo(() => {
    if (!hostSassSearch) {
      return hostSaas;
    }

    return hostSaas.filter((item) =>
      item.label.toLowerCase().includes(hostSassSearch.toLowerCase())
    );
  }, [hostSassSearch]);

  const showDatabases = useMemo(() => {
    if (!databasesSearch) {
      return databases;
    }

    return databases.filter((item) =>
      item.label.toLowerCase().includes(databasesSearch.toLowerCase())
    );
  }, [databasesSearch]);

  const showMLDL = useMemo(() => {
    if (!MLDLSearch) {
      return MLDL;
    }

    return MLDL.filter((item) =>
      item.label.toLowerCase().includes(MLDLSearch.toLowerCase())
    );
  }, [MLDLSearch]);

  const showServers = useMemo(() => {
    if (!serversSearch) {
      return servers;
    }

    return servers.filter((item) =>
      item.label.toLowerCase().includes(serversSearch.toLowerCase())
    );
  }, [serversSearch]);

  const showFrameworks = useMemo(() => {
    if (!frameworkSearch) {
      return frameWorks;
    }

    return frameWorks.filter((item) =>
      item.label.toLowerCase().includes(frameworkSearch.toLowerCase())
    );
  }, [frameworkSearch]);

  const showOther = useMemo(() => {
    if (!otherSearch) {
      return other;
    }

    return other.filter((item) =>
      item.label.toLowerCase().includes(otherSearch.toLowerCase())
    );
  }, [otherSearch]);

  const showDesign = useMemo(() => {
    if (!designSearch) {
      return design;
    }

    return design.filter((item) =>
      item.label.toLowerCase().includes(designSearch.toLowerCase())
    );
  }, [designSearch]);

  return useObserver(() => (
    <>
      {isVisible ? (
        <Donate back={() => setIsVisible(false)} />
      ) : (
        <div className='flex flex-col items-center fade-on-appear'>
          <button
            className='left-0 absolute m-10 opacity-80 hover:opacity-100 transition-all ease-in-out outline-none'
            onClick={back}
          >
            ◄ Go Back
          </button>
          <p className='w-full text-center text-3xl my-10 mt-20'>
            Add Tech that you use
          </p>
          <div className='flex flex-col md:flex-row w-full'>
            <div className='flex w-full md:w-6/12 justify-center items-center'>
              <img
                src='/girlonpc.svg'
                alt=''
                className='md:w-8/12 aspect-square select-none pointer-events-none'
                draggable='false'
              />
            </div>
            <div className='flex flex-col w-full md:w-6/12'>
              {/* NOT USING ANY DATA FILE TO POPULATE BADGES */}
              <div className='flex flex-col h-full items-center'>
                {/* Languages */}
                <div className='flex justify-between w-[100%] mb-3'>
                  <p className='flex justify-center text-lg md:text-xl'>
                    LANGUAGES
                  </p>
                  <Search setValue={setLanguageSearch} />
                </div>
                <div className='flex flex-row flex-wrap text-gray-700 md:justify-center'>
                  {showLanguage.length ? (
                    showLanguage.map((item) => (
                      <BadgeSelect
                        label={item.label}
                        url={item.url}
                        key={item.label}
                      />
                    ))
                  ) : (
                    <p className='text-lg text-green-200'>
                      No Languages Found !!!
                    </p>
                  )}
                </div>
                {/* Hosting/SaaS */}
                <div className='flex justify-between w-[100%] mb-3'>
                  <p className='flex justify-center text-lg md:text-xl mt-4'>
                    HOSTING/SaaS
                  </p>
                  <Search setValue={sethostSassSearch} />
                </div>
                <div className='flex flex-row flex-wrap text-gray-700 md:justify-center'>
                  {showHostSass.length ? (
                    showHostSass.map((item) => (
                      <BadgeSelect
                        label={item.label}
                        url={item.url}
                        key={item.label}
                      />
                    ))
                  ) : (
                    <p className='text-lg text-green-200'>
                      No Hosting/Saas Found !!!
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col justify-center items-center text-green-100'>
            {/* FRAMEWORKS, PLATFORMS & LIBRARIES */}
            <div className='flex justify-between mb-3 w-[80%]'>
              <p className='flex justify-center text-lg md:text-xl mt-4'>
                FRAMEWORKS, PLATFORMS & LIBRARIES
              </p>
              <Search setValue={setFrameworkSearch} />
            </div>
            <div className='flex flex-row flex-wrap text-gray-700 md:justify-center w-full md:w-10/12'>
              {showFrameworks.length ? (
                showFrameworks.map((item) => (
                  <BadgeSelect
                    label={item.label}
                    url={item.url}
                    key={item.label}
                  />
                ))
              ) : (
                <p className='text-lg text-green-200'>
                  No Frameworks, Platforms & Libraries Found !!!
                </p>
              )}
            </div>
            {/* SERVERS */}
            <div className='flex justify-between w-[80%] mb-3'>
              <p className='flex justify-center text-lg md:text-xl mt-4'>
                SERVERS
              </p>
              <Search setValue={setServersSearch} />
            </div>
            <div className='flex flex-row flex-wrap text-gray-700 md:justify-center  w-full md:w-10/12'>
              {showServers.length ? (
                showServers.map((item) => (
                  <BadgeSelect
                    label={item.label}
                    url={item.key}
                    key={item.label}
                  />
                ))
              ) : (
                <p className='text-lg text-green-200'>No Servers Found !!!</p>
              )}
            </div>
            {/* DATABASES */}
            <div className='flex justify-between w-[80%] mb-3'>
              <p className='flex justify-center text-lg md:text-xl mt-4'>
                DATABASES
              </p>
              <Search setValue={setDatabasesSearch} />
            </div>
            <div className='flex flex-row flex-wrap text-gray-700 md:justify-center  w-full md:w-10/12'>
              {showDatabases.length ? (
                showDatabases.map((item) => (
                  <BadgeSelect
                    label={item.label}
                    url={item.url}
                    key={item.label}
                  />
                ))
              ) : (
                <p className='text-lg text-green-200'>No Databases Found !!!</p>
              )}
            </div>
            {/* DESIGN */}
            <div className='flex justify-between w-[80%] mb-3'>
              <p className='flex justify-center text-lg md:text-xl mt-4'>
                DESIGN
              </p>
              <Search setValue={setDesignSearch} />
            </div>
            <div className='flex flex-row flex-wrap text-gray-700 md:justify-center  w-full md:w-10/12'>
              {showDesign.length ? (
                showDesign.map((item) => (
                  <BadgeSelect
                    label={item.label}
                    url={item.key}
                    key={item.label}
                  />
                ))
              ) : (
                <p className='text-lg text-green-200'>No Design Found !!!</p>
              )}
            </div>
            {/* ML/DL */}
            <div className='flex justify-between w-[80%] mb-3'>
              <p className='flex justify-center text-lg md:text-xl mt-4'>
                ML/DL
              </p>
              <Search setValue={setMLDLSearch} />
            </div>
            <div className='flex flex-row flex-wrap text-gray-700 md:justify-center w-full md:w-10/12'>
              {showMLDL.length ? (
                showMLDL.map((item) => (
                  <BadgeSelect
                    label={item.label}
                    url={item.url}
                    key={item.label}
                  />
                ))
              ) : (
                <p className='text-lg text-green-200'>No ML/DL Found !!!</p>
              )}
            </div>
            {/* OTHER */}
            <div className='flex justify-between mb-3 w-[80%]'>
              <p className='flex justify-center text-lg md:text-xl mt-4'>
                OTHER
              </p>
              <Search setValue={setOtherSearch} />
            </div>
            <div className='flex flex-row flex-wrap text-gray-700 md:justify-center w-full md:w-10/12 mb-10'>
              {showOther.length ? (
                showOther.map((item) => (
                  <BadgeSelect
                    label={item.label}
                    url={item.key}
                    key={item.label}
                  />
                ))
              ) : (
                <p className='text-lg text-green-200'>Nothing Found !!!</p>
              )}
            </div>
          </div>
          {/* Select Badge Type (with preview) */}
          <div className='flex flex-row flex-wrap justify-center items-center border p-2 px-4 border-green-300/50 rounded-md mb-6'>
            Theme:
            <select
              id='badgestyle'
              value={
                gprmStore.data.badge_theme
                  ? gprmStore.data.badge_theme
                  : 'for-the-badge'
              }
              onChange={() =>
                setBadgeStyle(document.getElementById('badgestyle').value)
              }
              className='bg-transparent py-1 px-2 outline-none w-max'
            >
              <option value='for-the-badge' className='bg-zinc-900'>
                For the badge
              </option>
              <option value='flat' className='bg-zinc-900'>
                Flat
              </option>
              <option value='flat-square' className='bg-zinc-900'>
                Flat Square
              </option>
              <option value='plastic' className='bg-zinc-900'>
                Plastic
              </option>
              {/* Social style is not enabled as it is not compatible with all badges */}
              {/* <option value="social" className="bg-zinc-900">
                Social
              </option> */}
            </select>
            <img
              src={`https://img.shields.io/badge/Preview-1ED760?style=${BadgeStyle}&logo=spotify&logoColor=white`}
              alt=''
              className='w-max max-w-xs ml-4'
            />
          </div>
          <NextButton onClick={() => setIsVisible(true)} />
          <Pagination val={4} />
        </div>
      )}
    </>
  ));
}
