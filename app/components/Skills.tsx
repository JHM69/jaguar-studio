/* eslint-disable @next/next/no-img-element */
import React from "react";
import Typography from "./ui/Typography";

const Skills: React.FC = () => {
  return (
    <section className="p-8 e">
      <Typography variant="h2" className="mb-8 text-36px">
        Skills
      </Typography>
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        {/* Core Specialties */}
        <div className="flex flex-col">
          <Typography variant="h3" className="mb-4 text-36px">
            Core Specialties:
          </Typography>
          <Typography variant="body" className="mb-6 text-36px">
            I do this myself
          </Typography>
          <ul className="space-y-2">
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
              <li key={item} className="flex items-center text-36px">
                <img src="/icons/finger.svg" alt="Finger pointing" className="mr-2 h-4 w-6" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Extras */}
        <div className="flex flex-col">
          <Typography variant="h3" className="mb-4 text-36px">
            Extras:
          </Typography>
          <Typography variant="body" className="mb-6 text-36px">
            I know people who can
          </Typography>
          <ul className="space-y-2">
            {[
              "Web development",
              "Mobile development",
              "Illustration",
              "Motion/animation",
              "Photo/video production",
              "Typography",
            ].map((item) => (
              <li key={item} className="flex items-center text-36px">
                <img src="/icons/finger.svg" alt="Finger pointing" className="mr-2 h-4 w-6" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
