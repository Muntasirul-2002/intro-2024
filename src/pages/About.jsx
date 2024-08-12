import React from "react";

import HighlightText from "../components/HighlightText";
import Testimonials from "../components/Testimonials";
import Stat from "../components/Stat";


const About = () => {
  return (
    <>
      <div className="bg-black">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-end min-h-screen text-justify">
          {/* Left Content */}
          <div className="w-full md:w-1/2 md:mr-4 flex justify-center md:justify-end">
            <div>
              <h1 className=" text-blue-500 text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                About Me
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white dark:text-gray-300">
                <HighlightText />
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

        <div>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-center min-h-screen">
            {/* Left Content */}
            <div className="w-full md:w-1/2 md:mr-4 flex flex-col items-center md:items-center">
              <div>
                <h1 className="text-blue-500 text-2xl sm:text-2xl md:text-3xl font-bold mb-10 mt-9">
                  Tech Stack
                </h1>
                <div className="text-base sm:text-lg md:text-xl text-white dark:text-gray-300">
                  <div className="flex items-center mb-4">
                    <div className="mb-1 text-base font-medium dark:text-white">
                      React
                    </div>
                    <div className="flex items-center ml-28 md:ml-28">
                      <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="mb-1 text-base font-medium text-white dark:text-blue-500">
                      Node
                    </div>
                    <div className="flex items-center ml-28 md:ml-28">
                      {" "}
                      {/* Increased margin */}
                      <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="mb-1 text-base font-medium text-white dark:text-red-500">
                      Express
                    </div>
                    <div className="flex items-center ml-[37%] md:ml-24">
                      {" "}
                      {/* Increased margin */}
                      <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="mb-1 text-base font-medium text-white dark:text-green-500">
                      MongoDB
                    </div>
                    <div className="flex items-center ml-[30%] md:ml-[26%]">
                      {" "}
                      {/* Increased margin */}
                      <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="mb-1 text-base font-medium text-white dark:text-yellow-500">
                      JavaScript
                    </div>
                    <div className="flex items-center ml-[31%] md:ml-[27%]">
                      {" "}
                      {/* Increased margin */}
                      <span className="text-yellow-400">⭐⭐⭐⭐</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="mb-1 text-base font-medium text-white dark:text-indigo-500">
                      Python
                    </div>
                    <div className="flex items-center ml-[38%] md:ml-[34%]">
                      {" "}
                      {/* Increased margin */}
                      <span className="text-yellow-400">⭐⭐⭐⭐</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="mb-1 text-base font-medium text-white dark:text-white">
                      Docker
                    </div>
                    <div className="flex items-center ml-[38%] md:ml-[34%]">
                      {" "}
                      {/* Increased margin */}
                      <span className="text-yellow-400">⭐⭐⭐⭐</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="md:w-[600px] md:h-[400px] flex justify-center md:justify-start md:ml-4">
              <div>
                <h1 className="text-blue-500 text-2xl sm:text-2xl md:text-3xl font-bold mb-10 mt-9">
                  Languages
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white dark:text-gray-300">
                  <div className="text-base sm:text-lg md:text-xl text-white dark:text-gray-300">
                    <div className="flex items-center mb-4">
                      <div className="mb-1 text-base font-medium dark:text-white">
                        English
                      </div>
                      <div className="flex items-center ml-28 md:ml-28">
                        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="mb-1 text-base font-medium text-white dark:text-blue-500">
                        Hindi
                      </div>
                      <div className="flex items-center ml-[45%] md:ml-[41%]">
                        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="mb-1 text-base font-medium text-white dark:text-red-500">
                        Bengali
                      </div>
                      <div className="flex items-center ml-[40%] md:ml-[36%]">
                        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mb-10">
            <Stat/>
          </div>
        <div>
          <h1 className="text-blue-500 flex justify-center items-center text-3xl md:font-4xl lg:font-5xl mb-9 font-bold">
            Testimonials
          </h1>
         
          <div>
         <Testimonials/>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
