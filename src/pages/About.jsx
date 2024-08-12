import React from "react";
import Experience from "../components/Experience";

const About = () => {
  return (
    <>
      <div className="bg-black">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-end min-h-screen text-justify">
      {/* Left Content */}
      <div className="w-full md:w-1/2 md:mr-4 flex justify-center md:justify-end">
        <div>
          <h1 className=" text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white dark:text-gray-300">
            I'm Muntasirul, a passionate software developer with experience in
            building modern web applications using the MERN stack. I specialize
            in creating responsive, user-friendly interfaces and robust backend
            solutions. I enjoy solving complex problems and constantly learning
            new technologies to improve my skills.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className=" md:w-[600px] flex justify-center md:justify-start md:ml-4">
        <img
          src="/muntasirul5.jpg"
          width={250}
          alt="Muntasirul"
          className="object-cover h-auto md:h-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg"
        />
      </div>
    </div>
    <Experience/>
      </div>
    </>
  );
};

export default About;
