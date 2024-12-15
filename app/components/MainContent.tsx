import React from 'react'; 
import Typography from './ui/Typography';
import Image from 'next/image';
import Button from './ui/Button';

const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col items-center md:items-start text-center md:text-left px-4 py-8 md:px-12 md:py-16">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-4 md:gap-8 mt-8 md:mt-12">
        <Typography 
          variant="hero"
        >
          Hello!
        </Typography>
        <Image
          src="/icons/v-sign.svg"
          alt="Peace sign emoji"
          className="h-16 w-16 md:h-[160.66px] md:w-[96.58px] md:ml-[60px] md:mt-[20px]"
          width={96.58}
          height={160.66}
        />
 
      </div>
      <span
        className="font-lunchtype22 mt-[24px] text-[18px] md:text-[36px] lg:text-[36px] text-gray-800" 
      >
        Welcome to Jaguar Studio, a <strong>product design studio</strong> dedicated to
        helping companies create digital design experiences infused with{' '}
        <strong>strategic vision</strong> and <strong>bold design.</strong>
      </span>
      <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 w-full sm:w-auto justify-center md:justify-start px-2 md:px-0">
        <Button label="View portfolio" variant="outline" />
        <Button label="View resume" variant="outline" />
      </div>
    </main>
  );
};

export default MainContent;
