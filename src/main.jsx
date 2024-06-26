import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { BrowserRouter, Link } from 'react-router-dom';
import './styles/styles.css';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Link to="/contact" className="contact-navbar" onClick={scrollToTop}>
        <h2>@</h2>
      </Link>
    </BrowserRouter>
  </React.StrictMode>
);
