import type { SelectedCategory } from "../../types/product";

interface CategoryFiltersProps {
  selectedCategory: SelectedCategory;
  setSelectedCategory: (
    category: SelectedCategory
  ) => void;
}

const categories = [
  { id: 'all', label: 'Все товары' },
  { id: 'category1', label: 'Лилии' },
  { id: 'category2', label: 'Пионы' },
  { id: 'category3', label: 'Клематисы' },
] satisfies {
  id: SelectedCategory;
  label: string;
}[];

const CategoryFilters = ({
  selectedCategory,
  setSelectedCategory
}: CategoryFiltersProps) => {

  return (
    <section className="w-full" aria-label="Фильтры категорий">
      <div className="flex flex-wrap items-center gap-4 sm:gap-5">

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`
              px-7 py-3
              text-base sm:text-lg
              font-semibold
              uppercase
              rounded-lg
              transition-all duration-200

              ${selectedCategory === category.id
                ? 'bg-white/90 text-text-green-accent shadow'
                : 'bg-white/40 text-text-green-accent/70 hover:bg-white/70'
              }
            `}
          >
            {category.label}
          </button>
        ))}

      </div>
    </section>
  );
};

export default CategoryFilters;