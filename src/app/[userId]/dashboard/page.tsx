'use client'
import React from 'react';
import CustomDialog from '../../../components/CustomDialog';

interface UserDetailsProps {
  params: {
    userId: string;
  };
}

function Dashboard({ params }: UserDetailsProps) {
  const dialogContent = {
    title: 'Frover',
    userName: 'User123',
    email: 'abc@xyz.com',
    buttons: ['Settings', 'Feedback', 'Help'],
    userImage: '/logo.jpeg'
  };

  return (
    <div className='ml-16'>
      <h1>{params.userId}: Dashboard</h1>
      <CustomDialog content={dialogContent} />
    </div>
  );
}

export default Dashboard;
