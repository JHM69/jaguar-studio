// @typescript-eslint/no-unused-vars

import React from 'react';

interface LinkProps {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}

const Link: React.FC<LinkProps> = ({ href, label, className="", onClick }) => (
  <a href={href} className={`block py-2 px-4 text-base md:text-lg ${className}`}>
    {label}
  </a>
);

export default Link;