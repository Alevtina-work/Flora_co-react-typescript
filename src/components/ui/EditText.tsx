import { useState } from 'react';
import type {
  FocusEvent,
  InputHTMLAttributes,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface EditTextProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const EditText = ({
  type = 'text',
  placeholder = 'Мария',
  value,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  required = false,
  className,
  error,
  label,
  ...props
}: EditTextProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-2 text-base font-medium text-text-secondary">
          {label}
          {required && (
            <span className="ml-1 text-text-red">*</span>
          )}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={twMerge(
          'rounded-sm border border-input-border bg-input-background px-4 py-3 text-left text-lg font-normal leading-lg text-input-text transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-green disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-text-red focus:ring-text-red',
          isFocused && 'ring-2 ring-primary-green',
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? 'error-message' : undefined}
        {...props}
      />

      {error && (
        <span
          id="error-message"
          className="mt-1 text-xs text-text-red"
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default EditText;