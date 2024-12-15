import React from 'react'; 
import Typography from './ui/Typography';
import Image from 'next/image';
import Button from './ui/Button';

const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col items-start text-left p-8">
      <div className="flex items-center">
        <Typography
          className="text-[300px] leading-[390px] font-serif text-black"
          variant="hero"
        >
          Hello!
        </Typography>
        <Image
          src="/icons/v-sign.svg"
          alt="Peace sign emoji"
          className="ml-6"
          width={96.58}
          height={153.66}
        />
      </div>
      <Typography
        className="text-[38px] leading-relaxed text-gray-800"
        variant="body"
      >
        Welcome to Jaguar Studio, a <b>product design studio</b> dedicated to
        helping companies create digital design experiences infused with{' '}
        <b>strategic vision</b> and <b>bold design.</b>
      </Typography>
      <div className="flex gap-4 mt-4">
        <Button label="View portfolio" variant="outline" />
        <Button label="View resume" variant="outline" />
      </div>
    </main>
  );
};

export default MainContent;
