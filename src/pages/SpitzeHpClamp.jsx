import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { IoIosArrowForward } from 'react-icons/io';
export default function SpitzeHpClamp() {
  return (
    <>
      <Header home={true} />
      <main className="content-wrapper">
        <section className="overlay ovl-prod"></section>
        <section className="row-1 spitze_hp_clamp">
          <section className="row-1-product">
            <h1 className="row-1-about-company">Spitze HP Clamp</h1>
          </section>
        </section>
        <section className="product-carbontech">
          <img src="../../public/carbontech.png" className="logo-carbontech" />
        </section>
        <section className="product-indepth">
          <img
            src="../../public/SPITZE-HP-CLAMP.jpg"
            className="product-indepth-pic"
          />
          <section className="product-detail-product">
            <h1>ABOUT SPIZE HP CLAMP</h1>
            <p>
              The Spitze HP clamp is engineered and manufactured in accordance
              with ASME VIII Div 1 for the temporary repair of live
              high-pressure leaks without having to shut down or isolate the
              system. The low-profile standoff height of the clamp is intended
              for a composite overwrap using any of the Revowrap systems for
              long terms repairs. The Spitze HP clamp is resistant to the harsh
              chemical environment prevalent in the oil, gas and petrochemical
              industries. The Spitze HP clamp is engineered to operate in
              working temperatures from -60°C to 380°C and has a pressure rating
              of up to 200 Bar with a maximum application pressure of 150Bar.
              Please refer to the maximum and minimum service temperatures of
              the various Spitze bungs as illustrated in the SPITZE BUNG column
              below. The installation of the Spitze HP clamp is non-invasive and
              may be applied to live piping systems without shutting down for
              the repair on hole sizes up to 25mm Diameter. Spitze HP clamp may
              be applied to piping sizes up to 56”, and may be installed on most
              substrates and is suitable for Subsea application.
            </p>
          </section>
        </section>
        <section className="product-table-wrapper">
          <img
            src="../../public/spize-hp-clamp-table.png"
            className="product-table"
          />
        </section>
        <section className="product-button-wrapper">
          <a
            className="product-indepth-button"
            href="https://revowrap.com/product/spitze-hp-clamp/"
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
