import React from 'react';
import Typography from './ui/Typography';

const Footer: React.FC = () => {
  return (
    <footer className="px-4 md:px-10">
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 mt-4 md:mt-8">
        {/* Left Section */}
        <div>
          <Typography variant="tiny" className="font-light pt-1 md:pt-[40px] ">
            General Inquiries
          </Typography>
          <Typography variant="small" className="pt-[10px] font-bold" >
            work@jaguarstudio.co
          </Typography>
        </div>
        {/* Right Section */}
        <div className='pr-[110px]'>
          <Typography variant="tiny" className="font-light pt-2 md:pt-[40px] ">
            Social Media
          </Typography>
          <div className="flex font-bold flex-col py-[-4px] justify-center mt-[10px]">
            <a href="https://instagram.com" >
              Instagram
            </a>
            <a href="https://dribbble.com"  >
              Dribbble
            </a>
          </div>
        </div>
      </div>
      <Typography variant="tiny" className="py-4 text-center font-bold">
        Jaguar Studios ©2024
      </Typography>
    </footer>
  );
};

export default Footer;
