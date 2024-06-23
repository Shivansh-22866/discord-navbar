import React from 'react'

interface UserDetailsProps {
    params: {
      userId: string;
    };
}

function Dashboard({ params }: UserDetailsProps) {
  return (
    <div className='ml-16'>
        <h1>{params.userId}: Dashboard</h1>
    </div>
  )
}

export default Dashboard