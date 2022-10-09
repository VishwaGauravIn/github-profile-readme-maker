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
  const [search, setSearch] = useState('');

  const [isVisible, setIsVisible] = useState(false);
  const gprmStore = useGPRMStore();
  const [BadgeStyle, setBadgeStyle] = useState(gprmStore.data.badge_theme);
  useEffect(() => {
    gprmStore.data.badge_theme = BadgeStyle;
  }, [BadgeStyle]);

  const showLanguage = useMemo(() => {
    if (!search) {
      return languages;
    }

    return languages.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const showHostSass = useMemo(() => {
    if (!search) {
      return hostSaas;
    }

    return hostSaas.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const showDatabases = useMemo(() => {
    if (!search) {
      return databases;
    }

    return databases.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const showMLDL = useMemo(() => {
    if (!search) {
      return MLDL;
    }

    return MLDL.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const showServers = useMemo(() => {
    if (!search) {
      return servers;
    }

    return servers.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const showFrameworks = useMemo(() => {
    if (!search) {
      return frameWorks;
    }

    return frameWorks.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const showOther = useMemo(() => {
    if (!search) {
      return other;
    }

    return other.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const showDesign = useMemo(() => {
    if (!search) {
      return design;
    }

    return design.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

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
          <div className='flex justify-center my-10 mt-20 w-[100%] relative'>
            <p className='text-center text-3xl'>Add Tech that you use</p>
          </div>
          <div className='flex flex-col md:flex-row w-full'>
            <div className='flex w-full md:w-6/12 justify-center items-center'>
              <img
                src='/girlonpc.svg'
                alt=''
                className='md:w-8/12 aspect-square select-none pointer-events-none'
                draggable='false'
              />
            </div>
            <div className='flex flex-col w-full md:w-6/12 text-green-100'>
              {/* NOT USING ANY DATA FILE TO POPULATE BADGES */}
              <div className='flex justify-center md:justify-end w-full mb-5'>
                <Search
                  setValue={setSearch}
                  className='w-full md:w-[450px]'
                  placeholder='Search among different categories...'
                />
              </div>
              <div className='flex flex-col h-full items-center'>
                {/* Languages */}
                <p className='flex justify-center text-lg md:text-xl mb-3'>
                  LANGUAGES
                </p>
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

                <p className='flex justify-center text-lg md:text-xl mt-4 mb-3'>
                  HOSTING/SaaS
                </p>

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
            <p className='flex justify-center text-lg md:text-xl mt-4 mb-3'>
              FRAMEWORKS, PLATFORMS & LIBRARIES
            </p>
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
                <p className='text-lg text-green-200 w-full text-center'>
                  No Frameworks, Platforms & Libraries Found !!!
                </p>
              )}
            </div>
            {/* SERVERS */}
            <p className='flex justify-center text-lg md:text-xl mt-4 mb-3'>
              SERVERS
            </p>
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
                <p className='text-lg text-green-200 w-full text-center'>
                  No Servers Found !!!
                </p>
              )}
            </div>
            {/* DATABASES */}
            <p className='flex justify-center text-lg md:text-xl mt-4 mb-3'>
              DATABASES
            </p>

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
                <p className='text-lg text-green-200 w-full text-center'>
                  No Databases Found !!!
                </p>
              )}
            </div>
            {/* DESIGN */}
            <p className='flex justify-center text-lg md:text-xl mt-4 mb-3'>
              DESIGN
            </p>

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
                <p className='text-lg text-green-200 w-full text-center'>
                  No Design Found !!!
                </p>
              )}
            </div>
            {/* ML/DL */}
            <p className='flex justify-center text-lg md:text-xl mt-4 mb-3'>
              ML/DL
            </p>
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
                <p className='text-lg text-green-200 w-full text-center'>
                  No ML/DL Found !!!
                </p>
              )}
            </div>
            {/* OTHER */}
            <p className='flex justify-center text-lg md:text-xl mt-4 mb-3'>
              OTHER
            </p>
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
                <p className='text-lg text-green-200 w-full text-center'>
                  Nothing Found !!!
                </p>
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
