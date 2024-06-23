import React from 'react'

interface UserDetailsProps {
    params: {
      userId: string;
    };
}

function Settings({ params }: UserDetailsProps) {
  return (
    <div className='ml-16'>
        <h1>{params.userId}: Settings</h1>
    </div>
  )
}

export default Settings