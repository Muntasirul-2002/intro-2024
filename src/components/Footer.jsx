import React from "react";
import MagicButton from "./MagicButton";
import { socialMedia } from "../data/index";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-black ">
      <footer className="w-full md:mb-5">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl text-white md:text-5xl text-center lg:mx-w-[45vw] mb-5">
            Let's <span className="text-blue-500">connect</span> build a
            software product together🤝
          </h1>
          <a href="mailto:muntasirul.msd@gmail.com">
            <MagicButton />
          </a>
        </div>
        <div className="flex mt-16 text-white md:flex-row flex-col justify-between items-center">
          <p className="md:text-base  text-sm md:font-normal font-light text-white">
            Copyright © 2024, Design & Developed by Muntasirul
          </p>
          <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((p) => (
              <Link to={p.link} key={p.id}>
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-8 h-7 cursor-pointer flex justify-center items-center backdrop-blur-lg  bg-opacity-75 bg-black-200 rounded-lg border border-transparent"
                  width={20}
                  height={20}
                />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
