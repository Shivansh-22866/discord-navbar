import Navbar from '@/components/Navbar';
import React from 'react'

interface UserDetailsProps {
    params: {
      userId: string;
    };
}

function Discover({ params }: UserDetailsProps) {
  return (
    <div className='ml-16'>
        <h1>{params.userId}: Discover</h1>
    </div>
  )
}

export default Discover