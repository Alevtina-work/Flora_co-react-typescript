import Routes from './Routes';
import { CartProvider } from './context/CartContext';
import { FavoriteProvider } from './context/FavoriteContext';
import { SearchProvider } from './context/SearchContext';

function App() {
  return (
    <CartProvider>
      <FavoriteProvider>
        <SearchProvider>
          <Routes />
        </SearchProvider>
      </FavoriteProvider>
    </CartProvider>
  );
}

export default App;