import React from "react";
import { TypewriterEffectSmooth } from "./ui/Typewriter-effect";
import { Link, NavLink } from "react-router-dom";
const TypewriterEffectSmoothDemo = () => {
  const words = [
    {
      text: "I'm",
    },
    {
      text: "Muntasirul,",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "a",
    },
    {
      text: "software developer",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div>
      
      <div className="flex flex-col items-center justify-center h-[30rem]">
        <p className="text-white dark:text-neutral-200 text-xs sm:text-base">
          Hi there 👋
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-8">
          <Link to="https://www.upwork.com/freelancers/~0142a9ac92604aeee1">
            <button className="w-40 h-10 rounded-xl bg-transparent border border-blue-500 dark:border-white text-white text-sm">
              Hire me
            </button>
          </Link>
          <NavLink to="/resume">
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
              Resume
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};


export default TypewriterEffectSmoothDemo;
