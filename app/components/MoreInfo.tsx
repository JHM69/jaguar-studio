import React from 'react';
import Image from 'next/image';
import Typography from './ui/Typography';
import StarsIcon from '../../public/icons/stars.svg';
import EyeIcon from '../../public/icons/eye.svg';

const MoreInfo: React.FC = () => {
  return (
    <div className="px-10 mt-24">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div className="w-[930px] pt-[34px] justify-center items-center flex flex-col">
          <Typography
            variant="body"
            className=" leading-50  "
          >
           Jaguar Studio, the independent studio of Manuela Odell, is dedicated to building digital products across web, mobile, and any other interface, using a human-centered approach and quality craft. We can be your design partner for{' '}
            <strong>product strategy</strong>, <strong>product design</strong>, and{' '}
            <strong>development</strong>.
          </Typography>
        </div>
       
          <Image className='items-center mt-[55px] ml-[40px] justify-center' src={StarsIcon} alt="Stars Icon" width={210} height={230} />
         
      </div>

      {/* Collaboration Section */}
      <div className="justify-between items-start flex mt-[60px]">
         
          <Image className=' ml-[94px] mt-[115px] ' src={EyeIcon} alt="Eye Icon" width={63.4} height={81.2} />
  
        <Typography
          variant="body"
          className=" text-right w-[890px] leading-50 mr-[-20px] "
        >
          With a deep understanding of <strong>design</strong>, <strong>culture</strong>, and{' '}
          <strong>technology</strong>, we transform ideas into powerful visual
          experiences, helping your company <strong>stand out</strong> and{' '}
          <strong>thrive</strong> in a competitive landscape. Let’s collaborate
          to create <strong>something exceptional</strong>.<br /><br />
          Open for freelance, permalance, and full-time opportunities.
        </Typography>
      </div>

      
    </div>
  );
};

export default MoreInfo;
