import React from 'react'; 
import Typography from './ui/Typography';
import Image from 'next/image';
import Button from './ui/Button';

const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col items-start text-left p-10">
      <div className="flex items-center mt-[44px]">
        <Typography
          className="text-[300px]  mt-[48px] font-serif text-black"
          variant="hero"
        >
          Hello!
        </Typography>
        <Image
          src="/icons/v-sign.svg"
          alt="Peace sign emoji"
          className="ml-[60px] mt-[-20px]"
          width={96.58}
          height={160.66}
        />
      </div>
      <Typography
        className="mt-[24px] leading-[50px] text-gray-800"
        variant="body"
      >
        Welcome to Jaguar Studio, a <strong>product design studio</strong> dedicated to
        helping companies create digital design experiences infused with{' '}
        <strong>strategic vision</strong> and <strong>bold design.</strong>
      </Typography>
      <div className="flex gap-6 mt-[44px]">
        <Button label="View portfolio" variant="outline" />
        <Button label="View resume" variant="outline" />
      </div>
    </main>
  );
};

export default MainContent;
