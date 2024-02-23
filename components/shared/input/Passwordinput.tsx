// PasswordInput.js
import { cva, VariantProps } from 'class-variance-authority';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const passwordInputStyles = cva(
  'rounded-md font-medium h-full w-full border border-gray-500 focus:outline-teal-200 hover:border-teal-200 disabled:bg-gray-100 ',
  {
    variants: {
      size: {
        small: 'py-1 px-6 text-sm',
        large: 'py-2 px-6 text-base',
      },
      defaultVariants: {
        size: 'base',
      },
    },
  }
);

interface PasswordInputProps extends VariantProps<typeof passwordInputStyles> {
  text: string;
  name: string;
  disabled: boolean;
  error: boolean | null;
  success: boolean | null;
  change: React.ChangeEventHandler<HTMLInputElement> | undefined | null;
  value: any;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
    size,
    text,
    name,
    disabled,
    error,
    success,
    change,
    ...props
  }: PasswordInputProps) => {
    const [showPassword, setShowPassword] = useState(false);
  
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          className={`${
            passwordInputStyles({ size })} ${error ? 'border-red-500' : ''} ${
            success ? 'border-green-500' : ''
          }`}
          {...props}
          disabled={disabled}
          placeholder={text}
          onChange={change}
          name={name}
        />
      </div>
    );
  };
  
  export default PasswordInput;
  
