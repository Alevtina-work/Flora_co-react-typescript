import React, { useState } from "react";
import type {
  ChangeEvent,
  FocusEvent,
  InputHTMLAttributes,
} from "react";
import { twMerge } from 'tailwind-merge';

interface EditTextProps
  extends InputHTMLAttributes<HTMLInputElement> {

  placeholder?: string;

  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  fill_background_color?: string;
  border_border?: string;
  border_border_radius?: string;

  layout_width?: string;
  padding?: string;
  margin?: string;
  position?: string;

  error?: string;
  label?: string;
}

const EditText = ({
  // Required parameters with defaults
  placeholder = "Мария",
  text_font_size = "text-md",
  text_font_family = "Outfit",
  text_font_weight = "font-normal",
  text_line_height = "leading-lg",
  text_text_align = "left",
  text_color = "text-input-text",
  fill_background_color = "bg-input-background",
  border_border = "1px solid border-input-border",
  border_border_radius = "rounded-sm",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  type = "text",
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

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Parse border string
  const borderClass = border_border ? `border-[${border_border?.split(' ')?.[0]}] border-${border_border?.split(' ')?.[1]} border-input-border` : '';

  const handleFocus = (
  e: FocusEvent<HTMLInputElement>
) => {
    setIsFocused(true);
    if (typeof onFocus === 'function') {
      onFocus(e);
    }
  };

  const handleBlur = (
  e: FocusEvent<HTMLInputElement>
) => {
    setIsFocused(false);
    if (typeof onBlur === 'function') {
      onBlur(e);
    }
  };

  return (
    <div className={twMerge('flex flex-col', optionalClasses)}>
      {label && (
        <label className="mb-2 text-sm font-medium text-text-secondary">
          {label}
          {required && <span className="text-text-red ml-1">*</span>}
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
          'px-4 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed',
          text_font_size,
          text_font_weight,
          text_line_height,
          `text-${text_text_align}`,
          text_color,
          fill_background_color,
          borderClass,
          border_border_radius,
          error ? 'border-text-red focus:ring-text-red' : '',
          isFocused ? 'ring-2 ring-primary-green' : '',
          className
        )}
        style={{
          fontFamily: text_font_family || 'Outfit',
        }}
        aria-invalid={error ? 'true' : 'false'}
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