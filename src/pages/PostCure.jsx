import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
export default function PostCure() {
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
            <h1 className="row-1-about-company">Post Cure</h1>
          </section>
        </section>
        <section className="product-row-2">
          <section className="product-row-2-1">
            <Link
              to="/revomat"
              className="product-row-2-1-el"
              onClick={scrollToTop}
            >
              <img src="./product-5.jpg" className="product-els" />
              <section className="product-row-2-1-el-decoration">
                <h1>Revomat</h1>
                <section className="product-row-2-1-decoration-wrap">
                  <section className="product-row-2-1-el-circle"></section>
                  <section className="product-row-2-1-el-rectangle"></section>
                </section>
                <p className="detail-product">
                  The Revomat® is a revolutionary intelligent post cure system
                  developed by our Carbontech engineers to safely and
                  efficiently provide the prescribed cure cycles for high
                  temperature on-site composite repairs.
                </p>
              </section>
            </Link>
          </section>
        </section>
        <section className="product-carbontech">
          <img src="./carbontech.png" className="logo-carbontech" />
        </section>
      </main>
      <Footer />
    </>
  );
}
