import React from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

interface CustomCardProps {
  title: string;
  image: string;
  label: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, image, label }) => {
  return (
    <Card shadow="sm" isPressable onPress={() => console.log(`${title} pressed`)}>
      <CardBody className="overflow-visible p-2 bg-green-400">
        <Image
          shadow="sm"
          radius="lg"
          width="20%"
          alt={title}
          className="w-full object-cover h-[140px]"
          src={image}
        />
      </CardBody>
      <CardFooter className="text-small justify-between p-2">
        <b>{title}</b>
        <p className="text-default-500">{label}</p>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
