'use client';
import CustomInput from '@/components/CustomInput';
import { useState } from 'react';

interface UserDetailsProps {
  params: {
    userId: string;
  };
}

const UserDetails = ({ params }: UserDetailsProps) => {
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const textInputOptions = {
    type: 'text',
    include: [],
    exclude: [],
    placeholder: 'Enter your input',
    required: true,
    minLength: 5,
    maxLength: 100,
    value: inputValue,
    setValue: setInputValue,
    pattern: '^[a-zA-Z0-9]*$'
  };

  const emailInputOptions = {
    type: 'email',
    include: [],
    exclude: [],
    placeholder: 'Enter your email',
    required: true,
    minLength: 5,
    maxLength: 100,
    value: emailValue,
    setValue: setEmailValue,
    pattern: '^\\S+@\\S+\\.\\S+$'
  };

  const passwordInputOptions = {
    type: 'password',
    include: [],
    exclude: [],
    placeholder: 'Enter your password',
    required: true,
    minLength: 8,
    maxLength: 20,
    value: passwordValue,
    setValue: setPasswordValue,
    pattern: '^[a-zA-Z0-9!@#$%^&*]*$'
  };

  return (
    <div className='ml-16'>
      <h1>Hello User {params.userId}</h1>
      <div className='p-4 w-[360px]'>
        <CustomInput options={textInputOptions} label="Text Input" />
        <CustomInput options={emailInputOptions} label="Email Input" />
        <CustomInput options={passwordInputOptions} label="Password Input" />
      </div>
    </div>
  );
};

export default UserDetails;
