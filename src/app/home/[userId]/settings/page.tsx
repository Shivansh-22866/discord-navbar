import Navbar from '@/components/Navbar';
import React from 'react'

interface UserDetailsProps {
    params: {
      userId: string;
    };
}

function Dashboard({ params }: UserDetailsProps) {
  return (
    <div className='ml-16'>
        <Navbar id={params.userId}/>
        <h1>{params.userId}: Settings</h1>
    </div>
  )
}

export default Dashboard