import React from 'react';
import Typography from './ui/Typography';

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="flex flex-row justify-between gap-16  mx-[22px]">
        {/* Left Section */}
        <div>
          <Typography variant="tiny" className="font-light pt-[40px]">
            General Inquiries
          </Typography>
          <Typography variant="small" className="pt-[10px] font-bold" >
            work@jaguarstudio.co
          </Typography>
        </div>
        {/* Right Section */}

        

        <div className='pr-[110px]'>
        <Typography variant="tiny" className="font-light pt-[40px]">
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
      <Typography variant="tiny" className="pb-[30px] pt-[35px] text-center font-bold">
        Jaguar Studios ©2024
      </Typography>
    </footer>
  );
};

export default Footer;
