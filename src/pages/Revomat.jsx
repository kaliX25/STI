import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { IoIosArrowForward } from 'react-icons/io';
export default function Revowrap225() {
  return (
    <>
      <Header home={true} />
      <main className="content-wrapper">
        <section className="overlay ovl-prod"></section>
        <section className="row-1 revomat">
          <section className="row-1-product">
            <h1 className="row-1-about-company">Revomat</h1>
          </section>
        </section>
        <section className="product-carbontech">
          <img src="./carbontech.png" className="logo-carbontech" />
        </section>
        <section className="product-indepth">
          <img src="./REVOWRAP-80.jpg" className="product-indepth-pic" />
          <section className="product-detail-product">
            <h1>ABOUT REVOMAT</h1>
            <p>
              The Revomat® is a revolutionary intelligent post cure system
              developed by our Carbontech engineers to safely and efficiently
              provide the prescribed cure cycles for high temperature on-site
              composite repairs. The controller system monitors its own power
              output relative to pipe temperatures it will remain stable even if
              pipe temperatures fluctuate.Most wrap failures occur by either
              poor surface preparation, installation or inadequate curing of the
              repairs. ALL high temperature resin systems require very specific
              cure regimes in order to complete the cross-link phase of the
              specific epoxy system. This unlocks the best mechanical properties
              & chemical resistance performance of the laminate.
            </p>
          </section>
        </section>
        <section className="product-button-wrapper">
          <a
            className="product-indepth-button"
            href="https://revowrap.com/product/revomat/"
            target="_blank"
          >
            Learn More <IoIosArrowForward />
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
