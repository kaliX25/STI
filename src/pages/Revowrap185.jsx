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
        <section className="row-1 revowrap185">
          <section className="row-1-product">
            <h1 className="row-1-about-company">Revowrap 185</h1>
          </section>
        </section>
        <section className="product-carbontech">
          <img src="../../public/carbontech.png" className="logo-carbontech" />
        </section>
        <section className="product-indepth">
          <img
            src="../../public/REVOWRAP-225.png"
            className="product-indepth-pic"
          />
          <section className="product-detail-product">
            <h1>ABOUT REVOWRAP 185</h1>
            <p>
              Revowrap is an engineered composite solution used to restore
              damaged critical assets back to the original design specification
              of the equipment. Each repair is engineered using ASME Pcc2 or ISO
              TS 24817 engineering codes for High risk non-metallic repairs.
              Carbontech engineers have the technology to perform FEA (Finite
              element analysis) on both the damaged piping systems and the
              Revowrap composite repair system. Revowrap provides reinforcement
              of the piping in both the axial and hoop directions, and delivers
              uniform loading throughout the repair. The "Revowrap185®"
              composite systems are engineered to operate in working
              temperatures from - 50°C to 253°C. Our composite systems can be
              applied by hand lamination or by infusion methods and may be
              applied to live piping systems without shutting down for the
              repair. Revowrap may be applied to any pipe size, most substrates
              and almost any piping configuration including tanks, vessels,
              flanges, and other compromised structural assets.
            </p>
          </section>
        </section>
        <section className="product-table-wrapper">
          <img
            src="../../public/revowrap-185-table.png"
            className="product-table"
          />
        </section>
        <section className="product-button-wrapper">
          <a
            className="product-indepth-button"
            href="https://revowrap.com/product/revowrap-185/"
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
