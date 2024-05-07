import React from 'react';
import heroBgImage from '../images/hero-banner.jpg';

const Hero = () => {
  const heroBg = {
    backgroundImage: `url(${heroBgImage})`,
  };

  return (
    <section
      className="section hero has-bg-image"
      id="home"
      aria-label="home"
      style={heroBg}
    >
      <div className="container">
        <h1 className="h1 hero-title">
          <span className="span">High Quality</span> Pet Food
        </h1>

        <p className="hero-text">Sale up to 40% off today</p>

        <a href="#" className="btn">
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
