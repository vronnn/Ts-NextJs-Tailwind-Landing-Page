import React from "react";
import Tag from "../components/Tag";

const Intro = () => {
  return (
    <div className="w-full self-center px-4 lg:w-1/2 lg:pl-6 lg:mb-6">
      <h1 className="text-4xl font-bold text-slate-700 tracking-wide mb-2 lg:text-6xl dark:text-slate-100">
        Zhafran Dzaky
      </h1>
      <h2 className="text-xl font-medium text-slate-600 mb-3 lg:text-2xl dark:text-indigo-300">
        Student & Frontend Developer
      </h2>
      <p className="text-slate-500 mb-4 max-w-lg lg:text-lg lg:mb-10 dark:text-indigo-200">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam odio
        omnis est officiis ex consectetur veniam necessitatibus neque minima
        praesentium! Deleniti iure architecto dolores commodi.
      </p>
      {/* Tag */}
      <Tag title="Learn More"></Tag>

      {/* Social */}
      <div className="w-40 lg:w-52">
        <div className="flex justify-between">
          <div className="group">
            <div className="w-12 h-12 bg-indigo-300 rounded-md shadow-md lg:w-16 lg:h-16 group-hover:bg-slate-700">
              <a
                href="https://github.com/vronnn"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src="/github-mark.png" alt="" className="scale-[.6]" />
              </a>
            </div>
          </div>
          <div className="group">
            <div className="w-12 h-12 bg-indigo-300 rounded-md shadow-md lg:w-16 lg:h-16 group-hover:bg-slate-700">
              <a
                href="https://www.instagram.com/zhafrandzky/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src="/instagram.png"
                  alt=""
                  className="scale-[.7] opacity-70"
                />
              </a>
            </div>
          </div>
          <div className="group">
            <div className="w-12 h-12 bg-indigo-300 rounded-md shadow-md lg:w-16 lg:h-16 group-hover:bg-slate-700">
              <a href="https://twitter.com/" target={"_blank"} rel="noreferrer">
                <img
                  src="/twitter.png"
                  alt=""
                  className="scale-[.6] opacity-70"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
