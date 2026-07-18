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
      
      {/* Header */}
      <div className="flex justify-start items-center w-full mb-2.5">
        <h2 className="text-lg sm:text-xl font-semibold text-text-secondary font-['Poppins']">
          Оформление заказа
        </h2>
      </div>

      {/* Order Details */}
      <div className="flex flex-col gap-3 w-full">
        
        {/* Subtotal + Delivery */}
        <div className="flex flex-col gap-3 w-full py-2">
          
          <div className="flex justify-between items-center w-full">
            <span className="text-sm text-text-quaternary font-['Outfit']">
              Сумма заказа
            </span>
            <span className="text-sm font-medium text-text-secondary font-['Outfit']">
              {orderSummary?.subtotal} руб
            </span>
          </div>

          <div className="flex justify-between items-center w-full">
            <span className="text-sm text-text-quaternary font-['Outfit']">
              Доставка
            </span>
            <span className="text-sm font-medium text-text-secondary font-['Outfit']">
              {orderSummary.delivery} руб
            </span>
          </div>

        </div>

        {/* Total */}
        <div className="flex justify-between items-start w-full py-2">
          <h3 className="text-base sm:text-lg font-semibold text-text-secondary font-['Outfit']">
            Итого:
          </h3>
          <span className="text-xl sm:text-3xl font-bold text-primary-green-darker font-['Outfit']">
            {orderSummary.total} руб
          </span>
        </div>

        {/* Button */}
        <div className="flex flex-col gap-3 w-full">

          <Button
            text="Оформить заказ"
            onClick={() => {
              if (isCartEmpty) return;
              onPlaceOrder();
            }}
            disabled={isCartEmpty}
            className={`
              w-full px-8 py-3
              shadow-[0px_1px_2px_#0000000c]
              transition-all duration-200

              ${
                isCartEmpty
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-button-primary-bg text-button-primary-text hover:opacity-90'
              }
            `}
            text_font_size="text-md"
            text_font_family="Inter"
            text_font_weight="font-medium"
            text_line_height="leading-md"
            text_text_transform="none"
            effect_box_shadow="none"
            layout_width="w-full"
            padding="px-8 py-3"
            position="relative"
            margin="m-0"
            layout_gap="gap-0"
            variant="primary"
            size="medium"
          />

          {/* Hint */}
          <p className="text-xs font-medium text-text-muted font-['Outfit'] text-center">
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