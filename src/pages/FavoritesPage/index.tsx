import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useFavorites } from '../../context/FavoriteContext';
import ProductCard from '../CatalogPage/ProductCard';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <>
      <Helmet>
        <title>Избранное | Flora&Co</title>
      </Helmet>

      <div className="min-h-screen bg-background-gray flex flex-col">
        <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {favorites.length === 0 ? (
            <div className="text-center text-gray-500">
              <h2 className="text-xl font-semibold mb-2">Избранное пусто</h2>
              <p>Добавьте товары из каталога ❤️</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {favorites.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

        </main>
      </div>
    </>
  );
};

export default FavoritesPage;