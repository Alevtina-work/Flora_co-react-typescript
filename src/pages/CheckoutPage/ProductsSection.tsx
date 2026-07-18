import type { CartItem } from '../../types/cart';

interface ProductsSectionProps {
  products: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveProduct: (productId: number) => void;
}

const ProductsSection = ({ products, onUpdateQuantity, onRemoveProduct }: ProductsSectionProps) => {
  return (
    <div className="w-full bg-card-background border border-card-border rounded-lg overflow-auto p-4 sm:p-5 md:p-6">
      {/* Section Header */}
      <div className="flex justify-start items-center w-full mb-4 md:mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-text-secondary font-['Outfit'] leading-4xl">
          Товары
        </h2>
      </div>
      {/* Products List */}
      <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 w-full">
        {products?.map((product) => (
          <div
            key={product.id}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center w-full"
          >
            {/* Product Image */}
            <div className="w-20 sm:w-24 h-20 sm:h-24 border border-border-secondary rounded-lg flex-shrink-0 overflow-hidden bg-background-tertiary">
  {product?.image ? (
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="w-full h-full bg-gray-200" />
  )}
</div>

            {/* Product Details */}
            <div className="flex flex-col gap-3 sm:gap-4 w-full">
              {/* Product Name and Price */}
              <div className="flex justify-between items-center w-full">
                <h3 className="text-sm sm:text-md font-semibold text-text-secondary font-['Outfit'] leading-lg">
                  {product.name}
                </h3>
                <span className="text-sm sm:text-md font-semibold text-text-secondary font-['Outfit'] leading-lg whitespace-nowrap ml-2">
                  {product.price} руб
                </span>
              </div>

              {/* Quantity Controls and Remove Button */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 w-full">
                {/* Quantity Selector */}
                <div className="flex items-center gap-2 border border-border-secondary rounded-md bg-background-secondary p-2.5">
                  <button
                    onClick={() => onUpdateQuantity(product?.id, Math.max(1, product.quantity - 1))}
                    className="w-4 h-4 flex items-center justify-center hover:opacity-70 transition-opacity duration-200 focus:outline-none"
                    aria-label="Decrease quantity"
                  >
                    <img
                      src="/images/img_plus_minus.svg"
                      alt="Decrease"
                      className="w-4 h-4"
                    />
                  </button>

                  <div className="flex justify-center items-center px-3 sm:px-4 overflow-auto">
                    <span className="text-sm font-medium text-text-secondary font-['Outfit'] leading-sm">
                      {product?.quantity}
                    </span>
                  </div>

                  <button
                    onClick={() => onUpdateQuantity(product?.id, product?.quantity + 1)}
                    className="w-4 h-4 flex items-center justify-center hover:opacity-70 transition-opacity duration-200 focus:outline-none"
                    aria-label="Increase quantity"
                  >
                    <img
                      src="/images/img_plus_minus_gray_600.svg"
                      alt="Increase"
                      className="w-4 h-4"
                    />
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => onRemoveProduct(product?.id)}
                  className="text-sm font-medium text-text-red font-['Outfit'] leading-sm hover:underline transition-all duration-200 focus:outline-none"
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;