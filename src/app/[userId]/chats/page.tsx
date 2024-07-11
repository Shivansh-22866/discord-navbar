import React from 'react'
import DynamicForm from '@/components/DynamicForm';

interface UserDetailsProps {
    params: {
      userId: string;
    };
}

function Chats({ params }: UserDetailsProps) {
  return (
    <div className='ml-16'>
        <h1>{params.userId}: Chats</h1>
        <DynamicForm/>
    </div>
  )
}

export default Chats