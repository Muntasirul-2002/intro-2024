import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const TextGenerate = () => {
  const words = `Highly motivated MERN developer with 1+ years of experience in creating and maintaining MERN Stack websites and web applications.
  Managing web application projects, and possibly other responsibilities as well requires good time management skills. Being able to prioritise tasks and meet deadlines is valuable⏳.
Successfully delivered software products to the client 🚀`;
  return (
    <div className="flex items-center justify-center text-justify">
      <div className="max-w-3xl text-center mb-10">
        <TextGenerateEffect words={words} />
      </div>
    </div>
  );
};

export default TextGenerate;

//TODO: decrease the size of the text (words), it's to large in mobile view