import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Carbontech() {
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
          <h1 className="row-1-about-company">Carbontech</h1>
        </section>
        <section className="about-row2"></section>
      </main>
      <Footer />
    </>
  );
}
