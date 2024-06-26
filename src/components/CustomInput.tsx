import React, { useState } from 'react';

type InputProps = {
  options: {
    type: 'text' | 'number' | 'tel' | 'url' | 'email' | 'password'; 
    includeAll?: string[];
    includeOneOf?: string[];
    exclude?: string[]; 
    placeholder: string;
    required: boolean;
    minLength?: number;
    maxLength?: number;
    value: string;
    setValue: (value: string) => void;
    pattern: string;
    name: string;
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
    options.setValue(value);
    validateInput(value);
  };

  const validateInput = (value: string) => {
    let errorMessage = '';

    if (options.pattern && !new RegExp(options.pattern).test(value)) {
      errorMessage = `Invalid input format`;
    } else if (
      options.includeAll && options.includeAll.length > 0 &&
      !options.includeAll.every(item => value.includes(item))
    ) {
      errorMessage = `Must include all of: ${options.includeAll.join(', ')}`;
    } else if (
      options.includeOneOf && options.includeOneOf.length > 0 &&
      !options.includeOneOf.some(item => value.includes(item))
    ) {
      errorMessage = `Must include one of: ${options.includeOneOf.join(', ')}`;
    } else if (
      options.exclude && options.exclude.length > 0 &&
      options.exclude.some(item => value.includes(item))
    ) {
      errorMessage = `Cannot include: ${options.exclude.join(', ')}`;
    } else {
      errorMessage = '';
    }

    setError(errorMessage);

    if (options.name) {
      const inputElement = document.getElementById(
        `${options.name.replace(/\s+/g, '-').toLowerCase()}-input`
      ) as HTMLInputElement | null;
      if (inputElement) {
        inputElement.setCustomValidity(errorMessage);
      }
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={options.name ? `${options.name.replace(/\s+/g, '-').toLowerCase()}-input` : ''}
        type={options.type}
        className={`mt-1 block w-full px-3 py-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black`}
        placeholder={options.placeholder}
        value={options.value}
        onChange={handleChange}
        required={options.required}
        onInvalid={(e) => {
          e.preventDefault();
          setError(e.currentTarget.validationMessage);
        }}
        minLength={options.minLength}
        maxLength={options.maxLength}
        pattern={options.pattern}
        name={options.name}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default CustomInput;
