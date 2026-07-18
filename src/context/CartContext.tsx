import { createContext, useContext, useState, type ReactNode } from 'react';
import type { CartItem } from "../types/cart";
import type { Product } from "../types/product";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  removeFromCart: (productId: number) => void;
  totalCount: number;
}

const CartContext = createContext<CartContextType | null>(null);


export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    setCartItems(prev => {
      const existing = prev?.find(item => item?.id === product?.id);
      if (existing) {
        return prev?.map(item =>
          item?.id === product?.id
            ? { ...item, quantity: item?.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    setCartItems(prev =>
      prev?.map(item =>
        item?.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev?.filter(item => item?.id !== productId));
  };

  const totalCount = cartItems?.reduce((sum, item) => sum + item?.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, totalCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
