import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
      <Card
          title="Hosting Websites"
          des=" I create beautiful, responsive, and modern websites tailored to your needs. With a focus on design and functionality."
          icon={<FaGlobe />}
        />
          <Card
            title="Website Design"
            des="I design stunning, user-friendly websites that are both modern and responsive. Focusing on aesthetics and functionality."
            icon={<SiAntdesign />}
          />
        <Card
          title="Business Stratagy"
          des="I create tailored business strategies that drive growth and success. By analyzing market trends and your goals, I develop actionable plans to optimize resources, improve performance."
        />

        
      </div>

      <Title title=""
       des="What I Do As Agent" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">

        <Card
          title="App Development"
          des="
I connect businesses with top developers to create innovative, user-friendly apps, managing the entire process from concept to launch for seamless execution and high-quality results."
          icon={<AiFillAppstore />}
        />
            <Card
              title="Mobile Development"
              des=" I collaborate with businesses and top mobile developers to create innovat
              ive, user-friendly apps, managing the process to ensure seamless execution and high-quality results.."
              icon={<FaMobile />}
            />
          <Card
            title="Video Edting"
            des="I work with businesses and talented video editors to pro
            duce engaging, high-quality video content, overseeing the process to ensure smooth execution and exceptional results."
            icon={<SiProgress />}
          />
       

        
      </div>
    </section>
  );
}

export default Features