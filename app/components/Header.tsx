'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from './ui/Link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="pt-8 md:pt-16 mx-4 md:mx-10">
      <div className="flex items-center justify-between px-4 ">
        <Image
          className="w-72 md:w-96"
          src="/logo.svg"
          alt="Jaguar Studio Logo"
          width={442.85}
          height={29.76}
        />
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex gap-4 md:gap-8 font-bold">
          <Link className="text-lg md:text-xl" href="#portfolio" label="Portfolio" />
          <Link className="text-lg md:text-xl" href="#about" label="About" />
          <Link className="text-lg md:text-xl" href="#play" label="Play" />
          <Link className="text-lg md:text-xl" href="#contact" label="Contact" />
        </nav>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-10 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4"
        >
          {/* Close Icon */}
          <svg className="h-6 w-6" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex flex-col items-center gap-6 text-2xl">
          <Link
            onClick={() => setIsOpen(false)}
            className="text-xl"
            href="#portfolio"
            label="Portfolio"
          />
          <Link
            onClick={() => setIsOpen(false)}
            className="text-xl"
            href="#about"
            label="About"
          />
          <Link
            onClick={() => setIsOpen(false)}
            className="text-xl"
            href="#play"
            label="Play"
          />
          <Link
            onClick={() => setIsOpen(false)}
            className="text-xl"
            href="#contact"
            label="Contact"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
