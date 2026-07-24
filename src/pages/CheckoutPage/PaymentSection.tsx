import type { PaymentOption, DeliveryOption } from '../../types/customer';

interface PaymentSectionProps {
  selectedPayment: PaymentOption | null;
  onSelectPayment: (payment: PaymentOption) => void;
  selectedDelivery: DeliveryOption | null;
}

const PaymentSection = ({
  selectedPayment,
  onSelectPayment,
  selectedDelivery,
}: PaymentSectionProps) => {
  const paymentOptions: PaymentOption[] = [
    { id: 'card', label: 'Картой онлайн' },
    { id: 'sbp', label: 'СБП' },
    { id: 'cash', label: 'При получении' }
  ];

  return (
    <div className="w-full bg-card-background border border-card-border rounded-lg p-4 sm:p-5 md:p-6">

      <div className="flex justify-start items-center w-full mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-text-secondary font-['Outfit']">
          Способ оплаты
        </h2>
      </div>

      <div className="flex flex-col gap-3 w-full">
        {paymentOptions.map((option) => {
          const isCashOption = option.id === 'cash';

          const isCashDisabled =
            !selectedDelivery || selectedDelivery.id !== 'pickup';

          const isDisabled = isCashOption && isCashDisabled;
          const isActive = selectedPayment?.id === option.id;

          return (
            <button
              key={option.id}
              disabled={isDisabled}
              onClick={() => {
                if (isDisabled) return;
                onSelectPayment(option);
              }}
              className={`
                flex items-center gap-3 w-full text-left rounded-lg p-4
                transition-all duration-200 focus:outline-none

                ${isActive
                  ? 'bg-radio-background border border-radio-border-active'
                  : 'bg-card-background border border-border-secondary hover:border-radio-border-active'
                }

                ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >

              <div className="flex-shrink-0">
                <div
                  className={`
                    w-4 h-4 rounded-full border-2 flex items-center justify-center
                    ${isActive
                      ? 'border-radio-border-active bg-radio-border-active'
                      : 'border-border-secondary bg-card-background'
                    }
                  `}
                >
                  {isActive && (
                    <div className="w-2 h-2 rounded-full bg-background-main" />
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-medium text-text-secondary font-['Outfit']">
                  {option.label}
                </span>

                {isCashOption && (
                  <span className="text-xs text-text-muted mt-1">
                    Только для самовывоза
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentSection;