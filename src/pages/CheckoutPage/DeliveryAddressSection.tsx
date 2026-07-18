import type { CustomerInfo, DeliveryAddress } from "../../types/customer";
import EditText from '../../components/ui/EditText';

interface DeliveryAddressSectionProps {
  deliveryAddress: DeliveryAddress;
  onUpdateDeliveryAddress: (
    deliveryAddress: DeliveryAddress
  ) => void;
}

const DeliveryAddressSection = ({
  deliveryAddress,
  onUpdateDeliveryAddress
}: DeliveryAddressSectionProps) => {
  const handleChange = (field: keyof DeliveryAddress, value: string) => {
  let cleanedValue = value;

  // Только буквы, цифры, пробелы и дефис
  if (field === 'city' || field === 'street') {
    cleanedValue = value.replace(/[^а-яА-ЯёЁ\s-]/g, '');
  }

  // Дом и квартира
  if (field === 'house' || field === 'apartment') {
    cleanedValue = value.replace(/[^а-яА-ЯёЁa-zA-Z0-9\s/-]/g, '');
  }

  // Индекс — только цифры, максимум 6
  if (field === 'index') {
    cleanedValue = value.replace(/\D/g, '').slice(0, 6);
  }

  onUpdateDeliveryAddress({
    ...deliveryAddress,
    [field]: cleanedValue
  });
};

  return (
    <div className="w-full bg-card-background border border-card-border rounded-lg p-4 sm:p-5 md:p-6">

      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-text-secondary font-['Outfit']">
          Адрес доставки
        </h2>
      </div>

      <div className="flex flex-col gap-4">

        {/* City */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-text-tertiary font-['Outfit'] leading-sm">
            Город
          </label>
          <EditText
            placeholder="Санкт-Петербург"
            value={deliveryAddress?.city}
            onChange={(e) => handleChange('city', e.target.value)}
            className="w-full"
          />
        </div>

        {/* Street */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-text-tertiary font-['Outfit'] leading-sm">
            Улица
          </label>
          <EditText
            placeholder="Невский проспект"
            value={deliveryAddress?.street}
            onChange={(e) => handleChange('street', e.target.value)}
            className="w-full"
          />
        </div>

        {/* House + Apartment */}
        <div className="flex flex-col sm:flex-row gap-3">

          <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-medium text-text-tertiary font-['Outfit'] leading-sm">
              Дом
            </label>
            <EditText
              placeholder="15к1"
              value={deliveryAddress?.house}
              onChange={(e) => handleChange('house', e.target.value)}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-medium text-text-tertiary font-['Outfit'] leading-sm">
              Квартира / офис
            </label>
            <EditText
              placeholder="42"
              value={deliveryAddress?.apartment}
              onChange={(e) => handleChange('apartment', e.target.value)}
              className="w-full"
            />
          </div>

        </div>

        {/* Index */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-text-tertiary font-['Outfit'] leading-sm">
            Почтовый индекс
          </label>
          <EditText
            placeholder="190000"
            value={deliveryAddress?.index}
            onChange={(e) => handleChange('index', e.target.value)}
            className="w-full"
          />
        </div>

      </div>
    </div>
  );
};

export default DeliveryAddressSection;