import ProductCard from "./ProductCard";
import { products } from "../../data/catalog";
import type { SelectedCategory } from "../../types/product";

interface ProductGridProps {
  selectedCategory: SelectedCategory;
  searchQuery: string;
  searchedProductId?: number | null;
}

const ProductGrid = ({
  selectedCategory,
  searchQuery,
  searchedProductId,
}: ProductGridProps) => {

  const filteredProducts = products.filter((product) => {

  const matchesCategory =
    selectedCategory === 'all' ||
    product.category === selectedCategory;

  const matchesSearch =
    product.name
      .toLowerCase()
      .includes((searchQuery || '').toLowerCase());

  return matchesCategory && matchesSearch;
});

  console.log('filteredProducts:', filteredProducts);
  
  return (
    <section className="w-full" aria-label="Сетка товаров">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">

    {filteredProducts.length === 0 && (
      <div className="col-span-full flex justify-center py-20">
        <p className="text-lg text-text-muted font-['Outfit']">
          Ничего не найдено
        </p>
      </div>
    )}

    {filteredProducts.map((product) => (
      <ProductCard
  key={product.id}
  product={product}
  isHighlighted={searchedProductId === product.id}
/>
    ))}

  </div>
</section>
  );
};

export default ProductGrid;