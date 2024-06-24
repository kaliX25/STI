import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOS from 'aos';
import { IoIosArrowForward } from 'react-icons/io';
import 'aos/dist/aos.css';
export default function Primer_2_in_1() {
  React.useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
  });
  return (
    <>
      <Header home={true} />
      <main className="content-wrapper">
        <section className="overlay"></section>
        <section className="about row-1">
          <h1 className="row-1-about-company">Primer 2-in-1</h1>
        </section>
        <section className="product-indepth nC-product">
          <img
            src="../../public/nC-item2.jpg"
            className="product-indepth-pic"
          />
          <section className="product-detail-product">
            <h1>ABOUT Primer 2-in-1</h1>
            <p>
              nC Corrosion Passivator – Primer 2-in-1 is developed to stop the
              corrosion process without the need for blasting, chipping or
              sanding. For corroded metal, with very strong creeping properties.
              It chemically bonds to the surface and forms a solid tie-coat for
              all types of 1- or 2-component coatings. Remains active for up to
              10 years, when painted over.
            </p>
            <h2>Important product features</h2>
            <ul className="nc-product_feature">
              <li>1-layer Direct-to-Rust solution</li>
              <li>Low consumption, covering up to 15m2 / L</li>
              <li>Fast-drying within 4-6 hours</li>
              <li>Offers powerful creeping action</li>
              <li>
                Compatible with both 1 and 2-component coatings for painting
                over.
              </li>
            </ul>
          </section>
        </section>
        <section className="nc-product-detail_">
          <h2>Technical Information</h2>
          <section className="nc-product-detail_sub">
            <p>Suitable For</p>
            <ul>
              <li>Corroded metal.</li>
              <li>Direct-to-rust.</li>
              <li>Hard-to-reach surfaces.</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Pretreatment</p>
            <ul>
              <li>
                Surface must be dry and free from grease Remove loose rust
              </li>
              <li>and coating.</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Application method</p>
            <ul>
              <li>Roller, brush, spray or floating.</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Layer thickness (WFT)</p>
            <ul>
              <li>Maximum 50 – 60 μm (very thin)</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Consumption</p>
            <ul>
              <li>Low consumption of 1 liter per 12 – 15 m2.</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Drying time</p>
            <ul>
              <li>Can be painted over after 4 (at 20°C) to 6 hours.</li>
              <li>Fully loadable after 24h.</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Overpaintable</p>
            <ul>
              <li>Yes</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Lifetime</p>
            <ul>
              <li>Up to 10 years, when painted over.</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Storage</p>
            <ul>
              <li>Storage between 5°C and 35°C.</li>
              <li>Shelf life 2 years.</li>
            </ul>
          </section>
        </section>
        <section className="product-button-wrapper">
          <a
            className="product-indepth-button"
            href="https://www.nc-protect.com/products/corrosion-passivation/corrosion-passivator-primer-2-in-1/"
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
