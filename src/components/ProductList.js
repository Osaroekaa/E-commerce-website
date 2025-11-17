import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/Products';
import { formatPrice } from '../utils/FormatPrice';
import SkeletonLoader from './SkeletonLoader';
import './ProductList.css';

function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  // Simulate data fetch delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Added 1 of ${product.name} to cart`);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...new Set(products.map(p => p.category))];

  if (loading) return <SkeletonLoader />;

  return (
    <div className="product-list">
      <h2>Available Products</h2>

      {/* Search & Category Filter */}
        <div className="product-controls">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="product-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
          {/* Hover Overlay */}
          <Link to={`/product/${product.id}`} className="product-hover-overlay">
            Click to see product details
          </Link>

          <img src={`/images/${product.image}`} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="price">{formatPrice(product.price)}</p>
          <div className="product-actions">
            <Link to={`/product/${product.id}`} className="details-btn">View Details</Link>
            <button onClick={() => handleAddToCart(product)} className="add-btn">Add to Cart</button>
          </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default ProductList;