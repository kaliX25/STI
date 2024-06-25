import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { IoIosArrowForward } from 'react-icons/io';
export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });
  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
  };
  const handleEmailChange = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };
  const handleContactChange = (e) => {
    setFormData({
      ...formData,
      contact: e.target.value,
    });
  };
  const handleMessageChange = (e) => {
    setFormData({
      ...formData,
      message: e.target.value,
    });
  };
  return (
    <>
      <Header home={true} />
      <main className="content-wrapper">
        <section className="overlay ovl-prod"></section>
        <section className="row-1 contactus">
          <section className="row-1-product">
            <h1 className="row-1-about-company">Contact</h1>
          </section>
        </section>
        <section className="contact-wrapper contact-us-wrapper">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                // width="700"
                // height="650"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Ruko+spectra+Jl.+bulevard+jalur+sutera+Blok+23B+no.07+Serpong+utara+Alam+sutera+-++Tangerang+-+Banten+Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
              {/* <a href="https://online.stopwatch-timer.net/">timer for kids</a> */}
              <br />
              {/* <a href="https://textcaseconvert.com/"></a> */}
              <br />
              {/* <a href="https://www.mapembed.net">google maps embed</a> */}
            </div>
          </div>
          <form className="contact-wrap-2">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleNameChange}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleEmailChange}
              required
            />
            <input
              type="tel"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleContactChange}
              required
            />
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={handleMessageChange}
              required
            />
          </form>
        </section>
        <section className="contact-submit-button-wrapper">
          <button className="contact-submit-button">Submit</button>
        </section>
      </main>
      <Footer />
    </>
  );
}
