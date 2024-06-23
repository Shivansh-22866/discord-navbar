import React from 'react'

interface UserDetailsProps {
    params: {
      userId: string;
    };
}

function Chats({ params }: UserDetailsProps) {
  return (
    <div className='ml-16'>
        <h1>{params.userId}: Chats</h1>
    </div>
  )
}

export default Chats