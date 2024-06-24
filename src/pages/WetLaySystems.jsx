import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
export default function WetLaySystems() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Header home={true} />
      <main className="content-wrapper">
        <section className="overlay"></section>
        <section className="row-1">
          <section className="row-1-product">
            <h1 className="row-1-about-company">Wet Lay Systems</h1>
          </section>
        </section>
        <section className="product-row-2">
          <section className="product-row-2-1">
            <Link
              to="/revowrap-225"
              className="product-row-2-1-el"
              onClick={scrollToTop}
            >
              <img src="./product-1.jpg" className="product-el" />
              <section className="product-row-2-1-el-decoration">
                <h1>REVOWRAP 225</h1>
                <section className="product-row-2-1-decoration-wrap">
                  <section className="product-row-2-1-el-circle"></section>
                  <section className="product-row-2-1-el-rectangle"></section>
                </section>
                <p>
                  The “Revowrap225®” composite systems are engineered to operate
                  in working temperatures from - 50°C to 233°C.
                </p>
              </section>
            </Link>
            <Link
              to="/revowrap-185"
              className="product-row-2-2-el"
              onClick={scrollToTop}
            >
              <img src="./product-2.jpg" className="product-el" />
              <section className="product-row-2-2-el-decoration">
                <h1>REVOWRAP 185</h1>
                <section className="product-row-2-1-decoration-wrap">
                  <section className="product-row-2-1-el-circle"></section>
                  <section className="product-row-2-1-el-rectangle"></section>
                </section>
                <p>
                  The "Revowrap185®" composite systems are engineered to operate
                  in working temperatures from - 50°C to 253°C.
                </p>
              </section>
            </Link>
          </section>
          <section className="product-row-2-1">
            <section className="product-row-2-1">
              <Link to="/revowrap-110" className="product-row-2-3-el">
                <img
                  src="./product-3.jpg"
                  className="product-el"
                  onClick={scrollToTop}
                />
                <section className="product-row-2-3-el-decoration">
                  <h1>REVOWRAP 110</h1>
                  <section className="product-row-2-1-decoration-wrap">
                    <section className="product-row-2-1-el-circle"></section>
                    <section className="product-row-2-1-el-rectangle"></section>
                  </section>
                  <p>
                    The "Revowrap110®" composite systems are engineered to
                    operate in working temperatures from - 50°C to 109°C.
                  </p>
                </section>
              </Link>
              <Link
                to="/revowrap-80"
                className="product-row-2-4-el"
                onClick={scrollToTop}
              >
                <img src="./product-4.jpg" className="product-el" />
                <section className="product-row-2-4-el-decoration">
                  <h1>REVOWRAP 80</h1>
                  <section className="product-row-2-1-decoration-wrap">
                    <section className="product-row-2-1-el-circle"></section>
                    <section className="product-row-2-1-el-rectangle"></section>
                  </section>
                  <p>
                    The “Revowrap80®” composite systems are engineered to
                    operate in working temperatures from -50°C to 84°C and bares
                    no pressure limitations.{' '}
                  </p>
                </section>
              </Link>
            </section>
          </section>
          <section className="product-carbontech">
            <img src="./carbontech.png" className="logo-carbontech" />
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
