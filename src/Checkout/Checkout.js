import React, { useState } from 'react';
import { useCart } from '../CartContext';
import './Checkout.css';
import Line from '../Header/MainPage/Line/Line';

function Checkout() {
  const { cartItems, clearCart } = useCart();

  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    recipient_name: '',
    recipient_phone: '',
    address: '',
    deliveryTime: '',
    cardMessage: '',
    floristMessage: '',
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false); // сообщение об успешной отправке

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formDataObj = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xvgangkk', {
        method: 'POST',
        body: formDataObj,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        clearCart();
        setSubmitted(true);
      } else {
        console.error('Ошибка отправки формы');
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  if (submitted) {
    return (
      <div className="checkout-container">
        <h2>Thank you!</h2>
        <p>You’ll get a confirmation email shortly.</p>
      </div>
    );
  }

  return (
    <div>
        <div>
            <Line/>
        </div>
    <div className="checkout-container">
      <h1 className="checkout-title">Almost there!</h1>
        <p className="checkout-subtitle">
          Please fill out the form below to complete your order.
        </p>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>
          Your Full Name:
          <input
            type="text"
            name="customer_name"
            required
            value={formData.customer_name}
            onChange={handleChange}
          />
        </label>

        <label>
          Your Email:
          <input
            type="email"
            name="email"
            required
            value={formData.customer_email}
            onChange={(e) =>
              setFormData({ ...formData, customer_email: e.target.value })
            }
          />
        </label>

        <label>
          Your Phone Number:
          <input
            type="tel"
            name="customer_phone"
            required
            value={formData.customer_phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Recipient's Name:
          <input
            type="text"
            name="recipient_name"
            required
            value={formData.recipient_name}
            onChange={handleChange}
          />
        </label>

        <label>
          Recipient's Phone Number:
          <input
            type="tel"
            name="recipient_phone"
            required
            value={formData.recipient_phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Delivery Address:
          <textarea
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
          />
        </label>

        <label>
          Preferred Delivery Time:
          <input
            type="datetime-local"
            name="deliveryTime"
            required
            value={formData.deliveryTime}
            onChange={handleChange}
          />
        </label>

        <label>
          Card Message (optional):
          <textarea
            name="cardMessage"
            value={formData.cardMessage}
            onChange={handleChange}
          />
        </label>

        <label>
          Note to Florist (optional):
          <textarea
            name="floristMessage"
            value={formData.floristMessage}
            onChange={handleChange}
          />
        </label>

        <h3>Your Order:</h3>
        <ul className="checkout-items">
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity} — ${item.price}
            </li>
          ))}
        </ul>
        <p className="total-checkout">Total: ${totalPrice.toFixed(2)}</p>

        <div className="payment-instructions">
          <h4>Payment Instructions</h4>
          <p>
            Please complete payment via <strong>Zelle</strong> or{' '}
            <strong>Venmo</strong> before order processing begins.
          </p>
          <p>
            <strong>Zelle:</strong> lauzhynskaya@gmail.com<br />
            <strong>Venmo:</strong> lauzhynskaya@gmail.com
          </p>
          <p>
            <strong>Make sure to include your name in the payment note.</strong>
        </p>
          <p>
            <em>Orders are non-refundable after confirmation.</em>
          </p>
        </div>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="agree"
            required
            checked={formData.agree}
            onChange={handleChange}
          />
          I understand that my order will be processed after full payment is
          received and that it is non-refundable.
        </label>

        <button type="submit" className="submit-button">
          Confirm Order
        </button>
      </form>
    </div>
    </div>
  );
}

export default Checkout;



