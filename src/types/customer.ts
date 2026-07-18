export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface DeliveryAddress {
  city: string;
  street: string;
  house: string;
  apartment: string;
  index: string;
}

export interface DeliveryOption {
  id: string;
  title: string;
  description: string;
  price: number;
}

export interface PaymentOption {
  id: string;
  label: string;
}