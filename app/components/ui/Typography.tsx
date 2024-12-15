import React from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'body' | 'body1' | 'tiny' | 'hero' | 'small' | 'aux';
  children: React.ReactNode;
  className? : string | null
}

const Typography: React.FC<TypographyProps> = ({ variant, children, className="" }) => {
  const styles = {
    hero: "font-instrument-serif text-6xl ",
    h1: "font-instrument-serif text-4xl",
    h2: "font-instrument-serif",
    h3: "font-lunchtype22 text-xl font-medium",
    body: "font-lunchtype22 text-[36px]",
    body1: "font-lunchtype22 text-[30px]",
    small: "font-lunchtype22 text-[20px]",
    tiny: "font-lunchtype22 text-[16px]",
    aux: "font-orbit text-base",
  };

  return <div className={ className+ ' text-black ' + styles[variant]}>{children}</div>;
};

export default Typography;