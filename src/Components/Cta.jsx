import React from 'react';
import ctaBgImage from '../images/cta-bg.jpg';
import ctaBanner from '../images/cta-banner.png';
import ctaIcon from '../images/cta-icon.png';

const Cta = () => {
  const ctaBg = {
    backgroundImage: `url(${ctaBgImage})`,
  };

  return (
    <section className="cta has-bg-image" aria-label="cta" style={ctaBg}>
      <div className="container">
        <figure className="cta-banner">
          <img
            src={ctaBanner}
            width="900"
            height="660"
            loading="lazy"
            alt="cat"
            className="w-100"
          />
        </figure>

        <div className="cta-content">
          <img
            src={ctaIcon}
            width="120"
            height="35"
            loading="lazy"
            alt="taste guarantee"
            className="img"
          />

          <h2 className="h2 section-title">
            Taste it, love it or we’ll replace it… Guaranteed!
          </h2>

          <p className="section-text">
            At Petio, we believe your dog and cat will love their food so much
            that if they don’t… we’ll help you find a replacement. That’s our
            taste guarantee.
          </p>

          <a href="#" className="btn">
            Find out more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
