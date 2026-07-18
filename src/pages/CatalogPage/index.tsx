import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import CategoryFilters from './CategoryFilters';
import ProductGrid from './ProductGrid';
import type { SelectedCategory } from "../../types/product";

const CatalogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>("all");

  const [searchQuery, setSearchQuery] = useState<string>("");

  const [searchedProductId, setSearchedProductId] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Каталог растений | Flora&Co - Лучшие садовые растения для вашего участка</title>
        <meta 
          name="description" 
          content="Каталог садовых растений Flora&Co. Широкий выбор растений мечты от 800 руб с доставкой." 
        />
        <meta property="og:title" content="Каталог растений | Flora&Co - Лучшие садовые растения для вашего участка" />
        <meta property="og:description" content="Каталог садовых растений Flora&Co. Широкий выбор растений мечты от 800 руб с доставкой." />
      </Helmet>

      <div className="min-h-screen bg-background-gray">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setSearchedProductId={setSearchedProductId}
        />
        
        <main className="w-full">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-[42px] md:gap-[42px] py-8 sm:py-10 md:py-[42px]">
              <CategoryFilters
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
              <ProductGrid
                selectedCategory={selectedCategory}
                searchQuery={searchQuery}
                searchedProductId={searchedProductId}
              />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CatalogPage;