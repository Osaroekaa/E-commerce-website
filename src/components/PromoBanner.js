import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './PromoBanner.css';

const promotions = [
  { text: '🔥 20% OFF ALL GROCERIES THIS WEEKEND!', image: '/images/promo-banner.jpg' },
  { text: '🎉 BUY 2 GET 1 FREE ON SELECT BEVERAGES!', image: '/images/promo-banner.jpg' },
  { text: '🚀 FREE DELIVERY FOR ORDERS ABOVE ₦5000!', image: '/images/promo-banner.jpg' },
];

function PromoBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // optional, for desktop drag
  });

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % promotions.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + promotions.length) % promotions.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 12000); // 12 seconds, change as desired

    return () => clearInterval(interval);
  }, []);

  const promo = promotions[currentIndex];

  return (
    <div {...handlers} className="promo-banner" style={{ backgroundImage: `url(${promo.image})` }}>
      <span className="promo-text">{promo.text}</span>
    </div>
  );
}

export default PromoBanner;
