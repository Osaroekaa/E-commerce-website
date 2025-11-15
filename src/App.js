// Importing React Router components for navigation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing custom components and pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import AdminPanel from './components/AdminPanel';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import StoreLocator from './pages/StoreLocator';
import Promotion from './pages/Promotion';
import Footer from './components/Footer'; // <-- Import Footer
import NotFound from './pages/NotFound'; // Importing NotFound page

// Importing global CSS styles
import './App.css';

// Main application component and routing structure
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductList />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/store-locator" element={<StoreLocator />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
      </Routes>
      <Footer /> {/* <-- Add Footer here */}
    </Router>
  );
}

export default App;
