import React from 'react';
import SearchView from '../ui/SearchView';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoriteContext';
import { NavLink, useLocation } from 'react-router-dom';
import { products } from "../../data/catalog";

interface HeaderProps {
  searchQuery?: string;

  setSearchQuery?: (query: string) => void;

  setSearchedProductId?: (
    productId: number
  ) => void;
}

const Header = ({
  searchQuery = '',
  setSearchQuery = () => {},
  setSearchedProductId = () => {},
}: HeaderProps) => {
  const { totalCount } = useCart();
  const { favorites } = useFavorites();

  const location = useLocation();
  const isCartActive = location.pathname === '/checkout';
  const isFavoritesActive = location.pathname === '/favorites';
  const favoritesCount = favorites?.length || 0;

  const handleSearch = (query: string) => {

  const foundProduct = products.find((product) =>
    product.name
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  if (!foundProduct) return;

  setSearchedProductId(foundProduct.id);

  setTimeout(() => {

    const element = document.getElementById(
      `product-${foundProduct.id}`
    );

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }

  }, 100);
};

  const navClass = ({
  isActive,
}: {
  isActive: boolean;
}) =>
    `
      relative
      px-4 sm:px-6 py-2 sm:py-3
      text-sm sm:text-md
      whitespace-nowrap
      rounded-md
      font-medium
      flex items-center gap-2
      transition-all

      ${
        isActive
          ? 'bg-button-primary-bg text-button-primary-text'
          : 'bg-button-secondary-bg text-button-secondary-text hover:bg-background-tertiary'
      }
    `;

  return (
    <header className="w-full bg-header-background py-2 sticky top-0 z-50 border-b border-border-secondary">

      <div className="w-full max-w-[1134px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* MAIN ROW */}
        <div className="flex items-center justify-between gap-6">

          {/* LEFT: LOGO + SEARCH */}
          <div className="flex items-center gap-6 flex-1">

            {/* LOGO */}
<NavLink
  to="/"
  className="flex items-center hover:opacity-80 transition-opacity duration-200"
>
  <img
    src="/images/img_logo.png"
    alt="Flora&Co"
    className="h-7 sm:h-8 w-auto object-contain"
  />
</NavLink>

            {/* SEARCH */}
            <div className="hidden md:block w-full max-w-[400px]">
              <SearchView
  placeholder="Поиск растений"
  value={searchQuery || ''}
  onChange={setSearchQuery}
  onSearch={handleSearch}
  className="w-full"
/>
            </div>

          </div>

          {/* RIGHT: NAV */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* КАТАЛОГ */}
            <NavLink to="/" className={navClass}>
              <span>Каталог</span>
            </NavLink>

            {/* ИЗБРАННОЕ */}
<NavLink to="/favorites" className={navClass}>

  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.8 4.6c-1.5-1.5-4-1.5-5.5 0L12 7.9l-3.3-3.3c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5L12 21l8.8-10.9c1.5-1.5 1.5-4 0-5.5z" />
  </svg>

  <span>Избранное</span>

  {/* BADGE */}
  {favoritesCount > 0 && (
    <span
      className={`
        absolute -top-2 -right-2
        min-w-[18px] h-[18px]
        px-1 flex items-center justify-center
        text-[10px] font-bold
        rounded-full
        pointer-events-none

        ${
          isFavoritesActive
            ? 'bg-white text-green-600'
            : 'bg-green-600 text-white'
        }
      `}
    >
      {favoritesCount}
    </span>
  )}

</NavLink>

            {/* КОРЗИНА */}
            <NavLink to="/checkout" className={navClass}>
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 6h15l-1.5 9h-12z" />
    <path d="M6 6L5 3H2" />
    <circle cx="9" cy="20" r="1" />
    <circle cx="18" cy="20" r="1" />
  </svg>

  <span>Корзина</span>

  {/* BADGE */}
  {totalCount > 0 && (
    <span
      className={`
        absolute -top-2 -right-2
        min-w-[18px] h-[18px]
        px-1 flex items-center justify-center
        text-[10px] font-bold
        rounded-full
        pointer-events-none

        ${
          isCartActive
            ? 'bg-white text-green-600'
            : 'bg-green-600 text-white'
        }
      `}
    >
      {totalCount}
    </span>
  )}
</NavLink>

          </div>

        </div>

        {/* MOBILE SEARCH */}
        <div className="mt-3 md:hidden">
          <SearchView
  placeholder="Поиск растений"
  value={searchQuery || ''}
  onChange={setSearchQuery}
  onSearch={handleSearch}
  className="w-full"
/>
        </div>

      </div>
    </header>
  );
};

export default Header;