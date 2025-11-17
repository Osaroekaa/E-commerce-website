import React, { useState, useEffect } from 'react';
import './Checkout.css';
import { formatPrice } from '../utils/FormatPrice';
import OrderLoader from '../components/OrderLoader';
function Checkout() {
  const [form, setForm] = useState({ name: '', address: '', phone: '' });
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      localStorage.removeItem('cart');
      setLoading(false);
      alert(`Thank you ${form.name}, your order has been placed!`);
      window.location.href = '/';
    }, 3000); // 3 seconds fake processing
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

if (loading) {
  return <OrderLoader />;
}

return (
  <div className="checkout">
    <h2>Review</h2>
    <form onSubmit={handleCheckout}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        Place Order
      </button>
    </form>
    <div className="checkout-summary">
      <h3>Order Summary</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = {formatPrice(item.price * item.quantity)}
          </li>
        ))}
      </ul>
      <strong>Total: {formatPrice(total)}</strong>
    </div>
  </div>
);
}

export default Checkout;
/* No additional code needed here. 
The loading state and <OrderLoader /> are already handled inside the component's render logic. 
You can safely remove $PLACEHOLDER$. */