import React from 'react';
import Typography from './ui/Typography';

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="flex flex-row justify-between gap-16 mt-16 mx-24">
        {/* Left Section */}
        <div>
          <Typography variant="body" className="font-light">
            General Inquiries
          </Typography>
          <Typography variant="body" className="text-gray-600 font-bold" >
            work@jaguarstudio.co
          </Typography>
        </div>
        {/* Right Section */}
        <div>
          <Typography variant="body" className="font-light">Social Media</Typography>
          <div className="flex flex-col justify-center mt-2">
            <a href="https://instagram.com" className="font-bold">
              Instagram
            </a>
            <a href="https://dribbble.com" className="font-bold">
              Dribbble
            </a>
          </div>
        </div>
      </div>
      <Typography variant="body" className="mt-8 text-center font-bold text-gray-500">
        Jaguar Studios ©2024
      </Typography>
    </footer>
  );
};

export default Footer;
