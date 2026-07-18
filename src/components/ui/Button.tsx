import React, { type ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline";

type ButtonSize =
  | "small"
  | "medium"
  | "large";

type ButtonType =
  | "button"
  | "submit"
  | "reset";

interface ButtonProps {
  text?: string;

  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  fill_background_color?: string;
  border_border_radius?: string;

  text_text_transform?: string;
  effect_box_shadow?: string;
  layout_width?: string;
  padding?: string;
  position?: string;
  margin?: string;
  layout_gap?: string;

  variant?: ButtonVariant;
  size?: ButtonSize;

  disabled?: boolean;

  className?: string;

  children?: ReactNode;

  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  type?: ButtonType;
}

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'hover:opacity-90 focus:ring-primary-green',
        secondary: 'hover:bg-gray-100 focus:ring-primary-green',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-primary-green',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const Button = ({
  // Required parameters with defaults
  text = "Добавить в корзину",
  text_font_size = "text-md",
  text_font_family = "Outfit",
  text_font_weight = "font-medium",
  text_line_height = "leading-lg",
  text_text_align = "center",
  text_color = "text-text-white",
  fill_background_color = "bg-button-disabled-bg",
  border_border_radius = "rounded-md",
  
  // Optional parameters (no defaults)
  text_text_transform,
  effect_box_shadow,
  layout_width,
  padding,
  position,
  margin,
  layout_gap,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}: ButtonProps) => {

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidTextTransform = text_text_transform && typeof text_text_transform === 'string' && text_text_transform?.trim() !== '';
  const hasValidBoxShadow = effect_box_shadow && typeof effect_box_shadow === 'string' && effect_box_shadow?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidTextTransform ? text_text_transform : '',
    hasValidBoxShadow ? `shadow-[${effect_box_shadow}]` : '',
  ]?.filter(Boolean)?.join(' ');

  // Safe click handler
  const handleClick = (
  event: React.MouseEvent<HTMLButtonElement>
) => {
  if (disabled) return;

  if (typeof onClick === "function") {
    onClick(event);
  }
};

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={twMerge(
        buttonClasses({ variant, size }),
        text_font_size,
        text_font_weight,
        text_line_height,
        `text-${text_text_align}`,
        text_color,
        fill_background_color,
        border_border_radius,
        optionalClasses,
        className
      )}
      style={{
        fontFamily: text_font_family || 'Outfit',
      }}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;