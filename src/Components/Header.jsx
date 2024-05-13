import React, { useEffect, useState } from 'react';
import {
  IoMenuOutline,
  IoCloseOutline,
  IoSearchOutline,
  IoPersonOutline,
  IoBagHandleOutline,
} from 'react-icons/io5';

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsActive(!isActive); // Toggle the state
  };

  const handleLinkClick = () => {
    setIsActive(false); // Close the navbar
  };

  return (
    <header className={`header ${isScroll ? 'active' : ''}`}>
      <div className="container">
        <button
          className="nav-toggle-btn"
          aria-label="toggle manu"
          onClick={handleClick}
        >
          <IoMenuOutline className="menu-icon icon" aria-hidden="true" />
          <IoCloseOutline aria-label="true" className="close-icon" />
        </button>

        <a href="#" className="logo">
          PoshPaws
        </a>

        <nav className={`navbar ${isActive ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link" onClick={handleLinkClick}>
                Home
              </a>
            </li>

            <li className="navbar-item">
              <a href="#shop" className="navbar-link" onClick={handleLinkClick}>
                Shop
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link" onClick={handleLinkClick}>
                Collections
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link" onClick={handleLinkClick}>
                Blogs
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>

          <a href="#" className="navbar-action-btn" onClick={handleLinkClick}>
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
