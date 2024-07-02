import React, { useState } from 'react';

type InputType = 'text' | 'number' | 'tel' | 'url' | 'email' | 'password';

interface PasswordRequirements {
  requireCapitalLetter: boolean;
  requireSymbol: boolean;
  requireNumber: boolean;
}

type InputProps = {
  options: {
    type: InputType;
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
    passwordRequirements?: PasswordRequirements;
  };
  label: string;
  isVisible?: boolean;
};

const CustomInput: React.FC<InputProps> = ({ options, label, isVisible = true }) => {
  const [error, setError] = useState<string>('');
  const [passwordStrength, setPasswordStrength] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    options.setValue(value);
    validateInput(value);
  };

  const validateInput = (value: string) => {
    let errorMessage = '';

    if (options.pattern && !new RegExp(options.pattern).test(value)) {
      errorMessage = `Invalid input format`;
    } else if (options.includeAll && options.includeAll.length > 0 &&
      !options.includeAll.every(item => value.includes(item))) {
      errorMessage = `Must include all of: ${options.includeAll.join(', ')}`;
    } else if (options.includeOneOf && options.includeOneOf.length > 0 &&
      !options.includeOneOf.some(item => value.includes(item))) {
      errorMessage = `Must include one of: ${options.includeOneOf.join(', ')}`;
    } else if (options.exclude && options.exclude.length > 0 &&
      options.exclude.some(item => value.includes(item))) {
      errorMessage = `Cannot include: ${options.exclude.join(', ')}`;
    }

    if (options.type === 'password' && options.passwordRequirements) {
      const { requireCapitalLetter, requireSymbol, requireNumber } = options.passwordRequirements;

      if (requireCapitalLetter && !/[A-Z]/.test(value)) {
        errorMessage = 'Must include at least one capital letter';
      } else if (requireSymbol && !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        errorMessage = 'Must include at least one symbol';
      } else if (requireNumber && !/\d/.test(value)) {
        errorMessage = 'Must include at least one number';
      }
    }

    if (options.type === 'password') {
      setPasswordStrength(checkPasswordStrength(value));
    }

    setError(errorMessage);

    if (options.name) {
      const inputElement = document.getElementById(`${options.name.replace(/\s+/g, '-').toLowerCase()}-input`) as HTMLInputElement | null;
      if (inputElement) {
        inputElement.setCustomValidity(errorMessage);
      }
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

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-400">
        {label}
      </label>
      <input
        id={options.name ? `${options.name.replace(/\s+/g, '-').toLowerCase()}-input` : ''}
        type={options.type}
        className={`mt-1 block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'
          } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white`}
        placeholder={options.placeholder}
        value={options.value}
        onChange={handleChange}
        onBlur={() => validateInput(options.value)}
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
      {options.type === 'password' && (
        <div className="flex flex-col items-start mt-4">
          <div className={`w-full h-2 bg-gray-200 rounded-md overflow-hidden`}>
            <div
              style={{ width: `${Number(getPasswordStrengthSegment())}%` }}
              className={`h-full ${getPasswordBG(passwordStrength)}`}
            />
          </div>
          <p className="mt-2 text-sm">
            Password Strength: <span className={getPasswordStrengthColor(passwordStrength)}>{passwordStrength}</span>
          </p>
        </div>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default CustomInput;
