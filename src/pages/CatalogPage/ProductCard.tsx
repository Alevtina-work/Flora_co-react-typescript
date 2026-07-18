import { useState } from "react";
import type { Product } from "../../types/product";
import Button from '../../components/ui/Button';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoriteContext';

interface ProductCardProps {
  product: Product;
  isHighlighted?: boolean;
}

const ProductCard = ({
  product,
  isHighlighted,
}: ProductCardProps) => {

  const { toggleFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(product.id);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Локальный счетчик ДО добавления в корзину
  const [quantity, setQuantity] = useState(0);

  const {
    cartItems,
    addToCart,
    removeFromCart
  } = useCart();

  // Проверяем, есть ли товар в корзине
  const cartItem = cartItems.find(
    item => item.id === product.id
  );

  const isInCart = !!cartItem;

  // Уменьшение количества
  const handleQuantityDecrease = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;

      setQuantity(newQuantity);

      if (isInCart) {
        if (newQuantity === 0) {
          removeFromCart(product.id);
        } else {
          addToCart(product, newQuantity - cartItem.quantity);
        }
      }
    }
  };

  // Увеличение количества
  const handleQuantityIncrease = () => {
    const newQuantity = quantity + 1;

    setQuantity(newQuantity);

    if (isInCart) {
      addToCart(product, 1);
    }
  };

  // Добавление в корзину
  const handleAddToCart = () => {
    if (quantity > 0 && !isInCart) {
      addToCart(product, quantity);
    }
  };

  const categoryLabels = {
  category1: 'Лилии',
  category2: 'Пионы',
  category3: 'Клематисы'
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

      ${
        isHighlighted
          ? 'border-green-500 ring-2 ring-green-500 shadow-xl'
          : 'border-card-border'
      }
    `}
  >
      {/* IMAGE SECTION */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-4xl overflow-hidden">

        {/* ФОН ИЗОБРАЖЕНИЯ */}
        <div
          onClick={() => setIsDetailsOpen(true)}
          className="absolute inset-0 bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${product.image})` }}
        />

        {/* CATEGORY + HEART */}
        {!isDetailsOpen && (
          <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-[14px] z-10 pointer-events-none">

            <div className="flex flex-col items-start gap-2">

              {/* Category */}
<button
  className="pointer-events-auto px-3 py-1 bg-white/90 text-text-green-accent text-xs font-medium uppercase rounded-md shadow"
  aria-label={`Категория: ${categoryLabels[product.category]}`}
>
  {categoryLabels[product.category]}
</button>

              {/* Favorite */}
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
                <svg
                  className={`
                    w-5 h-5 transition-colors duration-200
                    ${isFav
                      ? 'fill-green-600 stroke-green-600'
                      : 'fill-none stroke-gray-500'
                    }
                  `}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    strokeWidth="2"
                  />
                </svg>
              </button>

            </div>
          </div>
        )}

        {/* DETAILS OVERLAY */}
        {isDetailsOpen && (
          <div
            className="
              absolute inset-0
              flex items-center justify-center
              bg-black/75
              text-white
              p-6
              z-20
              cursor-pointer
            "
            onClick={() => setIsDetailsOpen(false)}
          >
            <div
              className="
                w-full max-w-[90%]
                max-h-[90%]
                overflow-y-auto
                bg-black/40
                backdrop-blur-sm
                rounded-3xl
                p-6
                text-left
              "
              onClick={(e) => e.stopPropagation()}
            >

              <h3 className="text-2xl font-bold mb-5">
                Характеристики
              </h3>

              <div className="whitespace-pre-line text-sm leading-7 text-white/80">
                {product.details}
              </div>

              <button
                onClick={() => setIsDetailsOpen(false)}
                className="
                  mt-6
                  px-5 py-2.5
                  bg-white/10
                  hover:bg-white/20
                  border border-white/20
                  backdrop-blur-md
                  rounded-2xl
                  text-white
                  transition-all duration-300
                "
              >
                Закрыть
              </button>

            </div>
          </div>
        )}
      </div>

      {/* CONTENT SECTION */}
      <div className="flex flex-col gap-4 p-4 sm:p-6">

        {/* Title and Price */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-5">

          <h2 className="text-xl sm:text-2xl md:text-3xl font-normal leading-5xl text-text-secondary font-['Orelega_One']">
            {product.name}
          </h2>

          <span className="text-lg sm:text-xl md:text-2xl font-normal leading-3xl text-primary-green-darker font-['Orelega_One'] whitespace-nowrap">
            {product.price} руб
          </span>
        </div>

        {/* Description */}
        <p className="text-sm leading-md text-text-muted font-normal font-['Outfit']">
          {product.description}
        </p>

        {/* Quantity Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pt-4 sm:pt-6 border-t border-border-light">

          <span className="text-base leading-base uppercase text-text-light font-medium font-['Outfit']">
            Количество
          </span>

          {/* Quantity Controls */}
          <div className="flex items-center gap-2 bg-background-secondary border border-border-secondary rounded-md px-[10px] py-[10px]">

            {/* Minus */}
            <button
              onClick={handleQuantityDecrease}
              disabled={quantity === 0}
              className={`
                w-4 h-4
                flex items-center justify-center
                transition-opacity duration-200
                focus:outline-none

                ${quantity === 0
                  ? 'opacity-30 cursor-not-allowed'
                  : 'opacity-100 cursor-pointer hover:opacity-70'
                }
              `}
              aria-label="Уменьшить количество"
            >
              <img
                src="/images/img_plus_minus.svg"
                alt="Минус"
                className="w-full h-full"
              />
            </button>

            {/* Quantity */}
            <div className="flex items-center justify-center min-w-[28px]">
              <span className="text-sm leading-sm text-text-secondary font-medium text-center font-['Outfit']">
                {quantity}
              </span>
            </div>

            {/* Plus */}
            <button
              onClick={handleQuantityIncrease}
              className="w-4 h-4 flex items-center justify-center hover:opacity-70 transition-opacity duration-200 focus:outline-none"
              aria-label="Увеличить количество"
            >
              <img
                src="/images/img_plus_minus_gray_600.svg"
                alt="Плюс"
                className="w-full h-full"
              />
            </button>
          </div>
        </div>

        {/* CART BUTTON */}
        <Button
          onClick={() => {
            if (isInCart) {
              removeFromCart(product.id);
              setQuantity(0);
            } else {
              handleAddToCart();
            }
          }}
          disabled={quantity === 0 && !isInCart}
          text_font_size="text-md"
          text_font_family="Outfit"
          text_font_weight="font-medium"
          text_line_height="leading-lg"
          text_text_align="center"
          text_text_transform="none"
          text_color="text-text-white"
          fill_background_color={
            isInCart
              ? 'bg-primary-green-dark'
              : quantity > 0
                ? 'bg-primary-green'
                : 'bg-button-disabled-bg'
          }
          border_border_radius="rounded-md"
          className={`
            w-full mt-4
            ${
              quantity > 0 || isInCart
                ? 'hover:bg-primary-green-dark cursor-pointer'
                : 'cursor-not-allowed opacity-50'
            }
            transition-all duration-200
          `}
        >
          <div className="flex items-center justify-center gap-2">

            <img
              src="/images/img_plusminus_white_a700.svg"
              alt=""
              className="w-[18px] h-[18px]"
              aria-hidden="true"
            />

            <span>
              {isInCart
                ? 'Удалить из корзины'
                : 'Добавить в корзину'}
            </span>

          </div>
        </Button>

      </div>
    </article>
  );
}
export default ProductCard;