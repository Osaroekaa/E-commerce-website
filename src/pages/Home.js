import React, { useEffect, useState } from 'react';
import PromoBanner from '../components/PromoBanner';
import SiteRating from '../components/SiteRating';


import './Home.css';
import { useNavigate } from 'react-router-dom';

const featuredPromotions = [
  { id: 1, title: "Buy 2 Milo, Get 1 Free", description: "Valid this weekend only!" },
  { id: 2, title: "25% Off All Fans", description: "Cool your home at less cost." },
];

function Home() {
  const [selectedStore, setSelectedStore] = useState(() => localStorage.getItem('selectedStore') || '');
  const navigate = useNavigate();

  const handleStoreChange = (e) => {
    const store = e.target.value;
    setSelectedStore(store);
    localStorage.setItem('selectedStore', store);
  };

  useEffect(() => {
    const saved = localStorage.getItem('selectedStore');
    if (saved) setSelectedStore(saved);
  }, []);

  const goToProduct = (productId) => {
    navigate(`/product/${productId}`);
  };
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setTooltip({
      visible: true,
      x: e.clientX + 10,
      y: e.clientY + 10
    });
  };

  const handleMouseMove = (e) => {
    setTooltip(t => ({
      ...t,
      x: e.clientX + 10,
      y: e.clientY + 10
    }));
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0 });
  };

  return (
    <div className="home-page">
      <PromoBanner />
      <SiteRating />
      {/* Store Selector */}
      <div className="store-selector">
        <label htmlFor="store">Select Your Preferred Store:</label>
        <select id="store" value={selectedStore} onChange={handleStoreChange}>
          <option value="">-- Select Store --</option>
          <option value="Agip Road Rumueme">Agip Road Rumueme</option>
          <option value="Trans Amadi Industrial Layout">Trans Amadi Industrial Layout</option>
          <option value="Onne">Onne</option>
          <option value="Mgbuoba">Mgbuoba</option>
          <option value="Rumuolumeni Road">Rumuolumeni Road</option>
          <option value="GRA Phase 2">GRA Phase 2</option>
          <option value="Rumuodara Junction">Rumuodara Junction</option>
          <option value="Rumuibekwe Road">Rumuibekwe Road</option>
          <option value="Uniport">Uniport</option>
          <option value="Rukpokwu">Rukpokwu Roundabout</option>
          <option value="Elelenwo">Elelenwo</option>
          <option value="Old GRA">Old GRA</option>
          <option value="Ikwerre Road">Ikwerre Road</option>
        </select>
      </div>

      {/* Hero Banner */}
      <section className="hero">
        <h1>Welcome To Market Square</h1>
        <p>Your favourite neighborhood supermarket</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => navigate('/shop')}>Shop Now</button>
          <button className="btn btn-secondary">Today's Deals</button>
        </div>
      </section>

      {/* User Guide */}
      <section className="user-guide">
        <h2> New Here?</h2>
        <p>Choose your store, explore products, add items to cart and checkout seamlessly!</p>
      </section>

      {/* What We Offer */}
      <section className="services">
        <h2>What We Offer</h2>
        <div className="service-list">
          {[
            { name: 'Air Freshener', img: 'Airfreshern.jpg', id: 1, alt: 'Air Freshener product' },
            { name: 'Milo', img: 'Milo.jpg', id: 2, alt: 'Milo beverage product' },
            { name: 'Four Cousins', img: 'FourCoursinsWhite.jpg', id: 3, alt: 'Four Cousins White wine bottle' },
            { name: 'Glacondi', img: 'Giacondi.jpg', id: 4, alt: 'Giacondi wine bottle' },
            { name: 'Declan', img: 'Declan.jpg', id: 5, alt: 'Declan wine bottle' },
            { name: 'Pressing Iron', img: 'ElectricIron.jpg', id: 6, alt: 'Electric pressing iron' },
            { name: 'Bread', img: 'Bread.jpg', id: 7, alt: 'Freshly baked bread' },
            { name: 'Carli Rosy', img: 'CarloRossi.jpg', id: 8, alt: 'Carlo Rossi wine bottle' },
            { name: 'Cliper', img: 'Clipper.jpg', id: 9, alt: 'Electric hair clipper' },
            { name: 'Fan', img: 'Fan.jpg', id: 10, alt: 'Electric standing fan' },
            { name: 'Sun Light', img: 'SunLight.jpg', id: 11, alt: 'Sunlight detergent pack' },
            { name: 'Hypo', img: 'Hypo.jpg', id: 12, alt: 'Hypo bleach bottle' },
            { name: 'Klin', img: 'Klin.jpg', id: 13, alt: 'Klin detergent pack' },
            { name: 'Morning Fresh', img: 'MorningFresh.jpg', id: 14, alt: 'Morning Fresh dishwashing liquid' },
            { name: 'Ariel', img: 'Ariel.jpg', id: 15, alt: 'Ariel detergent pack' },
            { name: 'Blender', img: 'Blender.jpg', id: 16, alt: 'Electric blender' }
          ].map(item => (
            <div key={item.id} className="service-item" onClick={() => goToProduct(item.id)}>
              <img
                src={`/images/${item.img}`}
                alt={item.alt}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
              <div className="service-name">{item.name}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="promotions">
        <h2>Featured Promotions</h2>
        <div className="promotion-list">
          {featuredPromotions.map(promo => (
            <div key={promo.id} className="promotion-card">
              <h4>{promo.title}</h4>
              <p>{promo.description}</p>
            </div>
          ))}
        </div>
      </section>
      {tooltip.visible && (
        <div
          style={{
            position: 'fixed',
            top: tooltip.y,
            left: tooltip.x,
            background: '#fff',
            color: '#222',
            padding: '4px 10px',
            borderRadius: '4px',
            fontSize: '13px',
            pointerEvents: 'none',
            zIndex: 1000
          }}
        >
          Click to see details
        </div>
      )}
    </div>
  );
}

export default Home;
