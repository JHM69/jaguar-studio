/* eslint-disable @next/next/no-img-element */
import React from "react";
import Typography from "./ui/Typography";
import Image from "next/image";

const Skills: React.FC = () => {
  return (
    <div className="pt-[55px] pl-[49px] leading-48">
      <Typography variant="h2" className=" text-[64px] italic">
        Skills
      </Typography>
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        {/* Core Specialties */}
        <div className="flex flex-col mt-[30px]">
          <Typography variant="body" className="font-bold">
            Core Specialties:
          </Typography>
          <Typography variant="body1" className="font-bold">
            I do this myself
          </Typography>
          <div className="pt-[28px] ml-[-11px]">
            {[
              "Product strategy",
              "Product management",
              "UX/UI design",
              "Product design",
              "Brand identity",
              "Web & mobile app design",
              "Creative direction",
              "Design systems",
            ].map((item) => (
             <div className="flex my-[-4.5px]" key={item}>
                <Image className="mr-[10px]" src="/icons/finger.svg" alt="Finger pointing" height={40} width={40}/>
                <Typography variant="body" key={item} > {item} </Typography>
              </div>
            ))}
          </div>
        </div>
        {/* Extras */}
        <div className="flex flex-col mt-[30px] pl-[5px] lg:ml-auto lg:w-1/2">
          <Typography variant="body" className="font-bold">
            Extras:
          </Typography>
          <Typography variant="body1" className="font-bold">
            I know people who can
          </Typography>
          <div className="pt-[28px] ">
            {[
              "Web development",
              "Mobile development",
              "Illustration",
              "Motion/animation",
              "Photo/video production",
              "Typography",
            ].map((item) => (
              <div className="flex my-[-4.5px]" key={item}>
                <Image className="mr-[10px]" src="/icons/finger.svg" alt="Finger pointing" height={40} width={40}/>
                <Typography variant="body" key={item} > {item} </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
