import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Header({ home }) {
  const [scrollY, setScrollY] = React.useState(0);
  const [styles, setStyles] = React.useState({});
  const [anchorStyles, setAnchorStyles] = React.useState({});
  const [contactStyles, setContactStyles] = React.useState({});
  const [dropdown, setdropdown] = React.useState(0);
  const [carbontech_dd, setCarbontech_dd] = React.useState(0);
  const [nC_dd, setnC_dd] = React.useState(0);
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  const dropdownClicked = () => {
    setdropdown(!dropdown);
  };
  const dropdown1Clicked = () => {
    setCarbontech_dd(!carbontech_dd);
    setnC_dd(false);
  };
  const dropdown2Clicked = () => {
    setnC_dd(!nC_dd);
    setCarbontech_dd(false);
  };

  React.useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
    if (home) {
      if (scrollY > 800) {
        setStyles((prevStyle) => ({
          ...prevStyle,
          background: 'white',
          'box-shadow': '0 8px 24px 0 rgba(0, 0, 0, 0.1)',
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
        }));
        setAnchorStyles((prevStyles) => ({
          ...prevStyles,
          color: 'black',
        }));
        setContactStyles((prevStyles) => ({
          ...prevStyles,
          color: 'black',
          border: '0.1rem solid black',
        }));
      } else {
        setStyles((prevStyle) => ({
          ...prevStyle,
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          background: 'transparent',
          'box-shadow': 'none',
          'z-index': 99,
        }));
        setAnchorStyles((prevStyles) => ({
          ...prevStyles,
          color: 'white',
        }));
        setContactStyles((prevStyles) => ({
          ...prevStyles,
          color: 'white',
          border: '0.1rem solid white',
        }));
      }
    }
  }, [scrollY]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <header style={styles}>
      <section className="logo-wrapper">
        <Link to={'/home'} onClick={scrollToTop}>
          <img
            src="./icon.png"
            className="icon"
            alt="PT.SEDULUR TEKNOLOGI INDONESIA LOGO"
          />
        </Link>
      </section>
      <ul className="anchor-wrapper">
        <Link
          to={'/home'}
          className="anchor-el"
          style={anchorStyles}
          onClick={scrollToTop}
        >
          Home
        </Link>
        <Link
          to={'/about'}
          className="anchor-el"
          style={anchorStyles}
          onClick={scrollToTop}
        >
          About
        </Link>
        <section className="product-el">
          <a
            className="anchor-el"
            style={anchorStyles}
            onClick={dropdownClicked}
          >
            Products
            {!dropdown ? (
              <IoIosArrowDown
                color={scrollY > 600 ? 'black' : 'white'}
                className="arrow_down"
              />
            ) : (
              <IoIosArrowUp
                color={scrollY > 600 ? 'black' : 'white'}
                className="arrow_up"
              />
            )}
            {/* <IoIosArrowDown color={scrollY > 600 ? 'black' : 'white'} /> */}
          </a>
          {!dropdown ? (
            <></>
          ) : (
            <ul className="dropdown">
              <p onClick={dropdown1Clicked}>CARBONTECH</p>
              {carbontech_dd ? (
                <ul className="dropdown dr-sub">
                  <Link
                    to="/wet_lay_systems"
                    className="dropdown-el"
                    onClick={scrollToTop}
                  >
                    Wet Lay Systems
                  </Link>
                  <Link
                    to="/post_cure"
                    className="dropdown-el"
                    onClick={scrollToTop}
                  >
                    Post Cure
                  </Link>
                  <Link
                    to="/leak_arrestors"
                    className="dropdown-el"
                    onClick={scrollToTop}
                  >
                    Leak Arrestors
                  </Link>
                </ul>
              ) : (
                <></>
              )}
              <p onClick={dropdown2Clicked}>nC</p>
              {nC_dd ? (
                <ul className="dropdown dr-sub2">
                  <Link
                    to="/fluid"
                    className="dropdown-el"
                    onClick={scrollToTop}
                  >
                    Fluid
                  </Link>
                  <Link
                    to="/primer_2_in_1"
                    className="dropdown-el"
                    onClick={scrollToTop}
                  >
                    Primer 2-in-1
                  </Link>
                  <Link
                    to="/primer_zinc"
                    className="dropdown-el"
                    onClick={scrollToTop}
                  >
                    Primer Zinc
                  </Link>
                </ul>
              ) : (
                <></>
              )}
            </ul>
          )}
        </section>
      </ul>
      <section className="contact-button-wrapper">
        <Link
          to={'/contact'}
          className="contact-text"
          style={contactStyles}
          onClick={scrollToTop}
        >
          Contact
        </Link>
      </section>
    </header>
  );
}
Header.propTypes = {
  home: PropTypes.bool.isRequired,
};
