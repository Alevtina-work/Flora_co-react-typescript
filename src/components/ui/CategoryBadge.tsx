interface CategoryBadgeProps {
    category: 'category1' | 'category2' | 'category3';
}

const categoryLabels = {
    category1: 'Лилии',
    category2: 'Пионы',
    category3: 'Клематисы',
};

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
    return (
        <button
            className="pointer-events-auto px-3 py-1 bg-white/90 text-text-green-accent text-xs font-medium uppercase rounded-md shadow"
            aria-label={`Категория: ${categoryLabels[category]}`}
        >
            {categoryLabels[category]}
        </button>
    );
};

export default CategoryBadge;