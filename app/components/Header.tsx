import React from 'react';  
import Image from 'next/image';
import Link from './ui/Link';

const Header: React.FC = () => {
  return (
    <header className=" pt-[60px] mx-8">
      <div className='flex items-center justify-between pt-[24px] flex-row '>
      <Image  src="/logo.svg" alt="Jaguar Studio Logo" width={442.85} height={29.76} />
      <nav className="flex gap-6">
        <Link className='h-[20px] w-[75px]' href="#portfolio" label="Portfolio" />
        <Link className='h-[20px] w-[53px]' href="#about" label="About" />
        <Link className='h-[20px] w-[37px]' href="#play" label="Play" />
        <Link className='h-[20px] w-[70px]' href="#contact" label="Contact" />
      </nav>
      </div>
    </header>
  );
};

export default Header; 