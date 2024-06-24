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
        <section className="row-1 revostrap">
          <section className="row-1-product">
            <h1 className="row-1-about-company">Revostrap</h1>
          </section>
        </section>
        <section className="product-carbontech">
          <img src="../../public/carbontech.png" className="logo-carbontech" />
        </section>
        <section className="product-indepth">
          <img
            src="../../public/REVOSTRAP.png"
            className="product-indepth-pic"
          />
          <section className="product-detail-product">
            <h1>ABOUT REVOSTRAP</h1>
            <p>
              Carbontech introduces the Revostrap smart system to our arsenal to
              combat enduring site complications of leaking defects. It is not
              an industry secret that no composite repairs can be wrapped over
              active leaks. Revostrap smart systems is the answer! The Revostrap
              smart system is lightweight, cost effective and very simple to
              use, it is the strongest temporary leak sealing strapping device
              on the market.
            </p>
          </section>
        </section>
        <section className="product-button-wrapper">
          <a
            className="product-indepth-button"
            href="https://revowrap.com/product/revowrap-80/"
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
