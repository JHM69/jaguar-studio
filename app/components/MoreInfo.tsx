import React from 'react';
import Image from 'next/image';
import Typography from './ui/Typography';
import StarsIcon from '../../public/icons/stars.svg';
import EyeIcon from '../../public/icons/eye.svg';

const MoreInfo: React.FC = () => {
  return (
    <div className="px-8 my-24">
      {/* Header Section */}
      <div className="flex  justify-between items-start">
        <div className="w-full md:w-9/12">
          <Typography
            variant="body"
            className="text-[28px] md:text-[32px] leading-8  "
          >
            <strong>Jaguar Studio</strong>, the independent studio of Manuela Odell, is dedicated to building digital products across web, mobile, and any other interface, using a human-centered approach and quality craft. We can be your design partner for{' '}
            <strong>product strategy</strong>, <strong>product design</strong>, and{' '}
            <strong>development</strong>.
          </Typography>
        </div>
      
           
          <Image className='w-48 h-40' src={StarsIcon} alt="Stars Icon" width={220} height={230} />
         
      </div>

      {/* Collaboration Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center md:space-x-4">
         
          <Image className='w-24 h-40' src={EyeIcon} alt="Eye Icon" width={63.4} height={81.2} />
  
        <Typography
          variant="body"
          className="text-[28px] md:text-[32px] text-right  "
        >
          With a deep understanding of <strong>design</strong>, <strong>culture</strong>, and{' '}
          <strong>technology</strong>, we transform ideas into powerful visual
          experiences, helping your company <strong>stand out</strong> and{' '}
          <strong>thrive</strong> in a competitive landscape. Let’s collaborate
          to create <strong>something exceptional</strong>.
        </Typography>
      </div>

      {/* Footer Section */}
      <div className="mt-12 md:text-[32px] text-right md:text-right text-sm text-gray-600">
        Open for freelance, permalance, and full-time opportunities.
      </div>
    </div>
  );
};

export default MoreInfo;
