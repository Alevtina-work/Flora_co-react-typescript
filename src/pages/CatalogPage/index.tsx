import { useState } from 'react';
import { Helmet } from 'react-helmet';
import CategoryFilters from './CategoryFilters';
import ProductGrid from './ProductGrid';
import type { SelectedCategory } from "../../types/product";
import { useSearch } from '../../context/SearchContext';

const pageTitle =
  'Каталог растений | Flora&Co - Лучшие садовые растения для вашего участка';

const pageDescription =
  'Каталог садовых растений Flora&Co. Широкий выбор растений мечты от 800 руб с доставкой.';

const CatalogPage = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<SelectedCategory>('all');
  const { searchQuery } = useSearch();

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>

        <meta
          name="description"
          content={pageDescription}
        />

        <meta
          property="og:title"
          content={pageTitle}
        />

        <meta
          property="og:description"
          content={pageDescription}
        />
      </Helmet>

      <div className="min-h-screen bg-background-gray">

        <main>
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-[42px] py-8 sm:py-10 md:py-[42px]">
              <CategoryFilters
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
              <ProductGrid
                selectedCategory={selectedCategory}
                searchQuery={searchQuery}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CatalogPage;