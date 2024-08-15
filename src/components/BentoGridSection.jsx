import React from "react";
import { cn } from "../lib/utils";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoGrid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconPhoneCalling,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BentoGridSection = () => {
  return (
    <div>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
 

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
     
        <img src="/github.jpg" className=" rounded-lg" alt="" />
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
    >
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15231.937251577456!2d78.39559795!3d17.36448785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIxJzIxLjkiTiA3OMKwMjMnNTIuMSJF!5e0!3m2!1sen!2sin!4v1723727120359!5m2!1sen!2sin"
          width={250}
          height={200}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="/linkedin.jpg"
          alt="avatar"
          className="rounded-full h-10 w-10"
        />

        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Linkedin profile
        </p>
        <Link to='https://www.linkedin.com/in/muntasirulislam/' className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Follow
        </Link>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
          src="/up.png"
          alt="avatar"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Upwork
        </p>
        <Link to='https://www.upwork.com/freelancers/~0142a9ac92604aeee1' className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
         Consultation
        </Link>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="/fb.jpg"
          alt="avatar"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Facebook
        </p>
        <Link to='https://www.facebook.com/muntasirul.msd' className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          follow
        </Link>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="/user.jpg"
          alt="avatar"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          Hi Muntasirul, let's connect !! ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">yeah sure !! 😃</p>
        <div className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black">
        <img
          src="/linkedin.jpg"
          alt="avatar"
          className="rounded-full h-10 w-10"
        />
        </div>
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Contact Details",

    header: (
      <div className="flex flex-col items-start  space-y-2">
        <span className="flex items-center">
          <IconPhoneCalling className="text-blue-500" />
          <p className="ms-4 text-black text-md font-semibold">+916294268784</p>
        </span>
        <span className="flex items-center">
          <IconMail className="text-blue-500" />
          <a
            className="ms-4 text-black text-md font-semibold"
            href="mailto:muntasirul.msd@gmail.com"
          >
            muntasirul.msd@gmail.com
          </a>
        </span>
        <span className="flex items-center">
          <IconMapPin className="text-blue-500" />
          <p className="ms-4 text-black text-md font-semibold">Hyderabad,IN</p>
        </span>
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    title: (
      <div>
        <a href="https://github.com/Muntasirul-2002">Let's collaborate on <span className="text-blue-500 underline">Github</span>🤝</a>
      </div>
    ),

    header: <SkeletonTwo />,
    className: "md:col-span-1",
  },
  {
    title: "Find me",
    header: <SkeletonThree />,
    className: "md:col-span-1",
  },
  {
    title: "Social Network",
   
    header: <SkeletonFour />,
    className: "md:col-span-2",
   
  },
  {
    title: (
      <div>
        <a className="text-blue-500 underline" href="https://wa.me/+916294268784?text=Hello%20there!" target="_blank">
        Whatsapp
        </a>
      </div>
    ),
   
    header: <SkeletonFive />,
    className: "md:col-span-1",
   
  },
];

export default BentoGridSection;
