import React from 'react';
import Image from 'next/image';
import Typography from './ui/Typography';
import StarsIcon from '../../public/icons/stars.svg';
import EyeIcon from '../../public/icons/eye.svg';

const MoreInfo: React.FC = () => {
  return (
    <div className="px-4 md:px-10 mt-12 md:mt-24">
      {/* Header Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="w-full md:w-[930px] pt-4 md:pt-[34px] flex flex-col items-center">
          <span
            className="font-lunchtype22 text-[18px] md:text-[36px] lg:text-[36px] text-gray-800 text-left" 
          >
           Jaguar Studio, the independent studio of Manuela Odell, is dedicated to building digital products across web, mobile, and any other interface, using a human-centered approach and quality craft. We can be your design partner for{' '}
            <strong>product strategy</strong>, <strong>product design</strong>, and{' '}
            <strong>development</strong>.
          </span>
        </div>
       
          <Image className="mt-6 w-36 md:w-[210px] md:mt-0 md:ml-[40px]" src={StarsIcon} alt="Stars Icon" width={210} height={230} />
         
      </div>

      {/* Collaboration Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-[60px]">
         
          <Image className="mt-6 md:mt-0 md:ml-[94px]" src={EyeIcon} alt="Eye Icon" width={63.4} height={81.2} />
  
        <span
          className="font-lunchtype22 text-[18px] md:text-[36px] lg:text-[36px] text-gray-800 md:ml-16 text-right"
          
        >
          With a deep understanding of <strong>design</strong>, <strong>culture</strong>, and{' '}
          <strong>technology</strong>, we transform ideas into powerful visual
          experiences, helping your company <strong>stand out</strong> and{' '}
          <strong>thrive</strong> in a competitive landscape. Let’s collaborate
          to create <strong>something exceptional</strong>.<br /><br />
          Open for freelance, permalance, and full-time opportunities.
        </span>
      </div>

      
    </div>
  );
};

export default MoreInfo;
