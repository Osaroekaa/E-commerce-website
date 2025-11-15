import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

function Navbar() {
  // Use state to trigger re-render when adminAccess changes
  const [adminEnabled] = useState(localStorage.getItem('adminAccess') === 'true');

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src="/images/Logo.jpg"
          alt="Market Square Logo"
          className="navbar-logo"
        />
        <span>Market Square</span>
      </div>

      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/promotions">Promotions</NavLink></li>
        {/* Admin link only visible if adminAccess is 'true' */}
        {adminEnabled && (
          <li><NavLink to="/admin">Admin</NavLink></li>
        )}
        <li><NavLink to="/store-locator">Store Locator</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
      </ul>

    </nav>
  );
}
export default Navbar;
