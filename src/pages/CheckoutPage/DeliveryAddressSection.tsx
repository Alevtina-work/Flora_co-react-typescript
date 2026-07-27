import type { CustomerInfo, DeliveryAddress } from "../../types/customer";
import EditText from '../../components/ui/EditText';
import {
  sanitizeCity,
  sanitizeStreet,
  sanitizeHouse,
  sanitizeApartment,
  sanitizePostalCode,
} from '../../utils/formValidation';

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
  const handleChange = (
    field: keyof DeliveryAddress,
    value: string
  ) => {
    let cleanedValue = value;

    switch (field) {
      case 'city':
        cleanedValue = sanitizeCity(value);
        break;

      case 'street':
        cleanedValue = sanitizeStreet(value);
        break;

      case 'house':
        cleanedValue = sanitizeHouse(value);
        break;

      case 'apartment':
        cleanedValue = sanitizeApartment(value);
        break;

      case 'index':
        cleanedValue = sanitizePostalCode(value);
        break;
    }

    onUpdateDeliveryAddress({
      ...deliveryAddress,
      [field]: cleanedValue,
    });
  };

  return (
    <div className="w-full bg-card-background border border-card-border rounded-lg p-4 sm:p-5 md:p-6">

      <div className="mb-4">
        <h2 className="text-lg sm:text-2xl font-semibold text-text-secondary font-sans">
          Адрес доставки
        </h2>
      </div>

      <div className="flex flex-col gap-4">

        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium text-text-tertiary font-sans leading-sm">
            Город
          </label>
          <EditText
            placeholder="Санкт-Петербург"
            value={deliveryAddress.city}
            onChange={(e) => handleChange('city', e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium text-text-tertiary font-sans leading-sm">
            Улица
          </label>
          <EditText
            placeholder="Невский проспект"
            value={deliveryAddress.street}
            onChange={(e) => handleChange('street', e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">

          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg font-medium text-text-tertiary font-sans leading-sm">
              Дом
            </label>
            <EditText
              placeholder="15к1"
              value={deliveryAddress.house}
              onChange={(e) => handleChange('house', e.target.value)}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg font-medium text-text-tertiary font-sans leading-sm">
              Квартира / офис
            </label>
            <EditText
              placeholder="42"
              value={deliveryAddress.apartment}
              onChange={(e) => handleChange('apartment', e.target.value)}
              className="w-full"
            />
          </div>

        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium text-text-tertiary font-sans leading-sm">
            Почтовый индекс
          </label>
          <EditText
            placeholder="190000"
            value={deliveryAddress.index}
            onChange={(e) => handleChange('index', e.target.value)}
            className="w-full"
          />
        </div>

      </div>
    </div>
  );
};

export default DeliveryAddressSection;