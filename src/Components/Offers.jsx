import React from 'react';
import offerBannerOne from '../images/offer-banner-1.jpg';
import offerBannerTwo from '../images/offer-banner-2.jpg';
import offerBannerThree from '../images/offer-banner-3.jpg';

const Offers = () => {
  const offerBanner1 = {
    backgroundImage: `url(${offerBannerOne})`,
    '--width': 330,
    '--height': 300,
  };

  const offerBanner2 = {
    backgroundImage: `url(${offerBannerTwo})`,
    '--width': 330,
    '--height': 300,
  };

  const offerBanner3 = {
    backgroundImage: `url(${offerBannerThree})`,
    '--width': 330,
    '--height': 300,
  };
  return (
    <section className="section offer" aria-label="offer">
      <div className="container">
        <ul className="grid-list">
          <li>
            <div
              className="offer-card has-bg-image img-holder"
              style={offerBanner1}
            >
              <p className="card-subtitle">Selected Items. Online Only.</p>

              <h3 className="h3 card-title">
                Hot Summer <span className="span">Deals</span>
              </h3>

              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </li>

          <li>
            <div
              className="offer-card has-bg-image img-holder"
              style={offerBanner2}
            >
              <p className="card-subtitle">Treats & Grooming</p>

              <h3 className="h3 card-title">
                Spoil your true <span className="span">love</span>
              </h3>

              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </li>

          <li>
            <div
              className="offer-card has-bg-image img-holder"
              style={offerBanner3}
            >
              <p className="card-subtitle">Our Brand You Will Love</p>

              <h3 className="h3 card-title">
                New in this <span className="span">year</span>
              </h3>

              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Offers;
