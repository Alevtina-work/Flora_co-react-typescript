import React, { useState, useEffect } from "react";
import type { InputHTMLAttributes, ChangeEvent, KeyboardEvent } from "react";
import { twMerge } from 'tailwind-merge';

interface SearchViewProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value"
  > {

  value?: string;
  
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

  layout_gap?: string;
  layout_width?: string;
  padding?: string;
  position?: string;

  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
}

const SearchView = ({
  placeholder = "Поиск растений",
  text_font_size = "text-md",
  text_font_family = "Inter",
  text_font_weight = "font-normal",
  text_line_height = "leading-md",
  text_text_align = "left",
  text_color = "text-search-text",
  fill_background_color = "bg-search-background",
  border_border = "1px solid border-search-border",
  border_border_radius = "rounded-3xl",

  layout_gap,
  layout_width,
  padding,
  position,

  value = '',
  onChange,
  onSearch,
  className,
  ...props
}: SearchViewProps) => {

  const [searchValue, setSearchValue] = useState(value);

  useEffect(() => {
    setSearchValue(value || '');
  }, [value]);

  const hasValidGap =
    layout_gap &&
    typeof layout_gap === 'string' &&
    layout_gap.trim() !== '';

  const hasValidWidth =
    layout_width &&
    typeof layout_width === 'string' &&
    layout_width.trim() !== '';

  const hasValidPadding =
    padding &&
    typeof padding === 'string' &&
    padding.trim() !== '';

  const hasValidPosition =
    position &&
    typeof position === 'string' &&
    position.trim() !== '';

  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]
    .filter(Boolean)
    .join(' ');

  const borderClass = border_border
    ? `border border-search-border`
    : '';

  const handleChange = (
  e: ChangeEvent<HTMLInputElement>
) => {
    const newValue = e.target.value;

    setSearchValue(newValue);

    if (typeof onChange === 'function') {
      onChange(newValue);
    }
  };

  const handleKeyDown = (
  e: KeyboardEvent<HTMLInputElement>
) => {
    if (e.key === 'Enter' && typeof onSearch === 'function') {
      onSearch(searchValue);
    }
  };

  const handleSearchClick = () => {
    if (typeof onSearch === 'function') {
      onSearch(searchValue);
    }
  };

  return (
    <div
      className={twMerge(
        'relative flex items-center',
        optionalClasses,
        className
      )}
    >
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={twMerge(
          'w-full pr-12 pl-4 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent',
          text_font_size,
          text_font_weight,
          text_line_height,
          `text-${text_text_align}`,
          text_color,
          fill_background_color,
          borderClass,
          border_border_radius
        )}
        style={{
          fontFamily: text_font_family || 'Inter',
        }}
        {...props}
      />

      <button
        type="button"
        onClick={handleSearchClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-search-text hover:text-text-primary transition-colors duration-200 focus:outline-none"
      >
        <img
          src="/images/img_search.svg"
          alt="Search"
          className="w-4 h-4"
        />
      </button>
    </div>
  );
};

export default SearchView;