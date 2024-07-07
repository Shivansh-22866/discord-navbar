'use client'
import React, { useState } from 'react';
import CustomInput from '@/components/CustomInput';
import SubmitButton from '@/components/CustomButton'; // Import SubmitButton instead of CustomButton

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
  const [passwordStrength, setPasswordStrength] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedInputValue = inputValue.trim();
    const trimmedEmailValue = emailValue.trim();
    const trimmedPasswordValue = passwordValue.trim();

    setInputValue(trimmedInputValue);
    setEmailValue(trimmedEmailValue);
    setPasswordValue(trimmedPasswordValue);

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

    setInputError(textInputError);
    setEmailError(emailInputError);
    setPasswordError(passwordInputError);

    if (textInputError || emailInputError || passwordInputError || inputError || emailError || passwordError) {
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
    type: 'text' as const,
    includeAll: [] as string[],
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
    type: 'email' as const,
    includeAll: [] as string[],
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
    type: 'password' as const,
    includeAll: [] as string[],
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

  const checkPasswordStrength = (password: string) => {
    if (password.length === 0) {
      return '';
    } else if (password.length < 8) {
      return 'Weak';
    } else if (password.length < 12) {
      return 'Moderate';
    } else {
      return 'Strong';
    }
  };

  const getPasswordStrengthSegment = () => {
    switch (passwordStrength) {
      case 'Weak':
        return 33;
      case 'Moderate':
        return 66;
      case 'Strong':
        return 100;
      default:
        return '';
    }
  };

  const getPasswordStrengthColor = (strength: string) => {
    switch (strength) {
      case 'Weak':
        return 'text-red-500';
      case 'Moderate':
        return 'text-yellow-500';
      case 'Strong':
        return 'text-green-500';
      default:
        return '';
    }
  };

  const getPasswordBG = (strength: string) => {
    switch (strength) {
      case 'Weak':
        return 'bg-red-500';
      case 'Moderate':
        return 'bg-yellow-500';
      case 'Strong':
        return 'bg-green-500';
      default:
        return '';
    }
  };

  const handlePasswordChange = (value: string) => {
    setPasswordValue(value);
    setPasswordStrength(checkPasswordStrength(value));
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
            options={{
              ...passwordInputOptions,
              setValue: handlePasswordChange,
            }}
            label="Password Input (Must include at least one number, a capital letter and a symbol, such as @,# etc)"
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
          {passwordStrength && (
            <div className="flex flex-col items-start mt-4">
              <div className={`w-full h-2 bg-gray-200 rounded-md overflow-hidden`}>
                <div
                  style={{ width: `${Number(getPasswordStrengthSegment())}%` }}
                  className={`h-full ${getPasswordBG(passwordStrength)}`}
                />
              </div>
              <p className="my-2 text-sm">
                Password Strength: <span className={getPasswordStrengthColor(passwordStrength)}>{passwordStrength}</span>
              </p>
            </div>
          )}
          {/* Integrate SubmitButton component with props */}
          <SubmitButton
            isLoading={false}
            onClick={handleSubmit} // Assuming handleSubmit is your submit function
            backgroundColor="#2196f3"
            rippleColor="#1976d2"
            textColor="white"
          >
            Submit
          </SubmitButton>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
