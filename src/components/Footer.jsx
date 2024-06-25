import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer>
      <section className="footer-wrap-1">
        <section className="footer-sub-1">
          <img src="../../public/icon.png" className="footer-icon" />
          <section className="sub-1-wrap">
            <a
              href="https://wa.me/+8127600736"
              className="contact-anchor"
              target="_blank"
            >
              <img src="../../public/whatsapp.png" className="footer-sosmed" />
              +62 812-7600-736
            </a>
          </section>
          <section className="sub-1-wrap">
            <a href="tel:+76136147" className="contact-anchor" target="_blank">
              <img src="../../public/telephone.png" className="footer-sosmed" />
              +62 812-7600-736
            </a>
          </section>
        </section>
        <section className="footer-sub-2">
          <section className="footer-sub-2-col-1">
            <h1 className="footer-sub-2-title">Company</h1>
            <ul className="quick_link">
              <Link to="/home" className="footer-anchor" onClick={scrollToTop}>
                Home
              </Link>
              <Link to="/about" className="footer-anchor" onClick={scrollToTop}>
                About
              </Link>
              <Link
                to="/contact"
                className="footer-anchor"
                onClick={scrollToTop}
              >
                Contact
              </Link>
            </ul>
          </section>
          <section className="footer-sub-2-col-2">
            <h1 className="footer-sub-2-title">Products</h1>
            <ul className="footer-product">
              <Link
                to="/wet_lay_systems"
                className="footer-anchor"
                onClick={scrollToTop}
              >
                Wet Lay Systems
              </Link>
              <Link
                to="/post_cure"
                className="footer-anchor"
                onClick={scrollToTop}
              >
                Post Cure
              </Link>
              <Link
                to="/leak_arrestors"
                className="footer-anchor"
                onClick={scrollToTop}
              >
                Leak Arrestors
              </Link>
            </ul>
          </section>
          <section className="footer-sub-2-col-2">
            <br />
            <br />
            <ul className="footer-product">
              <Link to="/fluid" className="footer-anchor" onClick={scrollToTop}>
                Fluid
              </Link>
              <Link
                to="/primer_2_in_1"
                className="footer-anchor"
                onClick={scrollToTop}
              >
                Primer 2-in-1
              </Link>
              <Link
                to="/primer_zinc"
                className="footer-anchor"
                onClick={scrollToTop}
              >
                Primer Zinc
              </Link>
            </ul>
          </section>
        </section>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Ruko+spectra+Jl.+bulevard+jalur+sutera+Blok+23B+no.07+Serpong+utara+Alam+sutera+-++Tangerang+-+Banten+Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="footer-wrap-2">
        <p>@2024 PT. Sedulur Teknologi Indonesia, All Right Reserved.</p>
        <section className="sosmed-wrapper">
          <img src="../../public/instagram.png" className="footer-sosmed-2" />
          <img src="../../public/linkedin.png" className="footer-sosmed-2" />
        </section>
      </section>
    </footer>
  );
}
