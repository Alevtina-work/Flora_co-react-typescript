import EditText from '../../components/ui/EditText';
import type { CustomerInfo } from "../../types/customer";

interface CustomerInfoSectionProps {
  customerInfo: CustomerInfo;
  onUpdateCustomerInfo: (customerInfo: CustomerInfo) => void;
}

const CustomerInfoSection = ({ customerInfo, onUpdateCustomerInfo }: CustomerInfoSectionProps) => {
  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
  let cleanedValue = value;

  // Имя и фамилия — только буквы и дефис
  if (field === 'firstName' || field === 'lastName') {
    cleanedValue = value.replace(/[^а-яА-ЯёЁa-zA-Z-]/g, '');
  }

  if (field === 'email') {
  cleanedValue = value
    .replace(/\s/g, '')
    .replace(/[^a-zA-Z0-9@._-]/g, '');
}

  // Телефон — только цифры, +, скобки, дефисы и пробелы
  if (field === 'phone') {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  let formatted = '+7';

  if (digits.length > 1) {
    formatted += ` (${digits.slice(1, 4)}`;
  }

  if (digits.length >= 5) {
    formatted += `) ${digits.slice(4, 7)}`;
  }

  if (digits.length >= 8) {
    formatted += `-${digits.slice(7, 9)}`;
  }

  if (digits.length >= 10) {
    formatted += `-${digits.slice(9, 11)}`;
  }

  cleanedValue = formatted;
}

  onUpdateCustomerInfo({
    ...customerInfo,
    [field]: cleanedValue
  });
};

  return (
    <div className="w-full bg-card-background border border-card-border rounded-lg p-4 sm:p-5 md:p-6">
      {/* Section Header */}
      <div className="flex justify-start items-center w-full mb-4 md:mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-text-secondary font-['Outfit'] leading-4xl">
          Покупатель
        </h2>
      </div>
      {/* Form Fields */}
      <div className="flex flex-col gap-4 md:gap-4 w-full">
        {/* Name and Surname Row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-4 w-full">
          {/* First Name */}
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

          {/* Last Name */}
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

        {/* Email */}
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

        {/* Phone */}
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