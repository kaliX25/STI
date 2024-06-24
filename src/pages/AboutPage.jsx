import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function AboutPage() {
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
          <h2 className="row-1-about-title">About</h2>
          <h1 className="row-1-about-company">
            PT. SEDULUR <span>TEKNOLOGI</span>
          </h1>
          <h1 className="row-1-about-company-indo">INDONESIA</h1>
        </section>
        <section className="about-row2">
          <section className="about-row2-img-wrapper" data-aos="fade-right">
            <img
              src="../../public/home-2-ex.png"
              className="about-row2-pic1"
              data-aos="fade-up"
            />
          </section>
          <section className="about-row2-detail" data-aos="fade-up">
            <h1>Established in 2024</h1>
            <p>
              PT. Sedulur Teknologi Indonesia has swiftly established itself as
              a leading provider of innovative engineering solutions,
              specializing in advanced composite technologies and corrosion
              protection. Our commitment and dedication drive us to deliver
              superior products and services that enhance the longevity and
              performance of critical assets in various industries.
            </p>
          </section>
        </section>
        <section className="about-row2">
          <section className="about-row3-detail" data-aos="fade-up">
            <h1>Composite Technology</h1>
            <p>
              We are proud to provide the Revowrap® system from CARBONTECH, a
              state-of-the-art solution for the emergency repair of critical
              assets. This advanced composite technology, backed by precise
              engineering, offers tailored solutions for pipe wraps and other
              applications. The Revowrap® system is versatile and applicable for
              wet lay systems, post cure processes, and leak arrestors,
              reinforcing our reputation for quality in every projects.
            </p>
          </section>
          <section className="about-row3-img-wrapper" data-aos="fade-right">
            <img
              src="../../public/REVOWRAP-225.png"
              className="about-carbontech"
              data-aos="fade-up"
            />
          </section>
        </section>
        <section className="about-row2">
          <section className="about-row2-img-wrapper" data-aos="fade-right">
            <img
              src="../../public/nc-item.jpg"
              className="about-row2-pic2"
              data-aos="fade-up"
            />
          </section>
          <section className="about-row2-detail" data-aos="fade-up">
            <h1>Corrosion Protector</h1>
            <p>
              Additionally, we are proud to offer the nC Corrosion Passivator, a
              revolutionary product that enables efficient and cost-effective
              treatment of seagoing vessel ballast tanks against corrosion
              without the need for sandblasting. This solution allows for the
              treatment of up to 1200 cubic meters of tank capacity per day,
              significantly reducing labor and health risks while enhancing
              operational efficiency.
            </p>
          </section>
        </section>
        <section className="about-standards">
          <section className="about-standards-picture-wrap">
            <section className="about-row2-circle">
              <img
                src="../../public/asme.png"
                className="circle-logo"
                data-aos="fade-left"
              />
            </section>
            <section className="about-row2-circle">
              <img
                src="../../public/iso.png"
                className="circle-logo"
                data-aos="fade-right"
              />
            </section>
          </section>
          <section className="about-standards-detail" data-aos="fade-down">
            <h1>International Standards</h1>
            <p>
              At PT. Sedulur Teknologi Indonesia, we adhere to international
              standards such as ASME PCC-2 and ISO TS 24817, ensuring that our
              solutions meet the highest levels of safety, reliability, and
              sustainability. We adopt a customer-centric philosophy, tailoring
              our services to meet the unique needs of each client. Our
              relentless pursuit of innovation and excellence ensures that we
              continue to set new benchmarks in the industry.
            </p>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
