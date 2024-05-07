import React from 'react';
import categoryOne from '../images/category-1.jpg';
import categoryTwo from '../images/category-2.jpg';
import categoryThree from '../images/category-3.jpg';
import categoryFour from '../images/category-4.jpg';
import categoryFive from '../images/category-5.jpg';

const Category = () => {
  return (
    <section className="section category" aria-label="category">
      <div className="container">
        <h2 className="h2 section-title">
          <span className="span">Top</span> categories
        </h2>

        <ul className="has-scrollbar">
          <li className="scrollbar-item">
            <div className="category-card">
              <figure
                className="card-banner img-holder"
                style={{ '--width': 330, '--height': 300 }}
              >
                <img
                  src={categoryOne}
                  width="330"
                  height="300"
                  loading="lazy"
                  alt="Cat Food"
                  className="img-cover"
                />
              </figure>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Cat Food
                </a>
              </h3>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="category-card">
              <figure
                className="card-banner img-holder"
                style={{ '--width': 330, '--height': 300 }}
              >
                <img
                  src={categoryTwo}
                  width="330"
                  height="300"
                  loading="lazy"
                  alt="Cat Toys"
                  className="img-cover"
                />
              </figure>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Cat Toys
                </a>
              </h3>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="category-card">
              <figure
                className="card-banner img-holder"
                style={{ '--width': 330, '--height': 300 }}
              >
                <img
                  src={categoryThree}
                  width="330"
                  height="300"
                  loading="lazy"
                  alt="Dog Food"
                  className="img-cover"
                />
              </figure>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Dog Food
                </a>
              </h3>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="category-card">
              <figure
                className="card-banner img-holder"
                style={{ '--width': 330, '--height': 300 }}
              >
                <img
                  src={categoryFour}
                  width="330"
                  height="300"
                  loading="lazy"
                  alt="Dog Toys"
                  className="img-cover"
                />
              </figure>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Dog Toys
                </a>
              </h3>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="category-card">
              <figure
                className="card-banner img-holder"
                style={{ '--width': 330, '--height': 300 }}
              >
                <img
                  src={categoryFive}
                  width="330"
                  height="300"
                  loading="lazy"
                  alt="Dog Sumpplements"
                  className="img-cover"
                />
              </figure>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Dog Sumpplements
                </a>
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Category;
