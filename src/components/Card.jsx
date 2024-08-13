import React from "react";

const Card = () => {
  return (
    <>
      <div>
        <h1 className="flex justify-center items-center mb-10 text-3xl lg:text-5xl font-bold text-blue-500 mt-5">
          Domain
        </h1>
      </div>
      <div className=" flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 px-4">
        <div className="max-w-xs w-full group/card">
          <div
            className={`cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4 bg-[url('https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover`}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10"></div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                Ecommerce
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                Design and developed full stack ecommerce web application based
                on client requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-xs w-full group/card">
          <div
            className={`cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4 bg-[url('/real.jpg')] bg-cover`}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10"></div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                Real Estate
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                Showcase your properties with a powerful, responsive real estate
                website designed to attract and engage potential buyers.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-xs w-full group/card">
          <div
            className={`cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover`}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10"></div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                Agency Profile
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                Solution design & developed for agency website service, My
                approach guarantees a user-friendly experience that enhances
                your agency's online presence and drives client engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
       
    </>
  );
};

export default Card;
