import React from 'react';
import CustomCard from '@/components/CustomCard';

interface DiscoverProps {
  params: {
    userId: string;
  };
}

const Discover: React.FC<DiscoverProps> = ({ params }) => {
  const cardData = [
    {
      title: 'Orange',
      content: 'Delicious and juicy fruit.',
      imageSrc: '/logo.jpeg',
      time: '10:00 AM',
      unreadMessages: 2,
      isActive: true,
    },
    {
      title: 'Tangerine',
      content: 'Sweet and tangy citrus fruit.',
      imageSrc: '/logo.jpeg',
      time: '11:30 AM',
      unreadMessages: 0,
      isActive: false,
    },
    {
      title: 'Raspberry',
      content: 'Small, juicy, and rich in antioxidants.',
      imageSrc: '/logo.jpeg',
      time: '1:00 PM',
      isActive: true,
    },
    {
      title: 'Lemon',
      content: 'Sour yet refreshing citrus fruit.',
      imageSrc: '/logo.jpeg',
      time: '3:30 PM',
      unreadMessages: 1,
    },
  ];

  return (
    <div className="ml-16">
      <h1>{params.userId}: Discover</h1>
      <div className="grid gap-4 grid-cols-1">
        {cardData.map((item, index) => (
          <CustomCard
            key={index}
            title={item.title}
            content={item.content}
            imageSrc={item.imageSrc}
            time={item.time}
            unreadMessages={item.unreadMessages}
            isActive={item.isActive}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
