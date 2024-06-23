import React, { useState } from 'react';

type InputProps = {
  options: {
    type: 'text' | 'number' | 'tel' | 'url' | 'email'; 
    include: string[];
    exclude: string[];
    placeholder: string;
    required: boolean;
    minLength?: number;
    maxLength?: number;
    value: string;
    setValue: (value: string) => void;
    pattern: string;
  };
  label: string;
  isVisible?: boolean;
};

const CustomInput: React.FC<InputProps> = ({
  options,
  label,
  isVisible = true
}) => {
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (options.required && value.length === 0) {
      setError('This field is required');
    } else if (
      options.minLength &&
      value.length < options.minLength
    ) {
      setError(`Must be at least ${options.minLength} characters`);
    } else if (
      options.maxLength &&
      value.length > options.maxLength
    ) {
      setError(`Must be at most ${options.maxLength} characters`);
    } else if (
      options.type === 'email' &&
      !isValidEmail(value, options.exclude)
    ) {
      setError('Invalid email format');
    } else {
      setError('');
    }

    options.setValue(value);
  };

  const isValidEmail = (email: string, exclude: string[]): boolean => {
    if (!email.includes('@') || !email.includes('.')) {
      return false;
    }

    for (const domain of exclude) {
      if (email.includes(domain)) {
        return false;
      }
    }

    return true;
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={options.type}
        className={`mt-1 block w-full px-3 py-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black`}
        placeholder={options.placeholder}
        value={options.value}
        onChange={handleChange}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default CustomInput;
