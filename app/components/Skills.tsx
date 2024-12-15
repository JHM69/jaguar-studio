/* eslint-disable @next/next/no-img-element */
import React from "react";
import Typography from "./ui/Typography";
import Image from "next/image";

const Skills: React.FC = () => {
  return (
    <div className="pt-8 md:pt-12 lg:pt-[55px] px-4 md:px-8 lg:pl-[49px] leading-relaxed">
      <Typography variant="h2" className="text-3xl md:text-[64px] italic">
        Skills
      </Typography>
      <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-16">
        {/* Core Specialties */}
        <div className="flex flex-col mt-6 md:mt-[30px]">
          <Typography variant="body" className="font-bold">
            Core Specialties:
          </Typography>
          <Typography variant="body1" className="font-bold pt-2 md:pt-4">
            I do this myself
          </Typography>
          <div className="pt-[8px] md:pt-[28px]">
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
              <div className="flex my-2 items-center" key={item}>
               <Image
                  className="mr-[10px] w-6 h-6 md:w-[40px] md:h-[40px]"
                  src="/icons/finger.svg"
                  alt="Finger pointing"
                  height={40}
                  width={40}
                />
                <Typography variant="body">{item}</Typography>
              </div>
            ))}
          </div>
        </div>
        {/* Extras */}
        <div className="flex flex-col mt-6 md:mt-[30px] lg:ml-auto lg:w-1/2">
          <Typography variant="body" className="font-bold">
            Extras:
          </Typography>
          <Typography variant="body1" className="font-bold pt-2 md:pt-4">
            I know people who can
          </Typography>
          <div className="pt-[8px] md:pt-[28px]">
            {[
              "Web development",
              "Mobile development",
              "Illustration",
              "Motion/animation",
              "Photo/video production",
              "Typography",
            ].map((item) => (
              <div className="flex my-2 items-center" key={item}>
                <Image
                  className="mr-[10px] w-6 h-6 md:w-[40px] md:h-[40px]"
                  src="/icons/finger.svg"
                  alt="Finger pointing"
                  height={40}
                  width={40}
                />
                <Typography variant="body">{item}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
