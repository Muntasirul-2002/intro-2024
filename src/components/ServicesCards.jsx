import React from "react";
import { Meteors } from "./ui/Meteors";
const ServicesCards = () => {
  return (
    <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
      {/* Card 1 */}
      <div className="w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Frontend Development 👨🏻‍💻
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative text-justify z-50">
            With the help of knowledgeable frontend web development services,
            realise your goal. My area of expertise is developing online
            applications that are responsive, aesthetically pleasing, and easy
            to use on all platforms.
          </p>

          <Meteors number={20} />
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full relative max-w-xs md:ms-4 lg:ms-4">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            MERN Development 💡
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 text-justify relative z-50">
            The four technologies that make up the stack are referred to as MERN
            (MongoDB, Express, React, and Node.js). The MERN stack is widely
            acknowledged by developers as a streamlined platform for developing
            interactive and highly scalable web applications.
          </p>

          <Meteors number={20} />
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Custom Development ⚓
          </h1>

          <p className="font-normal text-base text-slate-500 text-justify mb-4 relative z-50">
            My core competency lies in custom development, which enables me to
            create solutions that are specifically designed to meet your
            business's demands. I can provide creative, top-notch solutions
            whether you need a new web application or want to improve the
            functioning of an already-existing one.
          </p>

          <Meteors number={20} />
        </div>
      </div>

      {/* Card 4 */}
      <div className="w-full relative max-w-xs md:ms-4 lg:ms-4">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
           Database Architecture 🛢
          </h1>

          <p className="font-normal text-base text-slate-500 text-justify mb-4 relative z-50">
          Designing databases that can grow with your business, handling increased loads without compromising performance.Implementing indexing, partitioning, and other techniques to ensure fast query response times.
          </p>

          <Meteors number={20} />
        </div>
      </div>
      <div className="w-full relative max-w-xs md:ms-4 lg:ms-4">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
           Web Solution Design ♟️
          </h1>

          <p className="font-normal text-base text-slate-500 text-justify mb-4 relative z-50">
            I offer strategic planning and
            consulting services to guarantee the success of your online projects
            from beginning to end. In-depth evaluation of your company's needs
            and objectives, technology consulting, and project planning are all
            topics we can cover.
          </p>

          <Meteors number={20} />
        </div>
      </div>
      <div className="w-full relative max-w-xs md:ms-4 lg:ms-4">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
           Website Maintenance ⚙️
          </h1>

          <p className="font-normal text-base text-slate-500 text-justify mb-4 relative z-50">
          I take care of everything from routine updates to security checks, allowing you to focus on your business while we handle the technical detail such as performance monitoring,Security Enhancements, improvements etc.
          </p>

          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
