import ProductCard from "./ProductCard";
import { products } from "../../data/catalog";
import type { SelectedCategory } from "../../types/product";

interface ProductGridProps {
  selectedCategory: SelectedCategory;
  searchQuery: string;
}

const ProductGrid = ({
  selectedCategory,
  searchQuery
}: ProductGridProps) => {

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full" aria-label="Сетка товаров">
      <div
        className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-4 sm:gap-6 md:gap-8
    items-stretch
  "
      >

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <div className="col-span-full flex justify-center py-20">
            <p className="font-['Outfit'] text-lg text-text-muted">
              Ничего не найдено
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductGrid;