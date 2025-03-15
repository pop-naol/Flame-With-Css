import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack"
            subTitle=" Code Alpha Software Development (204)"
            des="The Training provided me several knowladge and real life work expriance."
          />
          <ResumeCard
            title="Front-End "
            subTitle=" Oasis infobyte(2024)"
            
            des="The Training was my second internship so it also provided me more  knowladge and real life work expriance."
          />
          <ResumeCard
            title="Cyber Security"
            subTitle="Prodgiy infotech (2024)"
            
            des="it was my frist cybersecurity internship i get may experiance in cyber."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
