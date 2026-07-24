import EditText from '../../components/ui/EditText';
import type { CustomerInfo } from "../../types/customer";
import {
  sanitizeName,
  sanitizeEmail,
  formatPhone,
} from '../../utils/formValidation';

interface CustomerInfoSectionProps {
  customerInfo: CustomerInfo;
  onUpdateCustomerInfo: (customerInfo: CustomerInfo) => void;
}

const CustomerInfoSection = ({ customerInfo, onUpdateCustomerInfo }: CustomerInfoSectionProps) => {
  const handleInputChange = (
    field: keyof CustomerInfo,
    value: string
  ) => {

    let cleanedValue = value;

    if (field === 'firstName' || field === 'lastName') {
      cleanedValue = sanitizeName(value);
    }

    if (field === 'email') {
      cleanedValue = sanitizeEmail(value);
    }

    if (field === 'phone') {
      cleanedValue = formatPhone(value);
    }

    onUpdateCustomerInfo({
      ...customerInfo,
      [field]: cleanedValue,
    });
  };

  return (
    <div className="w-full bg-card-background border border-card-border rounded-lg p-4 sm:p-5 md:p-6">
      <div className="flex justify-start items-center w-full mb-4 md:mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-text-secondary font-['Outfit'] leading-4xl">
          Покупатель
        </h2>
      </div>
      <div className="flex flex-col gap-4 md:gap-4 w-full">
        <div className="flex flex-col md:flex-row gap-4 md:gap-4 w-full">
          <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-medium text-text-tertiary font-['Outfit'] leading-sm">
              Имя
            </label>
            <EditText
              placeholder="Мария"
              value={customerInfo.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              maxLength={30}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-medium text-text-tertiary font-['Outfit'] leading-sm">
              Фамилия
            </label>
            <EditText
              placeholder="Иванова"
              value={customerInfo.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              maxLength={30}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-sm font-medium text-text-tertiary font-['Outfit'] leading-sm">
            Электронная почта
          </label>
          <EditText
            type="email"
            placeholder="maria.ivanova@example.com"
            value={customerInfo.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            maxLength={30}
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-sm font-medium text-text-tertiary font-['Outfit'] leading-sm">
            Телефон
          </label>
          <EditText
            type="tel"
            placeholder="+7 (___) ___-__-__"
            value={customerInfo.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            maxLength={18}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoSection;