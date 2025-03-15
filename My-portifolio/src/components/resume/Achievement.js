import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
         
          <h2 className="text-3xl md:text-4xl font-bold">My Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Python Hackathon."
            result="Success"
            des="I am proud to have achieved third place in the Python Hackathon organized by Debre Berhan University, where I demonstrated my skills and knowledge in Python programming"
          />
          <ResumeCard
            title="Certified Full Stack Developer."
            result="Success"
            des=" I have successfully completed the entire bootcamp at Techtonic Tribe, where I gained in-depth knowledge and hands-on experience in various aspects of technology and software developmen"
          />
          <ResumeCard
            title="Web Development Hackathon"
            result="Success"
            des="I actively participated in the Web Development Hackathon at Debre Berhan University, where I had the opportunity to showcase my skills in web development. Throughout the event, I collaborated with other participants to solve complex problems, design innovative solutions, and build functional web applications."
          />
        </div>
      </div> 
    </motion.div>
  );
};

export default Achievement;
