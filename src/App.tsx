import Routes from './Routes';
import { CartProvider } from './context/CartContext';
import { FavoriteProvider } from './context/FavoriteContext';

function App() {
  return (
    <CartProvider>
      <FavoriteProvider>
        <Routes />
      </FavoriteProvider>
    </CartProvider>
  );
}

export default App;