import Button from "../ui/Button";

interface AddToCartButtonProps {
    onClick: () => void;
}

const AddToCartButton = ({
    onClick,
}: AddToCartButtonProps) => {
    return (
        <Button
            onClick={onClick}
            className="
                w-full
                mt-4
                text-lg
                font-medium
                text-white
                rounded-md
                bg-primary-green-dark
                hover:bg-primary-green
            "
        >
            <div className="flex items-center justify-center gap-2">
                <img
                    src="/images/img_plusminus_white_a700.svg"
                    alt=""
                    className="w-[18px] h-[18px]"
                    aria-hidden="true"
                />

                <span>Удалить из корзины</span>
            </div>
        </Button>
    );
};

export default AddToCartButton;