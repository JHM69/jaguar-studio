import React from 'react';  
import Image from 'next/image';
import Link from './ui/Link';

const Header: React.FC = () => {
  return (
    <header className=" pt-[64px] mx-10">
      <div className='flex items-center justify-between flex-row '>
      <Image className='pt-[20px]' src="/logo.svg" alt="Jaguar Studio Logo" width={442.85} height={29.76} />
      <nav className="flex gap-[35px] pt-[10px]">
        <Link className='text-[20px] h-[20px] w-[75px]' href="#portfolio" label="Portfolio" />
        <Link className='text-[20px] h-[20px] w-[53px]' href="#about" label="About" />
        <Link className='text-[20px] h-[20px] w-[37px]' href="#play" label="Play" />
        <Link className='text-[20px] h-[20px] w-[70px]' href="#contact" label="Contact" />
      </nav>
      </div>
    </header>
  );
};

export default Header; 