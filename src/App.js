import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { IoArrowUp } from 'react-icons/io5';

const App = () => {
  const [isScroll, setIsScroll] = useState(false);
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

  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <a
        href="#top"
        className={`back-top-btn ${isScroll ? 'active' : ''}`}
        aria-label="back to top"
      >
        <IoArrowUp className="icon" aria-hidden="true" />
      </a>
    </div>
  );
};

export default App;
