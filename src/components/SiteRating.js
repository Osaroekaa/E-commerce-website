import { useState, useEffect } from 'react';
import './SiteRating.css';

function SiteRating() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 60000); // 60 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  const handleRate = (rating) => {
    console.log(`User rated the site: ${rating} stars`);
    alert(`Thanks for your ${rating}-star rating!`);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="site-rating-overlay">
      <div className="site-rating-modal">
        <h3>Rate your experience</h3>
        <p>How would you rate your experience on our site?</p>
        <div className="rating-buttons">
          {[1, 2, 3, 4, 5].map(num => (
            <button key={num} onClick={() => handleRate(num)}>{num}⭐</button>
          ))}
        </div>
        <button className="close-btn" onClick={handleClose}>Dismiss</button>
      </div>
    </div>
  );
}

export default SiteRating;
