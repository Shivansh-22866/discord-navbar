'use client';
import React, { useState } from 'react';
import CustomInput from '@/components/CustomInput';
import { Button } from '@nextui-org/button';

interface UserDetailsProps {
  params: {
    userId: string;
  };
}

const UserDetails: React.FC<UserDetailsProps> = ({ params }) => {
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const textInputOptions = {
    type: 'text',
    include: [],
    exclude: ['admin'],
    placeholder: 'Enter your input',
    required: true,
    minLength: 5,
    maxLength: 100,
    value: inputValue,
    setValue: setInputValue,
    pattern: '^[a-zA-Z ]*$',
    name: 'text-input'
  };

  const emailInputOptions = {
    type: 'email',
    include: [],
    exclude: ['.tk', '@yaml'],
    placeholder: 'Enter your email',
    required: true,
    minLength: 5,
    maxLength: 100,
    value: emailValue,
    setValue: setEmailValue,
    pattern: '^\\S+@\\S+\\.\\S+$',
    name: 'email-input'
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
    pattern: '^[a-zA-Z0-9!@#$%^&*]*$',
    name: 'password-input'
  };

  return (
    <div className="ml-16">
      <h1>Hello User {params.userId}</h1>
      <div className="p-4 w-[360px]">
        <form onSubmit={handleSubmit}>
          <CustomInput options={textInputOptions} label="Text Input" />
          <CustomInput options={emailInputOptions} label="Email Input" />
          <CustomInput options={passwordInputOptions} label="Password Input" />
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
