import type {
    CustomerInfo,
    DeliveryAddress,
    DeliveryOption,
    PaymentOption,
} from "../types/customer";

import type { CartItem } from "../types/cart";

const NAME_REGEX = /[^а-яА-ЯёЁ\s-]/g;

const STREET_REGEX = /[^а-яА-ЯёЁ0-9\s-]/g;

const HOUSE_REGEX = /[^а-яА-ЯёЁa-zA-Z0-9\s/-]/g;

export const sanitizeName = (value: string) =>
    value.replace(NAME_REGEX, "");

export const sanitizeEmail = (value: string) =>
    value
        .replace(/\s/g, "")
        .replace(/[^a-zA-Z0-9@._-]/g, "");

export const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    let formatted = "+7";

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

    return formatted;
};

export const sanitizeCity = (value: string) =>
    value.replace(NAME_REGEX, "");

export const sanitizeStreet = (value: string) =>
    value.replace(STREET_REGEX, "");

export const sanitizeHouse = (value: string) =>
    value.replace(HOUSE_REGEX, "");

export const sanitizeApartment = (value: string) =>
    value.replace(HOUSE_REGEX, "");

export const sanitizePostalCode = (value: string) =>
    value.replace(/\D/g, "").slice(0, 6);

/* -------------------- VALIDATION -------------------- */

const isFilled = (value: string) =>
    value.trim().length > 0;

const error = (message: string) => ({
    valid: false as const,
    message,
});

export const isCustomerInfoValid = (
    customerInfo: CustomerInfo
) => {
    return (
        isFilled(customerInfo.firstName) &&
        isFilled(customerInfo.lastName) &&
        isFilled(customerInfo.email) &&
        isFilled(customerInfo.phone)
    );
};

export const isDeliveryAddressValid = (
    deliveryAddress: DeliveryAddress
) => {
    return (
        isFilled(deliveryAddress.city) &&
        isFilled(deliveryAddress.street) &&
        isFilled(deliveryAddress.house) &&
        isFilled(deliveryAddress.index)
    );
};

export const isCartValid = (
    cartItems: CartItem[]
) => {
    return cartItems.length > 0;
};

export const validateOrder = ({
    customerInfo,
    deliveryAddress,
    selectedDelivery,
    selectedPayment,
    cartItems,
}: {
    customerInfo: CustomerInfo;
    deliveryAddress: DeliveryAddress;
    selectedDelivery: DeliveryOption | null;
    selectedPayment: PaymentOption | null;
    cartItems: CartItem[];
}) => {

    if (!isCustomerInfoValid(customerInfo)) {
        return error("Пожалуйста, заполните данные покупателя");
    }

    if (
        selectedDelivery?.id === "mail" &&
        !isDeliveryAddressValid(deliveryAddress)
    ) {
        return error("Пожалуйста, заполните адрес доставки");
    }

    if (!selectedPayment) {
        return error("Выберите способ оплаты");
    }

    if (!isCartValid(cartItems)) {
        return error("Ваша корзина пуста");
    }

    return {
        valid: true as const,
    };
};