import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowForward,
} from 'react-icons/io';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/custom-swiper-bullet.css';
// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// import React from 'react';
// import MyComponent from '../components/MyComponent';
import Marquee from 'react-fast-marquee';

import 'swiper/css/scrollbar';
export default function HomePage() {
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
          <h2 className="row-1-company-name">
            PT. SEDULUR <span>TEKNOLOGI</span> INDONESIA
          </h2>
          <h1 className="row-1-cta">
            Secure Your Oil <br />
            Pipelines
          </h1>
          <p className="row-1-detail">
            We spealize in wrappinig oil pipes to ensure their safety and
            longevity. Protect
            <br /> your infrastructure with our expertise.
          </p>
          <Link to="/contact" className="row-1-product-btn">
            Contact Us
          </Link>
        </section>
        <section className="row-2">
          <img
            src="../../public/home-2-ex.png"
            alt="sedulur sedulur"
            className="row-2-pic"
          />
          <section className="row-2-detail">
            <section className="row-2-subtitle-wrapper">
              <h1 className="row-2-subtitle">Who are</h1>
              <h1 className="row-2-subtitle">We?</h1>
            </section>
            <p className="row-2-detail-content">
              Founded in 2024, PT. Sedulur Teknologi Indonesia has swiftly
              established itself as a leading provider of innovative engineering
              solutions, specializing in advanced composite technologies and
              corrosion protection.
            </p>
            <Link to="/about" className="learn-more-btn" onClick={scrollToTop}>
              Learn More <IoIosArrowForward />
            </Link>
            <section className="row-2-decoration">
              <section className="row-2-decoration-sub"></section>
            </section>
          </section>
        </section>
        <h1></h1>
        <section className="row-2_5">
          <h1>Key Industries</h1>
          <p>
            No matter the industry, our product provides solutions that drive
            success in every sector.
          </p>
        </section>
        <section className="row-3">
          {/* <h1 className="row-3-title">Key Industries</h1> */}
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide className="ss1">
              <section className="row-3-overlay"></section>
              <img
                src="../../public/home-3_LE_auto_x2.jpg"
                className="row-3-pic"
              />
              <section className="row-3-slide-detail">
                <h1 className="row-3-slide-detail-title">
                  TRANSMISSION PIPELINES
                </h1>
                <section className="row-3-slide-decoration">
                  <section className="row-3-circle">
                    <section className="row-3-circle-sub"></section>
                  </section>
                  <section className="row-3-line"></section>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide className="ss2">
              <section className="row-3-overlay"></section>
              <img
                src="../../public/home-5_LE_auto_x2.jpg"
                className="row-3-pic"
              />
              <section className="row-3-slide-detail">
                <h1 className="row-3-slide-detail-title">OFFSHORE</h1>
                <section className="row-3-slide-decoration">
                  <section className="row-3-circle"></section>
                  <section className="row-3-line"></section>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide className="ss3">
              <section className="row-3-overlay"></section>
              <img
                src="../../public/home-4_LE_auto_x2.jpg"
                className="row-3-pic"
              />
              <section className="row-3-slide-detail">
                <h1 className="row-3-slide-detail-title">ONSHORE</h1>
                <section className="row-3-slide-decoration">
                  <section className="row-3-circle"></section>
                  <section className="row-3-line"></section>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide className="ss4">
              <section className="row-3-overlay"></section>
              <img src="../../public/home-6.jpg" className="row-3-pic" />
              <section className="row-3-slide-detail">
                <h1 className="row-3-slide-detail-title">TANKS</h1>
                <section className="row-3-slide-decoration">
                  <section className="row-3-circle"></section>
                  <section className="row-3-line"></section>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide className="ss5">
              <section className="row-3-overlay"></section>
              <img src="../../public/home-7.jpg" className="row-3-pic" />
              <section className="row-3-slide-detail">
                <h1 className="row-3-slide-detail-title">CHEMICAL</h1>
                <section className="row-3-slide-decoration">
                  <section className="row-3-circle"></section>
                  <section className="row-3-line"></section>
                </section>
              </section>
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="row-4">
          <section className="row-4-sub-1">
            <h1 className="row-4-title">
              “Trusted by
              <br />
              leading companies
              <br />
              across various
              <br />
              industries”
            </h1>
            <img
              src="../../public/icon.png"
              alt="Logo PT. Sedulur Teknologi Indonesia"
              className="row-4-icon"
            />
          </section>
          <section className="row-4-sub-2">
            <Marquee className="marquee" speed={200}>
              <a href="https://www.pheonwj-pertamina.com/" target="_blank">
                <img
                  src="../../public/client-1.png"
                  className="icon-marquee-1"
                />
              </a>
              <a href="https://www.bv.com/intl/" target="_blank">
                <img
                  src="../../public/client-2.png"
                  className="icon-marquee-2"
                />
              </a>
              <a href="https://phr.pertamina.com/" target="_blank">
                <img
                  src="../../public/client-3.png"
                  className="icon-marquee-3"
                />
              </a>
              <a href="https://ptfi.co.id/" target="_blank">
                <img
                  src="../../public/client-4.png"
                  className="icon-marquee-4"
                />
              </a>
              <a href="https://phi.pertamina.com/" target="_blank">
                <img
                  src="../../public/client-5.png"
                  className="icon-marquee-5"
                />
              </a>
              <a href="https://www.chandra-asri.com/" target="_blank">
                <img
                  src="../../public/client-6.png"
                  className="icon-marquee-6"
                />
              </a>
            </Marquee>
          </section>
        </section>
        <section className="row-5">
          <section className="row-5-sub">
            <p className="row-5-title">Get In Touch!</p>
            <section className="row-5-sub-1">
              <Link
                to="/contact"
                className="row-5-btn cntc"
                onClick={scrollToTop}
              >
                Contact <IoIosArrowForward className="arrow_forward" />
              </Link>
              <a
                className="row-5-btn prdct"
                href="https://www.google.com/maps?ll=-6.230622,106.659414&z=13&t=m&hl=id-ID&gl=US&mapclient=embed&q=Jl.+Jalur+Sutera+No.23b+RT.002/RW.006,+Panunggangan+Tim.+Kec.+Pinang+Kota+Tangerang+Selatan,+Banten+15143"
                target="_blank"
              >
                Find Us <IoIosArrowForward className="arrow_forward" />
              </a>
            </section>
          </section>
          <section className="row-5-overlay"></section>
        </section>
      </main>
      <Footer />
    </>
  );
}
