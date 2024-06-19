// Footer.tsx
import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

const Footer: React.FC = () => {
  return (
    <>
      <Image src="/logo.jpeg" alt="Footer Image" width={32} height={32} className='sidebar-icon'/>
    </>
  );
};

export default Footer;
