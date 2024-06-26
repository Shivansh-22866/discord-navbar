'use client'
import React from 'react'
import Cards from './cards';

interface UserDetailsProps {
    params: {
      userId: string;
    };
}

function Discover({ params }: UserDetailsProps) {
  return (
    <div className='ml-16'>
        <h1>{params.userId}: Discover</h1>
        <div>
          <Cards/>
        </div>
    </div>
  )
}

export default Discover