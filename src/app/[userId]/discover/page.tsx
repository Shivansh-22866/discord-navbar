'use client';
import React from 'react';
import CustomCard from '@/components/CustomCard';

interface UserDetailsProps {
  params: {
    userId: string;
  };
}

function Discover({ params }: UserDetailsProps) {
  const list = [
    {
      title: "Orange",
      img: "/logo.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/logo.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/logo.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/logo.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/logo.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/logo.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/logo.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/logo.jpeg",
      price: "$12.20",
    },
  ];

  return (
    <div className='ml-16'>
      <h1>{params.userId}: Discover</h1>
      <div className="gap-4 grid grid-cols-4 sm:grid-cols-2">
        {list.map((item, index) => (
          <CustomCard
            key={index}
            title={item.title}
            image={item.img}
            label={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Discover;
