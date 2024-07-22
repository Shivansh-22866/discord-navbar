'use client'
import React from 'react'
import AsyncButton from '@/components/AsyncButton'

const handleClick = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const isSuccess = Math.random() < 0.8;
  if (isSuccess) {
      return 'Response Data';
  } else {
      throw new Error('Negative Response');
  }
};

const handleSuccess = (result : any) => {
  console.log('Success:', result);
};

const handleError = () => {
  console.error('Error occurred');
};


interface UserDetailsProps {
    params: {
      userId: string;
    };
}

function Reports({ params }: UserDetailsProps) {

  return (
    <div className='ml-16'>
        <h1>{params.userId}: Reports</h1>
        <div className="flex justify-center items-center h-screen bg-slate-800">
            <AsyncButton
                onClick={handleClick}
                onSuccess={handleSuccess}
                onError={handleError}
                initialText="Click Me!"
            />
        </div>
    </div>
  )
}

export default Reports