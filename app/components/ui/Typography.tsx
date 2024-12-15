import React from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'body' | 'body1' | 'tiny' | 'hero' | 'small' | 'aux';
  children: React.ReactNode;
  className? : string | null
}

const Typography: React.FC<TypographyProps> = ({ variant, children, className="" }) => {
  const styles = {
    hero: "font-instrument-serif text-6xl md:text-[200px] leading-tight md:leading-none",
    h1: "font-instrument-serif text-3xl md:text-5xl leading-snug",
    h2: "font-instrument-serif text-2xl md:text-4xl leading-snug",
    h3: "font-lunchtype22 text-xl md:text-2xl font-medium leading-snug",
    body: "font-lunchtype22 text-xl  md:text-lg lg:text-[36px]",
    body1: "font-lunchtype22 text-sm md:text-base lg:text-[30px] leading-relaxed",
    small: "font-lunchtype22 text-sm md:text-base lg:text-[20px] leading-snug",
    tiny: "font-lunchtype22 text-xs md:text-sm lg:text-[16px] leading-snug",
    aux: "font-orbit text-xs md:text-base leading-snug",
  };

  return <div className={ className+ ' text-black ' + styles[variant]}>{children}</div>;
};

export default Typography;