import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { IoIosArrowForward } from 'react-icons/io';
import 'aos/dist/aos.css';
export default function Primer_2_in_1() {
  return (
    <>
      <Header home={true} />
      <main className="content-wrapper">
        <section className="overlay"></section>
        <section className="about row-1">
          <h1 className="row-1-about-company">Fluid - Float Coat</h1>
        </section>
        <section className="product-indepth nC-product">
          <img src="./nC-item.jpg" className="product-indepth-pic" />
          <section className="product-detail-product">
            <h1>ABOUT Fluid - Float Coat</h1>
            <p>
              Fluid (float coat) for difficult-to-reach areas and confined
              spaces. It doesn’t require blasting or chipping and ensures full
              coverage. Application options include floating or spraying.
              There’s no need for additional painting, and rRemains active for
              up to 15 years in fresh water and 5 to 8 years in salt water.
            </p>
            <h2>Important product features</h2>
            <ul className="nc-product_feature">
              <li>Specially formulated for ballast tanks, holds, and peaks,</li>
              <li>
                Suitable for both dry and damp surfaces. No heaters required.
              </li>
              <li>Free of VOCs, solvents, and heavy metals,</li>
              <li>Fast application via spraying or floating,</li>
              <li>Provides rust protection for up to 15 years.</li>
            </ul>
          </section>
        </section>
        <section className="nc-product-detail_">
          <h2>Technical Information</h2>
          <section className="nc-product-detail_sub">
            <p>Suitable For</p>
            <ul>
              <li>Corroded or water blasted metal.</li>
              <li>Enclosed spaces as peaks, bollards, ballast</li>
              <li>Water tanks, cofferdams, pipelines.</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Pretreatment</p>
            <ul>
              <li>Remove mud and loose rust or paint.</li>
              <li>Sanding or blasting not necessary.</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Application method</p>
            <ul>
              <li>Floating</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Layer thickness (WFT)</p>
            <ul>
              <li>500 micron</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Consumption</p>
            <ul>
              <li>Low consumption of 1l per m3, or 1l per 5m2</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Drying time</p>
            <ul>
              <li>
                Fast drying, ready for use after 4 hours. Fluid has wool grease
                as
              </li>
              <li>a carrier. The carrier dries out in weeks/months.</li>
              <li>
                Avoid contact with chemicals or soaps for the first 24 hours.
              </li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Paintable</p>
            <ul>
              <li>No</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Lifetime</p>
            <ul>
              <li>Remains active in fresh water for up to 15 years.</li>
              <li>Remains active in salt water for 5 to 8 years.</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Storage</p>
            <ul>
              <li>Storage between 0°C and 50°C</li>
              <li>Up to 15 years in well sealed</li>
              <li>packaging.</li>
            </ul>
          </section>
        </section>
        <section className="product-button-wrapper">
          <a
            className="product-indepth-button"
            href="https://www.nc-protect.com/products/corrosion-passivation/corrosion-passivator-fluid/"
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
