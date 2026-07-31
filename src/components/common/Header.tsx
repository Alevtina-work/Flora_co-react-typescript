import {
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import SearchView from "../ui/SearchView";
import Badge from "../common/Badge";

import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoriteContext";
import { useSearch } from "../../context/SearchContext";

const navBaseClass = `
  relative
  flex
  items-center
  justify-center
  gap-2

  px-4
  sm:px-5

  py-2.5

  text-base
  sm:text-lg

  font-semibold
  whitespace-nowrap

  rounded-lg

  transition-all
`;

const Header = () => {
  const { totalCount } = useCart();
  const { favorites } = useFavorites();

  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const {
    searchQuery,
    setSearchQuery,
  } = useSearch();

  const shouldFocusSearch = pathname !== "/";

  const isCartActive = pathname === "/checkout";
  const isFavoritesActive = pathname === "/favorites";

  const favoritesCount = favorites.length;

  const navClass = ({
    isActive,
  }: {
    isActive: boolean;
  }) =>
    `${navBaseClass}
    ${isActive
      ? "bg-button-primary-bg text-button-primary-text"
      : "bg-button-secondary-bg text-button-secondary-text hover:bg-background-tertiary"
    }`;

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    if (pathname !== "/") {
      navigate(`/?${params.toString()}`);
      return;
    }

    navigate(`/?${params.toString()}`, {
      replace: true,
    });
  };

  const searchField = (
    <SearchView
      placeholder="Поиск растений"
      autoFocus={shouldFocusSearch}
      value={searchQuery}
      onChange={handleSearchChange}
      className="w-full"
    />
  );

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-border-secondary
        bg-header-background
        py-3
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          sm:px-6
          lg:px-8
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
            gap-4
            sm:gap-6
          "
        >
          <NavLink
            to="/"
            className="
              flex
              shrink-0
              items-center
              transition-opacity
              duration-200
              hover:opacity-80
            "
          >
            <img
              src="/images/img_logo.png"
              alt="Flora&Co"
              className="
                h-6
                w-auto
                object-contain
                sm:h-8
                lg:h-9
              "
            />
          </NavLink>

          <div
            className="
              hidden
              min-w-0
              flex-1
              max-w-[560px]
              lg:flex
            "
          >
            {searchField}
          </div>

          <nav
            className="
              ml-auto
              flex
              shrink-0
              items-center
              gap-2
              sm:gap-3
            "
            aria-label="Основная навигация"
          >

            <NavLink
              to="/"
              className={navClass}
            >
              <span>Каталог</span>
            </NavLink>

            <NavLink
              to="/favorites"
              className={navClass}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.8 4.6c-1.5-1.5-4-1.5-5.5 0L12 7.9l-3.3-3.3c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5L12 21l8.8-10.9c1.5-1.5 1.5-4 0-5.5z" />
              </svg>

              <span className="hidden sm:inline">
                Избранное
              </span>

              {favoritesCount > 0 && (
                <Badge
                  count={favoritesCount}
                  active={isFavoritesActive}
                />
              )}
            </NavLink>

            <NavLink
              to="/checkout"
              className={navClass}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 6h15l-1.5 9h-12z" />
                <path d="M6 6L5 3H2" />

                <circle
                  cx="9"
                  cy="20"
                  r="1"
                />

                <circle
                  cx="18"
                  cy="20"
                  r="1"
                />
              </svg>

              <span className="hidden sm:inline">
                Корзина
              </span>

              {totalCount > 0 && (
                <Badge
                  count={totalCount}
                  active={isCartActive}
                />
              )}
            </NavLink>
          </nav>
        </div>

        <div
          className="
            mt-4
            lg:hidden
          "
        >
          {searchField}
        </div>
      </div>
    </header>
  );
};

export default Header;