import React from "react";
import Card from "../components/Card";
import ServicesCards from "../components/ServicesCards";

const Services = () => {
  return (
    <div className="bg-black ">
      <h1 className="flex justify-center items-center py-5 text-3xl lg:text-5xl md:text-4xl sm:text-4xl font-bold text-blue-500 mb-5">
        Services
      </h1>

      <div className="flex justify-center items-center">
        <ServicesCards />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Services;
