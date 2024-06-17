// src/pages/UserDetails.tsx

import Navbar from '@/components/Navbar'; // Adjust the import path as per your project setup

interface UserDetailsProps {
  params: {
    userId: string;
  };
}

const UserDetails = ({ params }: UserDetailsProps) => {
  return (
    <div className='ml-16'>
      <Navbar id={params.userId}/>
      <h1>Hello User {params.userId}</h1>
    </div>
  );
};

export default UserDetails;
