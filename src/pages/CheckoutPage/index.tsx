import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ProductsSection from './ProductsSection';
import CustomerInfoSection from './CustomerInfoSection';
import DeliverySection from './DeliverySection';
import DeliveryAddressSection from './DeliveryAddressSection';
import PaymentSection from './PaymentSection';
import OrderSummarySection from './OrderSummarySection';
import { useCart } from '../../context/CartContext';

import type {
DeliveryOption,
 DeliveryAddress,
 PaymentOption,
} from '../../types/customer';

import type {
 CustomerInfo,
 OrderSummary
} from '../../types/order';

interface Message {
  type: 'success' | 'error';
  text: string;
}

const CheckoutPage = () => {
  const [message, setMessage] = useState<Message | null>(null);
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const products = cartItems;

  const [customerInfo, setCustomerInfo] =
  useState<CustomerInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [selectedDelivery, setSelectedDelivery] =
useState<DeliveryOption>({
    id: 'pickup',
    title: 'Самовывоз',
    description: 'Бесплатно • Можно забрать сегодня',
    price: 0
  });

  const [deliveryAddress, setDeliveryAddress] =
useState<DeliveryAddress>({
  city: '',
  street: '',
  house: '',
  apartment: '',
  index: ''
});

  const [selectedPayment, setSelectedPayment] =
useState<PaymentOption>({
    id: 'card',
    label: 'Картой онлайн'
  });

  const calculateOrderSummary = () => {
    const subtotal = products.reduce(
      (sum, product) => sum + product?.price * product?.quantity,
      0
    );
    const delivery = selectedDelivery?.price || 0;

    return {
      subtotal,
      delivery,
      total: subtotal + delivery
    };
  };

  const handlePlaceOrder = () => {
    if (
      !customerInfo?.firstName ||
      !customerInfo?.lastName ||
      !customerInfo?.email ||
      !customerInfo?.phone
    ) {
      setMessage({
        type: 'error',
        text: 'Пожалуйста, заполните все поля'
      });
      return;
    }

    if (!products?.length) {
      setMessage({
        type: 'error',
        text: 'Ваша корзина пуста'
      });
      return;
    }

    setMessage({
      type: 'success',
      text: 'Заказ успешно оформлен! Мы свяжемся с вами в течение 1 рабочего дня.'
    });

    console.log('Order placed');
  };

  const orderSummary = calculateOrderSummary();

  return (
    <>
      <Helmet>
        <title>Оформление заказа | Flora&Co</title>
      </Helmet>

      <div className="flex flex-col min-h-screen bg-background-gray">

        <Header />

        {/* MODAL */}
        {message && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-xl relative">

              {/* Close */}
              <button
                onClick={() => setMessage(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                {message.type === 'success' ? (
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl">
                    ✓
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-2xl">
                    !
                  </div>
                )}
              </div>

              {/* Text */}
              <p className="text-center text-sm text-gray-700 font-medium">
                {message.text}
              </p>

              {/* Button */}
              <div className="mt-5 flex justify-center">
                <button
                  onClick={() => setMessage(null)}
                  className={`
                    px-5 py-2 rounded-md text-sm font-medium
                    ${
                      message.type === 'success'
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-red-500 text-white hover:bg-red-600'
                    }
                  `}
                >
                  Закрыть
                </button>
              </div>

            </div>
          </div>
        )}

        {/* MAIN */}
        <main className="flex-1 w-full bg-background-secondary py-6 sm:py-7 md:py-8">

          <div className="w-full px-4 sm:px-6 md:px-8">

            <div className="flex flex-col lg:flex-row items-start gap-6 w-full max-w-[1440px] mx-auto">

              <section className="flex flex-col gap-6 w-full lg:flex-1">

                <ProductsSection
                  products={products}
                  onUpdateQuantity={updateQuantity}
                  onRemoveProduct={removeFromCart}
                />

                <CustomerInfoSection
                  customerInfo={customerInfo}
                  onUpdateCustomerInfo={setCustomerInfo}
                />

                <DeliverySection
                  selectedDelivery={selectedDelivery}
                  onSelectDelivery={setSelectedDelivery}
                />

                {selectedDelivery?.id === 'mail' && (
  <DeliveryAddressSection
    deliveryAddress={deliveryAddress}
    onUpdateDeliveryAddress={setDeliveryAddress}
  />
)}

                <PaymentSection
                  selectedPayment={selectedPayment}
                  onSelectPayment={setSelectedPayment}
                  selectedDelivery={selectedDelivery}
                />

              </section>

              <aside className="w-full lg:w-[34%] flex justify-center">

                <OrderSummarySection
                  orderSummary={orderSummary}
                  onPlaceOrder={handlePlaceOrder}
                />

              </aside>

            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CheckoutPage;