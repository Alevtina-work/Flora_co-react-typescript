import { NavLink, useLocation } from 'react-router-dom';

import SearchView from '../ui/SearchView';
import Badge from '../common/Badge';

import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoriteContext';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const navBaseClass = `
  relative
  px-4 sm:px-6 py-2 sm:py-3
  text-sm sm:text-md
  whitespace-nowrap
  rounded-md
  font-medium
  flex items-center gap-2
  transition-all
`;

const Header = ({
  searchQuery,
  setSearchQuery,
}: HeaderProps) => {
  const { totalCount } = useCart();
  const { favorites } = useFavorites();

  const pathname = useLocation().pathname;

  const isCartActive = pathname === '/checkout';
  const isFavoritesActive = pathname === '/favorites';

  const favoritesCount = favorites.length;

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `${navBaseClass}
    ${isActive
      ? 'bg-button-primary-bg text-button-primary-text'
      : 'bg-button-secondary-bg text-button-secondary-text hover:bg-background-tertiary'
    }`;

  const searchField = (
    <SearchView
      placeholder="Поиск растений"
      value={searchQuery}
      onChange={setSearchQuery}
      className="w-full"
    />
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-secondary bg-header-background py-2">
      <div className="mx-auto w-full max-w-[1134px] px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between gap-6">

          <div className="flex flex-1 items-center gap-6">

            <NavLink
              to="/"
              className="flex items-center transition-opacity duration-200 hover:opacity-80"
            >
              <img
                src="/images/img_logo.png"
                alt="Flora&Co"
                className="h-7 w-auto object-contain sm:h-8"
              />
            </NavLink>

            <div className="hidden w-full max-w-[400px] md:block">
              {searchField}
            </div>

          </div>

          <div className="flex items-center gap-3 sm:gap-4">

            <NavLink to="/" className={navClass}>
              <span>Каталог</span>
            </NavLink>

            <NavLink to="/favorites" className={navClass}>
              <svg
                className="h-4 w-4"
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

              {favoritesCount > 0 && (
                <Badge
                  count={favoritesCount}
                  active={isFavoritesActive}
                />
              )}
            </NavLink>

            <NavLink to="/checkout" className={navClass}>
              <svg
                className="h-4 w-4"
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

              {totalCount > 0 && (
                <Badge
                  count={totalCount}
                  active={isCartActive}
                />
              )}
            </NavLink>

          </div>

        </div>

        <div className="mt-3 md:hidden">
          {searchField}
        </div>

      </div>
    </header>
  );
};

export default Header;