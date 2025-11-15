import { useParams } from 'react-router-dom';
import { useState } from 'react';
import products from '../data/Products';
import { formatPrice } from '../utils/FormatPrice';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // check if product already exists in cart
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({
        ...product,
        quantity
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Added ${quantity} of ${product.name} to cart`);
  };

  if (!product) return <div style={{ padding: 20 }}>Product not found.</div>;

  return (
    <div className="product-detail-container">
      <img
        src={`/images/${product.image}`}
        alt={`Product: ${product.name}`}
        className="product-detail-image"
      />
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p><strong>{formatPrice(product.price)}</strong></p>
        <div className="cart-actions">
          <input 
            type="number" 
            min="1" 
            value={quantity} 
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
