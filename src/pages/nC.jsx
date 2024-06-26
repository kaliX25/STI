import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Nc() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease',
      once: true,
      mirror: false,
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
