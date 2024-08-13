import React from "react";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Card from "../components/Card";


const Resume = () => {
  return (
    <div className="bg-black md:h-[180vh] lg:h-[180vh]">
     
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-center min-h-screen">
        {/* Left Content */}
        <div className="w-full md:w-1/2 md:mr-4 flex flex-col items-center md:items-center justify-center">
          <div>
            <div className="text-base sm:text-lg md:text-xl text-white dark:text-gray-300">
              <div className="flex items-center mb-4">
                <Education />
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="md:w-[600px] md:h-[400px] flex justify-center md:justify-start md:ml-4">
          <div>
            <Experience />
          </div>
        </div>
      </div>
    <div>
      <Card/>
    </div>
    </div>
  );
};

export default Resume;
