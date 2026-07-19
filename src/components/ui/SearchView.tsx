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

  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
}

const SearchView = ({
  placeholder = 'Поиск растений',
  value = '',
  onChange,
  onSearch,
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

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(searchValue);
    }
  };

  const handleSearchClick = () => {
    onSearch?.(searchValue);
  };

  return (
    <div
      className={twMerge(
        'relative flex items-center',
        className
      )}
    >
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full rounded-3xl border border-search-border bg-search-background px-4 py-2 pr-12 text-md font-normal leading-md text-search-text transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-green"
        {...props}
      />

      <button
        type="button"
        onClick={handleSearchClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-search-text transition-colors duration-200 hover:text-text-primary focus:outline-none"
      >
        <img
          src="/images/img_search.svg"
          alt="Search"
          className="h-4 w-4"
        />
      </button>
    </div>
  );
};

export default SearchView;