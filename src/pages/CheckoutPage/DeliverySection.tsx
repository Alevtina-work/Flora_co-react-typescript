import type { DeliveryOption } from "../../types/customer";

interface DeliverySectionProps {
  selectedDelivery: DeliveryOption | null;
  onSelectDelivery: (delivery: DeliveryOption) => void;
}

const DeliverySection = ({ selectedDelivery, onSelectDelivery }: DeliverySectionProps) => {
  const deliveryOptions: DeliveryOption[] = [
    {
      id: 'pickup',
      title: 'Самовывоз',
      description: 'Бесплатно • Можно забрать сегодня',
      price: 0
    },
    {
      id: 'mail',
      title: 'По почте',
      description: '300 руб • 2-3 рабочих дня',
      price: 300
    }
  ];

  return (
    <div className="w-full bg-card-background border border-card-border rounded-lg p-4 sm:p-5 md:p-6">
      {/* Section Header */}
      <div className="flex justify-start items-center w-full mb-4 md:mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-text-secondary font-['Outfit'] leading-4xl">
          Доставка
        </h2>
      </div>
      {/* Delivery Options */}
      <div className="flex flex-col gap-3 md:gap-3 w-full">
        {deliveryOptions?.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelectDelivery(option)}
            className={`flex items-center justify-start w-full rounded-lg p-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-green ${
              selectedDelivery?.id === option.id
                ? 'bg-radio-background border border-radio-border-active' :'bg-card-background border border-border-secondary hover:border-radio-border-active'
            }`}
          >
            {/* Radio Button */}
            <div className="flex-shrink-0 mr-3">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                  selectedDelivery?.id === option.id
                    ? 'border-radio-border-active bg-radio-border-active' :'border-border-secondary bg-card-background'
                }`}
              >
                {selectedDelivery?.id === option.id && (
                  <div className="w-2 h-2 rounded-full bg-background-main" />
                )}
              </div>
            </div>

            {/* Option Details */}
            <div className="flex flex-col justify-start items-start flex-1 px-2 sm:px-3">
              <h3 className="text-sm font-medium text-text-secondary font-['Outfit'] leading-sm text-left">
                {option.title}
              </h3>
              <p className="text-sm font-normal text-text-muted font-['Outfit'] leading-sm text-left mt-1">
                {option.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DeliverySection;