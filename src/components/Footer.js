import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      console.log(`Subscribed: ${email}`);
      alert('Thank you for subscribing!');
      e.target.reset();
      setShowPopup(true); // Show popup after subscribing
    }
  };

  const handleAdminLogin = () => {
    const code = prompt('Enter admin access code:');
    if (code === 'marketsquare2025') {
      localStorage.setItem('adminAccess', 'true');
      alert('Admin access granted — Admin link is now visible.');
      window.location.reload();
    } else {
      alert('Incorrect code.');
    }
  };

  return (
    <footer className="footer">
      <div className="newsletter">
        <h3>Join Our Newsletter</h3>
        <form onSubmit={handleSubscribe}>
          <input type="email" name="email" placeholder="Your email address" required />
          <button type="submit" className="subscribe-btn">Subscribe</button>
        </form>
      </div>

      {showPopup && (
        <div className="subscribe-popup">
          <p>✅ Subscribed!</p>
          <div className="popup-buttons">
            <button onClick={() => {
              console.log('Unsubscribed');
              setShowPopup(false);
            }}>Unsubscribe</button>
            <button onClick={() => setShowPopup(false)}>Continue</button>
          </div>
        </div>
      )}

      <div className="socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>

      <button
        className="btn btn-admin"
        onClick={() => {
          const code = prompt('Enter admin access code:');
          if (code === 'marketsquare2025') {
            localStorage.setItem('adminAccess', 'true');
            alert('Admin access granted — Admin link is now visible.');
            window.location.reload();
          } else {
            alert('Incorrect code.');
          }
        }}
      >
        Admin Login
      </button>

      <p className="copyright">
        &copy; {new Date().getFullYear()} Market Square Supermarket. All rights reserved.
      </p>

      <p className="credit">
  Built by <strong>Osaroekaa Sampson</strong>
</p>

    </footer>
  );
}

export default Footer;