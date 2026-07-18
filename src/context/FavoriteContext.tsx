import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Product } from "../types/product";

interface FavoriteProviderProps {
  children: ReactNode;
}

interface FavoriteContextType {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: number) => boolean;
}

const FavoriteContext =
  createContext<FavoriteContextType | null>(null);

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const toggleFavorite = (product: Product) => {
    setFavorites(prev => {
      const exists = prev.find(item => item.id === product.id);

      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }

      return [...prev, product];
    });
  };

  const isFavorite = (productId: number) => {
    return favorites.some(item => item.id === productId);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) throw new Error('useFavorites must be used within FavoriteProvider');
  return context;
};