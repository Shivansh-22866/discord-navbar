import React from 'react'

interface UserDetailsProps {
    params: {
      userId: string;
    };
}

function Reports({ params }: UserDetailsProps) {
  return (
    <div className='ml-16'>
        <h1>{params.userId}: Reports</h1>
    </div>
  )
}

export default Reports