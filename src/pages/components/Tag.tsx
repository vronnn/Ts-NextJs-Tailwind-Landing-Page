import { type } from "os";
import React from "react";

type TagType = {
  title: string;
};

const Tag = ({ title }: TagType) => {
  return (
    <div className="flex relative">
      <h3 className="text-lg text-slate-600 mb-2 lg:text-xl dark:text-indigo-300">
        {title}
      </h3>
      <div className="w-5 bg-[url('/next.png')] bg-contain bg-no-repeat translate-y-[6px] translate-x-2 opacity-60 dark:bg-[url('/dark-next.png')]">
        {/* <img
          src="/next.png"
          alt=""
          className="opacity-60 relative top-[5px] left-2"
        /> */}
      </div>
    </div>
  );
};

export default Tag;
