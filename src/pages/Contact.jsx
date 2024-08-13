import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/Lamp";
import BentoGridSection from "../components/BentoGridSection";
const Contact = () => {
  return (
    <div className="bg-black">
      <h1 className="flex justify-center items-center py-10 lg:text-5xl md:text-4xl text-blue-500 font-bold">
        Get in touch
      </h1>
      <div>
        <BentoGridSection />
      </div>
    </div>
  );
};

export default Contact;
