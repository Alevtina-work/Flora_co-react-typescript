import Button from '../../components/ui/Button';
import type { OrderSummary } from '../../types/order';

interface OrderSummarySectionProps {
  orderSummary: OrderSummary;
  onPlaceOrder: () => void;
}

const OrderSummarySection = ({ orderSummary, onPlaceOrder }: OrderSummarySectionProps) => {
  const isCartEmpty = orderSummary.subtotal === 0;

  return (
    <div className="w-full sm:w-full md:w-[92%] bg-card-background border border-card-border rounded-lg p-4 sm:p-5 md:p-6 mx-auto">

      <div className="flex justify-start items-center w-full mb-2.5">
        <h2 className="text-lg sm:text-2xl font-semibold text-text-secondary font-sans">
          Оформление заказа
        </h2>
      </div>

      <div className="flex flex-col gap-3 w-full">

        <div className="flex flex-col gap-3 w-full py-2">

          <div className="flex justify-between items-center w-full">
            <span className="text-lg text-text-quaternary font-sans">
              Сумма заказа
            </span>
            <span className="text-lg font-medium text-text-secondary font-sans">
              {orderSummary?.subtotal} руб
            </span>
          </div>

          <div className="flex justify-between items-center w-full">
            <span className="text-lg text-text-quaternary font-sans">
              Доставка
            </span>
            <span className="text-lg font-medium text-text-secondary font-sans">
              {orderSummary.delivery} руб
            </span>
          </div>

        </div>

        <div className="flex justify-between items-start w-full py-2">
          <h3 className="text-base sm:text-2xl font-semibold text-text-secondary font-sans">
            Итого:
          </h3>
          <span className="text-xl sm:text-3xl font-bold text-primary-green-darker font-sans">
            {orderSummary.total} руб
          </span>
        </div>

        <div className="flex flex-col gap-3 w-full">

          <Button
            text="Оформить заказ"
            onClick={() => {
              if (isCartEmpty) return;
              onPlaceOrder();
            }}
            disabled={isCartEmpty}
            className={`
              w-full
              px-8
              py-3

              text-lg
              font-semibold
              font-sans
              leading-md

              shadow-[0px_1px_2px_#0000000c]

              transition-all
              duration-200

              ${isCartEmpty
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-button-primary-bg text-button-primary-text hover:opacity-90'
              }
            `}
            variant="primary"
            size="medium"
          />

          <p className="text-base font-medium text-text-muted font-sans text-center">
            {isCartEmpty
              ? 'Добавьте товары в корзину'
              : 'Свяжемся с вами для подтверждения заказа в течение 1 рабочего дня'}
          </p>

        </div>
      </div>
    </div>
  );
};

export default OrderSummarySection;