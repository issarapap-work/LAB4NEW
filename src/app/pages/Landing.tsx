// pages/Landing.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to Our Website</h1>
        <p>Your journey starts here. Explore our features and offerings.</p>
      </header>
      <section className="cta-section">
        <h2>Ready to get started?</h2>
        <Link to="/" className="cta-button">Sign Up</Link>
      </section>
    </div>
  );
};

export default Landing;
