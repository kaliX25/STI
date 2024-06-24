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
          <h1 className="row-1-about-company">Primer Zinc</h1>
        </section>
        <section className="product-indepth nC-product">
          <img src="./nC-item3.jpg" className="product-indepth-pic" />
          <section className="product-detail-product">
            <h1>ABOUT Primer Zinc</h1>
            <p>
              High-quality one-component Zinc Primer that protects against
              galvanic corrosion and is resistant to temperatures up to 180°C.
              Due to corrosive influences, the layer convert into a zinc oxide
              layer, providing active corrosion protection in case of light
              damage and scratches.
            </p>
            <h2>Important product features</h2>
            <ul className="nc-product_feature">
              <li>Extremely abrasion resistant due to chemical bonding.</li>
              <li>Remains active even after scratches or dents.</li>
              <li>Resistant to electric welding.</li>
            </ul>
          </section>
        </section>
        <section className="nc-product-detail_">
          <h2>Technical Information</h2>
          <section className="nc-product-detail_sub">
            <p>Suitable For</p>
            <ul>
              <li>New or blasted metal Sa1.</li>
              <li>Protect parts to be welded in.</li>
              <li>Surfaces exposed to heavy stress.</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Pretreatment</p>
            <ul>
              <li>Remove mud and loose rust or paint.</li>
              <li>Sand or blast metal to Sa1 roughness.</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Application method</p>
            <ul>
              <li>Brush, roller or spray.</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Layer thickness (WFT)</p>
            <ul>
              <li>50 micron</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Consumption</p>
            <ul>
              <li>Low consumption 230 gram/m2.</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Drying time</p>
            <ul>
              <li>Fast drying, repaintable after 15 minutes.</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Paintable</p>
            <ul>
              <li>Yes, perfect undercoat for all paint systems.</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Lifetime</p>
            <ul>
              <li>
                Long life span between 10 to 15 years. Up to 10 years in
                saltwater
              </li>
              <li>environments.</li>
            </ul>
          </section>
          <section className="nc-product-detail_sub">
            <p>Storage</p>
            <ul>
              <li>Storage between 5°C and 35°C.</li>
              <li>Store 1 year in tightly closed container.</li>
            </ul>
          </section>
        </section>
        <section className="product-button-wrapper">
          <a
            className="product-indepth-button"
            href="https://www.nc-protect.com/products/corrosion-passivation/corrosion-passivator-primer-zinc-c5/"
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
