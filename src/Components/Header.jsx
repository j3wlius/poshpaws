import React from 'react';
import {
  IoMenuOutline,
  IoCloseOutline,
  IoSearchOutline,
  IoPersonOutline,
  IoBagHandleOutline,
} from 'react-icons/io5';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <button className="nav-toggle-btn" aria-label="toggle manu">
          <IoMenuOutline className="menu-icon" aria-hidden="true" />
          <IoCloseOutline aria-label="true" className="close-icon" />
        </button>

        <a href="#" className="logo">
          PoshPaws
        </a>

        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link">
                Home
              </a>
            </li>

            <li className="navbar-item">
              <a href="#shop" className="navbar-link">
                Shop
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Collections
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Blogs
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Contact
              </a>
            </li>
          </ul>

          <a href="#" className="navbar-action-btn">
            Log In
          </a>
        </nav>

        <div className="header-actions">
          <button className="action-btn" aria-label="Search">
            <IoSearchOutline aria-hidden="true" />
          </button>

          <button className="action-btn user" aria-label="User">
            <IoPersonOutline aria-hidden="true" />
          </button>

          <button className="action-btn" aria-label="cart">
            <IoBagHandleOutline aria-hidden="true" />

            <span className="btn-badge">0</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
