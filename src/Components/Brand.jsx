import React from 'react';
import brandOne from '../images/brand-1.jpg';
import brandTwo from '../images/brand-2.jpg';
import brandThree from '../images/brand-3.jpg';
import brandFour from '../images/brand-4.jpg';
import brandFive from '../images/brand-5.jpg';

const Brand = () => {
  return (
    <section className="section brand" aria-label="brand">
      <div className="container">
        <h2 className="h2 section-title">
          <span className="span">Popular</span> Brands
        </h2>

        <ul className="has-scrollbar">
          <li class="scrollbar-item">
            <div
              className="brand-card img-holder"
              style={{ '--width': 150, '--height': 150 }}
            >
              <img
                src={brandOne}
                width="150"
                height="150"
                loading="lazy"
                alt="brand logo"
                className="img-cover"
              />
            </div>
          </li>

          <li className="scrollbar-item">
            <div
              className="brand-card img-holder"
              style={{ '--width': 150, '--height': 150 }}
            >
              <img
                src={brandTwo}
                width="150"
                height="150"
                loading="lazy"
                alt="brand logo"
                className="img-cover"
              />
            </div>
          </li>

          <li className="scrollbar-item">
            <div
              className="brand-card img-holder"
              style={{ '--width': 150, '--height': 150 }}
            >
              <img
                src={brandThree}
                width="150"
                height="150"
                loading="lazy"
                alt="brand logo"
                className="img-cover"
              />
            </div>
          </li>

          <li className="scrollbar-item">
            <div
              className="brand-card img-holder"
              style={{ '--width': 150, '--height': 150 }}
            >
              <img
                src={brandFour}
                width="150"
                height="150"
                loading="lazy"
                alt="brand logo"
                className="img-cover"
              />
            </div>
          </li>

          <li className="scrollbar-item">
            <div
              className="brand-card img-holder"
              style={{ '--width': 150, '--height': 150 }}
            >
              <img
                src={brandFive}
                width="150"
                height="150"
                loading="lazy"
                alt="brand logo"
                className="img-cover"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Brand;
