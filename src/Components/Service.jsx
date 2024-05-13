import React from 'react';
import serviceImage from '../images/service-image.png';
import serviceIconOne from '../images/service-icon-1.png';
import serviceIconTwo from '../images/service-icon-2.png';
import serviceIconThree from '../images/service-icon-3.png';
import serviceIconFour from '../images/service-icon-4.png';

const Service = () => {
  return (
    <section className="section service" aria-label="service">
      <div className="container">
        <img
          src={serviceImage}
          width="122"
          height="136"
          loading="lazy"
          alt=""
          className="img"
        />

        <h2 className="h2 section-title">
          <span className="span">What your pet needs,</span> when they need it.
        </h2>

        <ul className="grid-list">
          <li>
            <div className="service-card">
              <figure className="card-icon">
                <img
                  src={serviceIconOne}
                  width="70"
                  height="70"
                  loading="lazy"
                  alt="service icon"
                />
              </figure>

              <h3 className="h3 card-title">Free Same-Day Delivery</h3>

              <p className="card-text">
                Order by 2pm local time to get free delivery on orders $35+
                today.
              </p>
            </div>
          </li>

          <li>
            <div className="service-card">
              <figure className="card-icon">
                <img
                  src={serviceIconTwo}
                  width="70"
                  height="70"
                  loading="lazy"
                  alt="service icon"
                />
              </figure>

              <h3 className="h3 card-title">30 Day Return</h3>

              <p className="card-text">
                35% off your first order plus 5% off all future orders.
              </p>
            </div>
          </li>

          <li>
            <div className="service-card">
              <figure className="card-icon">
                <img
                  src={serviceIconThree}
                  width="70"
                  height="70"
                  loading="lazy"
                  alt="service icon"
                />
              </figure>

              <h3 className="h3 card-title">Security payment</h3>

              <p className="card-text">
                25% off your online order of $50+. Available at most locations.
              </p>
            </div>
          </li>

          <li>
            <div className="service-card">
              <figure className="card-icon">
                <img
                  src={serviceIconFour}
                  width="70"
                  height="70"
                  loading="lazy"
                  alt="service icon"
                />
              </figure>

              <h3 className="h3 card-title">24/7 Support</h3>

              <p className="card-text">
                Shop online to get orders over $35 shipped fast and free.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Service;
