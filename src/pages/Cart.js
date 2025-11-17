import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import { formatPrice } from '../utils/FormatPrice';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <img src={`/images/${item.image}`} alt={`Product: ${item.name}`} />
                <span>{item.name} ({formatPrice(item.price)}) x {item.quantity}</span>
                <button onClick={() => removeItem(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: {formatPrice(total)}</h3>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;

