interface QuantitySelectorProps {
    quantity: number;
    onDecrease: () => void;
    onIncrease: () => void;
}

const QuantitySelector = ({
    quantity,
    onDecrease,
    onIncrease,
}: QuantitySelectorProps) => {
    return (
        <div className="flex items-center gap-2 rounded-md border border-border-secondary bg-background-secondary px-[10px] py-[10px]">

            <button
                onClick={onDecrease}
                disabled={quantity === 0}
                className={`
          flex h-7 w-7 items-center justify-center
          transition-opacity duration-200
          focus:outline-none
          ${quantity === 0
                        ? 'cursor-not-allowed opacity-30'
                        : 'cursor-pointer opacity-100 hover:opacity-70'
                    }
        `}
                aria-label="Уменьшить количество"
            >
                <img
                    src="/images/img_plus_minus.svg"
                    alt="Минус"
                    className="h-full w-full"
                />
            </button>

            <div className="flex min-w-[30px] items-center justify-center">
                <span className="text-center font-sans text-md
                font-semibold text-text-secondary">
                    {quantity}
                </span>
            </div>

            <button
                onClick={onIncrease}
                className="flex h-4 w-4 items-center justify-center transition-opacity duration-200 hover:opacity-70 focus:outline-none"
                aria-label="Увеличить количество"
            >
                <img
                    src="/images/img_plus_minus_gray_600.svg"
                    alt="Плюс"
                    className="h-full w-full"
                />
            </button>

        </div>
    );
};

export default QuantitySelector;