
import React from 'react';

interface LinkProps {
  href: string;
  label: string;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ href, label, className }) => {
  return (
    <a href={href} className={className+" text-gray-900 font-lunchtype22 font-bold hover:underline"}>
      {label}
    </a>
  );
};

export default Link;