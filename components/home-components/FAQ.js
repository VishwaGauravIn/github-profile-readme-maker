import React from "react";

export default function FAQ() {
  return (
    <div className="bg-lightblue py-20 px-4 text-zinc-500">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
        <h2 className="mr-8 w-full md:w-1/3 text-3xl font-bold leading-9 text-zinc-400 mb-10 md:mb-0">
          Frequently-asked questions
        </h2>
        <dl className="w-full md:w-2/3">
          <dt className="mb-4">
            <h3 className="text-xl font-semibold">
              Do I need to fill all sections ?
            </h3>
          </dt>
          <dd className="mb-10 lg:mb-16">
            <p>
              Not at all, only GitHub username is mandatory, all the other sections are optional. It's all your choice, you can fill them depending on your requirement, you have all the options for customisation. 
            </p>
          </dd>
          <dt className="mb-4">
            <h3 className="text-xl font-semibold">
              Do I need to know Markdown or HTML for using this website?
            </h3>
          </dt>
          <dd className="mb-10 lg:mb-16">
            <p>
              This is a complete No-Code solution so you don't need any coding experience. You just have to fill sections and we will create a perfect GitHub Profile ReadMe for you for free! Sounds cool? Try now!
            </p>
          </dd>
          <dt className="mb-4">
            <h3 className="text-xl font-semibold">
              How to change GitHub ReadMe?
            </h3>
          </dt>
          <dd className="mb-10 lg:mb-16">
            <p>
              If you already have your personal repository (personal repository name is same as your GitHub username) then you can copy paste the code generated from GPRM in your ReadMe file. If you don't have your personal repository then follow this : <br/>
              <b>Step 1 :</b> Go to <a href="https://github.com/new" className="text-cyan-700" target="_blank" rel="noopener noreferrer">https://github.com/new</a> and enter the same name as your GitHub username into the Repository name field.<br/>
              <b>Step 2 :</b> Leave the repo as a Public repo (by default).<br/>
              <b>Step 3 :</b> Also, make sure to initialize it with a README to get started.<br/>
              <b>Step 4 :</b> Paste the code generated from this website inside your ReadMe file.<br/>
              <b>Step 5 :</b> Commit the changes to add a ReadMe to your GitHub Account.
            </p>
          </dd>
        </dl>
      </div>
    </div>
  );
}
