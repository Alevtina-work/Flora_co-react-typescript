interface ProductDetailsModalProps {
    isOpen: boolean;
    details: string;
    onClose: () => void;
}

const ProductDetailsModal = ({
    isOpen,
    details,
    onClose,
}: ProductDetailsModalProps) => {
    if (!isOpen) return null;

    return (
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
            onClick={onClose}
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
                <h3 className="mb-5 text-2xl font-bold">
                    Характеристики
                </h3>

                <div className="whitespace-pre-line text-sm leading-7 text-white/80">
                    {details}
                </div>

                <button
                    onClick={onClose}
                    className="
            mt-6
            rounded-2xl
            border border-white/20
            bg-white/10
            px-5 py-2.5
            text-white
            backdrop-blur-md
            transition-all duration-300
            hover:bg-white/20
          "
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
};

export default ProductDetailsModal;