import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Higher Education Quality</h2>
        <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Information System"
            subTitle="Debrebirhan University (2022 - 2026)"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Techtonic Tribe (2023)"
            des="The Bootcamp was given in Debrebirhan University make me certfied on full stack development And i spezilized frame works by my self from diffrent source and by developing Diffrent Projects ."
          />
          <ResumeCard
            title="Cyber Security "
            subTitle="Self-thougth (2023- Present)"
            des="Curently am learning in cyber security by myself and i am bulding projects parallel to Web development."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Jounier School</h2>
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2021</p>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Secondary School"
            subTitle="Gara Guri-(2018-2021)"
            des="I have learned there since grade 9 until grade 12."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
