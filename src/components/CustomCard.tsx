import React from 'react';
import { Button, Card, Image } from '@nextui-org/react';
import Link from 'next/link';

interface CustomCardProps {
  title: string;
  image: string;
  label: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, image, label }) => {
  return (
    <Card shadow="sm" isPressable onPress={() => console.log(`${title} pressed`)} 
    className="border-none rounded-none bg-transparent outline-none w-full bg-red-400"
    style={{ transform: 'none', transition: 'none' }}>
      <Link href="/" className="flex flex-row justify-start items-center w-full ">
        <img
          src={image}
          alt={title}
          className="w-[20%] object-cover h-[140px]"
          style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} // Optional: Add a shadow for depth
        />
          <p>{title}</p>
          <p className="text-default-500">{label}</p>
      </Link>
    </Card>
  );
};

export default CustomCard;