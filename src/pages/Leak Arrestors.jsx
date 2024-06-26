import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
export default function LeakArrestors() {
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
            <h1 className="row-1-about-company">Leak Arrestors</h1>
          </section>
        </section>
        <section className="product-row-2">
          <section className="product-row-2-1">
            <Link
              to="/spitze-hp-clamp"
              className="product-row-2-1-el"
              onClick={scrollToTop}
            >
              <img src="./product-6.jpg" className="product-els" />
              <section className="product-row-2-1-el-decoration">
                <h1>Spitze HP Clamp</h1>
                <section className="product-row-2-1-decoration-wrap">
                  <section className="product-row-2-1-el-circle"></section>
                  <section className="product-row-2-1-el-rectangle"></section>
                </section>
                <p>
                  The Spitze HP clamp is engineered and manufactured in
                  accordance with ASME VIII Div 1 for the temporary repair of
                  live high-pressure leaks without having to shut down or
                  isolate the system.
                </p>
              </section>
            </Link>
            <Link
              to="/revostrap"
              className="product-row-2-2-el"
              onClick={scrollToTop}
            >
              <img src="./product-7.jpg" className="product-els" />
              <section className="product-row-2-2-el-decoration">
                <h1>Revostrap</h1>
                <section className="product-row-2-1-decoration-wrap">
                  <section className="product-row-2-1-el-circle"></section>
                  <section className="product-row-2-1-el-rectangle"></section>
                </section>
                <p>
                  Carbontech introduces the Revostrap smart system to our
                  arsenal to combat enduring site complications of leaking
                  defects.
                </p>
              </section>
            </Link>
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
