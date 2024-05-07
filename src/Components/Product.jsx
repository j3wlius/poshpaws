import React from 'react';
import { IoStarOutline, IoBagAddOutline } from 'react-icons/io5';
import productOne from '../images/product-1.jpg';
import productOne0 from '../images/product-1_0.jpg';
import productTwo from '../images/product-2.jpg';
import productTwo0 from '../images/product-2_0.jpg';
import productThree from '../images/product-3.jpg';
import productThree0 from '../images/product-3_0.jpg';
import productFour from '../images/product-4.jpg';
import productFour0 from '../images/product-4_0.jpg';
import productFive from '../images/product-5.jpg';
import productFive0 from '../images/product-5_0.jpg';
import productSix from '../images/product-6.jpg';
import productSix0 from '../images/product-6_0.jpg';
import productSeven from '../images/product-7.jpg';
import productSeven0 from '../images/product-7_0.jpg';
import productEight from '../images/product-8.jpg';
import productEight0 from '../images/product-8_0.jpg';


const Product = () => {
  return (
    <section className="section product" id="shop" aria-label="product">
      <div className="container">
        <h2 className="h2 section-title">
          <span className="span">Best</span> Seller
        </h2>

        <ul className="grid-list">
          <li>
            <div className="product-card">
              <div
                className="card-banner img-holder"
                style={{ '--width': 360, '--height': 360 }}
              >
                <img
                  src={productOne}
                  width="360"
                  height="360"
                  loading="lazy"
                  alt="Commodo leo sed porta"
                  className="img-cover default"
                />
                <img
                  src={productOne0}
                  width="360"
                  height="360"
                  loading="lazy"
                  alt="Commodo leo sed porta"
                  className="img-cover hover"
                />

                <button
                  className="card-action-btn"
                  aria-label="add to card"
                  title="Add To Card"
                >
                  <IoBagAddOutline class='icon' aria-hidden="true" />
                </button>
              </div>

              <div className="card-content">
                <div className="wrapper">
                  <div className="rating-wrapper">
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                  </div>

                  <span className="span">(1)</span>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Commodo leo sed porta
                  </a>
                </h3>

                <data className="card-price" value="15">
                  $15.00
                </data>
              </div>
            </div>
          </li>

          <li>
            <div className="product-card">
              <div
                className="card-banner img-holder"
                style={{ '--width': 360, '--height': 360 }}
              >
                <img
                  src={productTwo}
                  width="360"
                  height="360"
                  loading="lazy"
                  alt="Purus consequat congue sit"
                  className="img-cover default"
                />
                <img
                  src={productTwo0}
                  width="360"
                  height="360"
                  loading="lazy"
                  alt="Purus consequat congue sit"
                  className="img-cover hover"
                />

                <button
                  className="card-action-btn"
                  aria-label="add to card"
                  title="Add To Card"
                >
                  <IoBagAddOutline class='icon' aria-hidden="true" />
                </button>
              </div>

              <div className="card-content">
                <div className="wrapper">
                  <div className="rating-wrapper gray">
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                  </div>

                  <span className="span">(0)</span>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Purus consequat congue sit
                  </a>
                </h3>

                <data className="card-price" value="45">
                  $45.00
                </data>
              </div>
            </div>
          </li>

          <li>
            <div className="product-card">
              <div
                className="card-banner img-holder"
                style={{ '--width': 360, '--height': 360 }}
              >
                <img
                  src={productThree}
                  width="360"
                  height="360"
                  loading="lazy"
                  alt="Morbi vel arcu scelerisque"
                  className="img-cover default"
                />
                <img
                  src={productThree0}
                  width="360"
                  height="360"
                  loading="lazy"
                  alt="Morbi vel arcu scelerisque"
                  className="img-cover hover"
                />

                <button
                  className="card-action-btn"
                  aria-label="add to card"
                  title="Add To Card"
                >
                  <IoBagAddOutline class='icon' aria-hidden="true" />
                </button>
              </div>

              <div className="card-content">
                <div className="wrapper">
                  <div className="rating-wrapper gray">
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                  </div>

                  <span className="span">(0)</span>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Morbi vel arcu scelerisque
                  </a>
                </h3>

                <data className="card-price" value="45">
                  $45.00
                </data>
              </div>
            </div>
          </li>

          <li>
            <div className="product-card">
              <div
                className="card-banner img-holder"
                style={{ '--width': 360, '--height': 360 }}
              >
                <img
                  src={productFour}
                  width="360"
                  height="360"
                  loading="lazy"
                  alt="Morbi vel arcu scelerisque"
                  className="img-cover default"
                />
                <img
                  src={productFour0}
                  width="360"
                  height="360"
                  loading="lazy"
                  alt="Morbi vel arcu scelerisque"
                  className="img-cover hover"
                />

                <button
                  className="card-action-btn"
                  aria-label="add to card"
                  title="Add To Card"
                >
                  <IoBagAddOutline class='icon' aria-hidden="true" />
                </button>
              </div>

              <div className="card-content">
                <div className="wrapper">
                  <div className="rating-wrapper gray">
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                  </div>

                  <span className="span">(0)</span>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Morbi vel arcu scelerisque
                  </a>
                </h3>

                <data className="card-price" value="49">
                  $49.00
                </data>
              </div>
            </div>
          </li>

          <li>
            <div className="product-card">
              <div
                className="card-banner img-holder"
                style={{ '--width': 360, '--height': 360 }}
              >
                <img
                  src={productFive}
                  width="360"
                  height="360"
                  loading="lazy"
                  alt="Morbi vel arcu scelerisque"
                  className="img-cover default"
                />
                <img
                  src={productFive0}
                  width="360"
                  height="360"
                  loading="lazy"
                  alt="Morbi vel arcu scelerisque"
                  className="img-cover hover"
                />

                <button
                  className="card-action-btn"
                  aria-label="add to card"
                  title="Add To Card"
                >
                  <IoBagAddOutline class='icon' aria-hidden="true" />
                </button>
              </div>

              <div className="card-content">
                <div className="wrapper">
                  <div className="rating-wrapper gray">
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                  </div>

                  <span className="span">(0)</span>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Morbi vel arcu scelerisque
                  </a>
                </h3>

                <data className="card-price" value="85">
                  $85.00
                </data>
              </div>
            </div>
          </li>

          <li>
            <div className="product-card">
              <div
                className="card-banner img-holder"
                style={{ '--width': 360, '--height': 360 }}
              >
                <img
                  src={productSix}
                  width="360"
                  height="360"
                  loading="lazy"
                  alt="Nam justo libero porta ege"
                  className="img-cover default"
                />
                <img
                  src={productSix0}
                  width="360"
                  height="360"
                  loading="lazy"
                  alt="Nam justo libero porta ege"
                  className="img-cover hover"
                />

                <button
                  className="card-action-btn"
                  aria-label="add to card"
                  title="Add To Card"
                >
                  <IoBagAddOutline class='icon' aria-hidden="true" />
                </button>
              </div>

              <div className="card-content">
                <div className="wrapper">
                  <div className="rating-wrapper gray">
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                  </div>

                  <span className="span">(0)</span>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Nam justo libero porta ege
                  </a>
                </h3>

                <data className="card-price" value="85">
                  $85.00
                </data>
              </div>
            </div>
          </li>

          <li>
            <div className="product-card">
              <div
                className="card-banner img-holder"
                style={{ '--width': 360, '--height': 360 }}
              >
                <img
                  src={productSeven}
                  width="360"
                  height="360"
                  loading="lazy"
                  alt="Nam justo libero porta ege"
                  className="img-cover default"
                />
                <img
                  src={productSeven0}
                  width="360"
                  height="360"
                  loading="lazy"
                  alt="Nam justo libero porta ege"
                  className="img-cover hover"
                />

                <button
                  className="card-action-btn"
                  aria-label="add to card"
                  title="Add To Card"
                >
                  <IoBagAddOutline class='icon' aria-hidden="true" />
                </button>
              </div>

              <div className="card-content">
                <div className="wrapper">
                  <div className="rating-wrapper gray">
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                  </div>

                  <span className="span">(0)</span>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Nam justo libero porta ege
                  </a>
                </h3>

                <data className="card-price" value="85">
                  $85.00
                </data>
              </div>
            </div>
          </li>

          <li>
            <div className="product-card">
              <div
                className="card-banner img-holder"
                style={{ '--width': 360, '--height': 360 }}
              >
                <img
                  src={productEight}
                  width="360"
                  height="360"
                  loading="lazy"
                  alt="Etiam commodo leo sed"
                  className="img-cover default"
                />
                <img
                  src={productEight0}
                  width="360"
                  height="360"
                  loading="lazy"
                  alt="Etiam commodo leo sed"
                  className="img-cover hover"
                />

                <button
                  className="card-action-btn"
                  aria-label="add to card"
                  title="Add To Card"
                >
                  <IoBagAddOutline class='icon' aria-hidden="true" />
                </button>
              </div>

              <div className="card-content">
                <div className="wrapper">
                  <div className="rating-wrapper gray">
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                    <IoStarOutline aria-hidden="true" />
                  </div>

                  <span className="span">(0)</span>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Etiam commodo leo sed
                  </a>
                </h3>

                <data className="card-price" value="55">
                  $55.00
                </data>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Product;
