
import React, { useState, useEffect } from 'react';
import './AdminPanel.css';

function AdminPanel() {
  const [store, setStore] = useState("Market Square GRA");
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
    image: ""
  });

  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem(store)) || [];
    setProducts(storedProducts);
  }, [store]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const updatedProducts = [...products];

    if (editingIndex !== null) {
      updatedProducts[editingIndex] = form;
      setEditingIndex(null);
    } else {
      updatedProducts.push(form);
    }

    localStorage.setItem(store, JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    setForm({ name: "", price: "", quantity: "", category: "", image: "" });
  };

  const deleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    localStorage.setItem(store, JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  const editProduct = (index) => {
    setForm(products[index]);
    setEditingIndex(index);
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>

      <div className="store-select">
        <label>Select Store:</label>
          <select value={store} onChange={(e) => setStore(e.target.value)}>
            <option>Agip Road Rumueme</option>
            <option >Trans Amadi Industrial Layout</option>
            <option>Onne</option>
            <option>Mgbuoba</option>
            <option>Rumuolumeni Road</option>
            <option>GRA Phase 2</option>
            <option>Rumuodara Junction</option>
            <option>Rumuibekwe Road</option>
            <option>Uniport</option>
            <option>Rukpokwu Roundabout</option>
            <option>Elelenwo</option>
            <option>Old GRA</option>
          </select>
        </div>

      <form onSubmit={handleAddProduct}>
        <input type="text" name="name" placeholder="Product Name" value={form.name} onChange={handleFormChange} required />
        <input type="number" name="price" placeholder="Price (₦)" value={form.price} onChange={handleFormChange} required />
        <input type="number" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleFormChange} required />
        <input type="text" name="category" placeholder="Category" value={form.category} onChange={handleFormChange} required />

        <div className="image-uploader" onClick={() => document.getElementById("imageInput").click()}>
          {form.image ? (
            <img src={form.image} alt="Preview" />
          ) : (
            <div className="plus-icon">+</div>
          )}
        </div>
        <input type="file" id="imageInput" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} />

        <button type="submit">{editingIndex !== null ? "Update Product" : "Add Product"}</button>
      </form>

      <h3>Products</h3>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index}>
            <img src={product.image} alt={product.name} />
            <span>{product.name} - ₦{product.price} | Qty: {product.quantity} | {product.category}</span>
            <div>
              <button onClick={() => editProduct(index)}>Edit</button>
              <button onClick={() => deleteProduct(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {/* Logout Button */}
      <button
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem('adminAccess');
          alert('Logged out.');
          window.location.href = '/';
        }}
      >
        Logout Admin
      </button>
    </div>
  );
}

export default AdminPanel;
