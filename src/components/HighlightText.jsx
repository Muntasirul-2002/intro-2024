import React from "react";
import { Highlight } from "./ui/HeroHighlight";
import { motion } from "framer-motion";

const HighlightText = () => {
  return (
    <div>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-sm px-4 md:text-sm lg:text-sm font-bold text-white dark:text-white max-w-4xl  leading-relaxed lg:leading-snug text-justify mx-auto"
      >
        I'm Muntasirul, a passionate{" "}
        <Highlight className="text-black dark:text-white">
          software developer
        </Highlight>{" "}
        with experience in building modern web applications using the{" "}
        <Highlight className="text-black dark:text-white">MERN stack 🏅</Highlight>
        . I specialize in creating responsive, user-friendly interfaces and
        robust backend solutions. 
        <br/>
        <br />
        I enjoy solving complex problems and
        constantly <Highlight className="text-black dark:text-white">learning new technologies</Highlight> to improve my skills.
        <br />
        <br />
        Successfully <Highlight className="text-black dark:text-white">delivered software products</Highlight> to the client 🚀
      </motion.h1>
    </div>
  );
};

export default HighlightText;
