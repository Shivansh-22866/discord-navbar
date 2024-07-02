'use client'
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
  const [isFormValid, setIsFormValid] = useState(true);
  const [inputError, setInputError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedInputValue = inputValue.trim();
    const trimmedEmailValue = emailValue.trim();
    const trimmedPasswordValue = passwordValue.trim();

    setInputValue(trimmedInputValue);
    setEmailValue(trimmedEmailValue);
    setPasswordValue(trimmedPasswordValue);

    if (trimmedInputValue === '') {
      setInputError('Please enter your input');
    } else {
      setInputError('');
    }

    if (trimmedEmailValue === '') {
      setEmailError('Please enter your email');
    } else {
      setEmailError('');
    }

    if (trimmedPasswordValue === '') {
      setPasswordError('Please enter your password');
    } else {
      setPasswordError('');
    }

    const textInputError = validateInput({
      ...textInputOptions,
      value: trimmedInputValue,
    });
    const emailInputError = validateInput({
      ...emailInputOptions,
      value: trimmedEmailValue,
    });
    const passwordInputError = validateInput({
      ...passwordInputOptions,
      value: trimmedPasswordValue,
    });

    if (textInputError || emailInputError || passwordInputError ||
        inputError || emailError || passwordError) {
      setIsFormValid(false);
      console.log('Form has errors. Please correct them.');
    } else {
      setIsFormValid(true);
      console.log('Form submitted successfully!');
    }
  };

  const validateInput = (options: any) => {
    let errorMessage = '';

    if (options.pattern && !new RegExp(options.pattern).test(options.value)) {
      errorMessage = `Invalid input format`;
    } else if (
      options.includeAll && options.includeAll.length > 0 &&
      !options.includeAll.every((item: string) => options.value.includes(item))
    ) {
      errorMessage = `Must include all of: ${options.includeAll.join(', ')}`;
    } else if (
      options.includeOneOf && options.includeOneOf.length > 0 &&
      !options.includeOneOf.some((item: string) => options.value.includes(item))
    ) {
      errorMessage = `Must include one of: ${options.includeOneOf.join(', ')}`;
    } else if (
      options.exclude && options.exclude.length > 0 &&
      options.exclude.some((item: string) => options.value.includes(item))
    ) {
      errorMessage = `Cannot include: ${options.exclude.join(', ')}`;
    }

    return errorMessage;
  };

  const textInputOptions = {
    type: 'text',
    includeAll: [],
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
    includeAll: [],
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
    includeAll: [],
    exclude: [],
    placeholder: 'Enter your password',
    required: true,
    minLength: 8,
    maxLength: 20,
    value: passwordValue,
    setValue: setPasswordValue,
    pattern: '^[a-zA-Z0-9!@#$%^&*]*$',
    name: 'password-input',
    passwordRequirements: {
      requireCapitalLetter: true,
      requireSymbol: true,
      requireNumber: true,
    }
  };

  return (
    <div className="ml-16">
      <h1>Hello User {params.userId}</h1>
      <div className="p-4 w-[360px]">
        <form onSubmit={handleSubmit}>
          <CustomInput
            options={textInputOptions}
            label="Text Input"
            isVisible={isFormValid}
          />
          {!isFormValid && inputError && (
            <p className="text-red-500">{inputError}</p>
          )}
          {!isFormValid && inputValue && (
            <p className="text-red-500">{validateInput({
              ...textInputOptions,
              value: inputValue.trim(),
            })}</p>
          )}
          <CustomInput
            options={emailInputOptions}
            label="Email Input"
            isVisible={isFormValid}
          />
          {!isFormValid && emailError && (
            <p className="text-red-500">{emailError}</p>
          )}
          {!isFormValid && emailValue && (
            <p className="text-red-500">{validateInput({
              ...emailInputOptions,
              value: emailValue.trim(),
            })}</p>
          )}
          <CustomInput
            options={passwordInputOptions}
            label="Password Input (Must include at least one number, a capital letter and a symbol, such as @,# etc"
            isVisible={isFormValid}
          />
          {!isFormValid && passwordError && (
            <p className="text-red-500">{passwordError}</p>
          )}
          {!isFormValid && passwordValue && (
            <p className="text-red-500">{validateInput({
              ...passwordInputOptions,
              value: passwordValue.trim(),
            })}</p>
          )}
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
