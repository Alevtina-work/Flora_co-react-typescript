import { useState } from "react";
import type { Product } from "../../types/product";
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoriteContext';
import FavoriteIcon from '../../components/ui/FavoriteIcon';
import CategoryBadge from '../../components/ui/CategoryBadge';
import QuantitySelector from '../../components/ui/QuantitySelector';
import AddToCartButton from '../../components/ui/AddToCartButton';
import ProductDetailsModal from '../../components/ui/ProductDetailsModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({
  product,
}: ProductCardProps) => {

  const { toggleFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(product.id);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart
  } = useCart();

  const cartItem = cartItems.find(
    item => item.id === product.id
  );

  const isInCart = !!cartItem;

  const quantity = cartItem?.quantity ?? 0;

  const changeQuantity = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(product.id);
      return;
    }

    if (!isInCart) {
      addToCart(product, newQuantity);
      return;
    }

    updateQuantity(product.id, newQuantity);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 0) {
      changeQuantity(quantity - 1);
    }
  };

  const handleQuantityIncrease = () => {
    changeQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (quantity === 0 || isInCart) return;
    addToCart(product, quantity);
  };

  return (
    <article
      id={`product-${product.id}`}
      className={`
      relative flex flex-col w-full
      bg-card-background
      border
      rounded-4xl
      overflow-hidden
      hover:shadow-lg
      transition-all duration-300
    `}
    >
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-4xl overflow-hidden">

        <div
          onClick={() => setIsDetailsOpen(true)}
          className="absolute inset-0 bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${product.image})` }}
        />

        {!isDetailsOpen && (
          <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-[14px] z-10 pointer-events-none">

            <div className="flex flex-col items-start gap-2">

              <CategoryBadge category={product.category} />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(product);
                }}
                className="
                  pointer-events-auto
                  relative z-30
                  w-10 h-10
                  flex items-center justify-center
                  bg-white/90
                  border border-gray-200
                  rounded-full
                  shadow-md
                  hover:shadow-lg
                  transition-all duration-200
                "
              >
                <FavoriteIcon active={isFav} />
              </button>

            </div>
          </div>
        )}

        <ProductDetailsModal
          isOpen={isDetailsOpen}
          details={product.details}
          onClose={() => setIsDetailsOpen(false)}
        />
      </div>

      <div className="flex flex-col gap-4 p-4 sm:p-6">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-5">

          <h2 className="text-xl sm:text-2xl md:text-3xl font-normal leading-5xl text-text-secondary font-['Orelega_One']">
            {product.name}
          </h2>

          <span className="text-lg sm:text-xl md:text-2xl font-normal leading-3xl text-primary-green-darker font-['Orelega_One'] whitespace-nowrap">
            {product.price} руб
          </span>
        </div>

        <p className="text-sm leading-md text-text-muted font-normal font-['Outfit']">
          {product.description}
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pt-4 sm:pt-6 border-t border-border-light">

          <span className="text-base leading-base uppercase text-text-light font-medium font-['Outfit']">
            Количество
          </span>

          <QuantitySelector
            quantity={quantity}
            onDecrease={handleQuantityDecrease}
            onIncrease={handleQuantityIncrease}
          />

        </div>

        {isInCart && (
          <AddToCartButton
            onClick={() => removeFromCart(product.id)}
          />
        )}

      </div>
    </article>
  );
}
export default ProductCard;