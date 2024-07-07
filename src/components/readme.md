# CustomInput Component

The CustomInput component is a reusable React component that provides a customizable input field with various validation options. It can be used for different input types, including text, password, and more.

#### Props required

- `options` with the following properties
-- `type`: The type of the input field (e.g., "text", "password").
-- `value`: The current value of the input field.
-- `placeholder`: The placeholder text for the input field.
-- `pattern`: A regular expression pattern that the input value must match.
-- `includeAll?`: An array of strings that the input value must include.
-- `includeOneOf?`: An array of strings, of which the input value must include at least one.
-- `exclude?`: An array of strings that the input value must not include.
-- `passwordRequirements?`: An object that specifies the password requirements, including `requireCapitalLetter`, `requireSymbol`, and `requireNumber`.
-- `name`: The name of the input field.
-- `required`: A boolean indicating whether the input field is required.
-- `minLength?`: The minimum length of the input value.
-- `maxLength?`: The maximum length of the input value.
- `label`: Label of the input field to distinguish
- `isVisible?`: A boolean that determines whether the input field should be visible. True by default. Password is exceptional in this case, as it is the only input that can toggle isVisible via a button

### Dependencies

The CustomInput component uses the following dependencies:
- `react-icons/fa`: A library that provides the FaRegEye and FaRegEyeSlash icons.
To install react-icons:
```
npm i react react-icons
```

## Example Usage
Use options object in the `<CustomInput/>` component

```
import React, { useState } from 'react';
import CustomInput from './CustomInput';

const MyForm = () => {
  const [password, setPassword] = useState('');

  return (
    <form>
      <CustomInput
        options={{
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
        }}
        label="Password"
      />
      {/* Add more input fields as needed */}
    </form>
  );
};

export default MyForm;
```