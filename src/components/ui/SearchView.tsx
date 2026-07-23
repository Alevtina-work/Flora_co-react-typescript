import React, { useEffect, useState } from 'react';
import type {
  InputHTMLAttributes,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface SearchViewProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value?: string;
  placeholder?: string;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
}

const SearchView = ({
  placeholder = 'Поиск растений',
  value = '',
  onChange,
  autoFocus = false,
  className,
  ...props
}: SearchViewProps) => {
  const [searchValue, setSearchValue] = useState(value);

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setSearchValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div
      className={twMerge(
        'relative flex items-center',
        className
      )}
    >
      <input
        autoFocus={autoFocus}
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full rounded-3xl border border-search-border bg-search-background px-4 py-2 pr-12 text-md font-normal leading-md text-search-text transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-green"
        {...props}
      />

      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <img
          src="/images/img_search.svg"
          alt=""
          aria-hidden="true"
          className="w-4 h-4"
        />
      </div>
    </div>
  );
};

export default SearchView;