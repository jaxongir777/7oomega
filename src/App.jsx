import React, { useState } from 'react';
import tel from './assets/iphone.png';
import img from './assets/img1.png';
import imgg from './assets/img.png';
import phone from './assets/iPhone(1).png';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false); 
  };

  return (
    <>
      {/* HEADER */}
      <header className='header'>
        <div className='container1'>
          <div className='header-container'>
            <h1 className='header-title'>Omega</h1>

            <ul className={`header-list ${open ? 'active' : ''}`}>
              <li className='header-item dropdown'>
                <a href="#" className='header-link' onClick={(e) => e.preventDefault()}>
                  Demos
                </a>

                <ul className='dropdown-menu'>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('feature1'); }}>
                      SaaS Landing
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('feature2'); }}>
                      Startup Landing
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('feature3'); }}>
                      App Landing
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }}>
                      Desktop Landing
                    </a>
                  </li>
                </ul>
              </li>

              <li className='header-item'>
                <a href="#" className='header-link' onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>
                  Pages
                </a>
              </li>

              <li className='header-item'>
                <a href="#" className='header-link' onClick={(e) => { e.preventDefault(); scrollToSection('feature2'); }}>
                  Support
                </a>
              </li>

              <button className='header-btn'>
                <a className='header-link-btn' href="#">Get this app</a>
              </button>
            </ul>

            <div className='burger' onClick={() => setOpen(!open)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>

      <section id="hero" className='hero'>
        <div className='container'>
          <div className='hero-container'>
            <img src={tel} alt="Phone" className='hero-img' />
            <div className='hero-item'>
              <h2 className='hero-title'>Travel the world & meet new friends.</h2>
              <p className='hero-text'>
                Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.
              </p>
              <form>
                <input type="email" placeholder='Email address' />
                <button type='submit'>I want to join</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className='section'>
        <div className='container'>
          <div className='section-container'>
            <ul className='section-list'>
              <li className='section-item'>
                <p className='section-text'>
                  “OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish. Everyone should try it!”
                </p>
              </li>
              <li className='section-item'>
                <p className='section-text'>
                  “OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish. Everyone should try it!”
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="feature1" className="feature">
        <div className="container">
          <div className="feature-container">

            <div className="feature-left">
              <h2 className="feature-title">
                Making trip is fun.<br />
                Travel with friends.
              </h2>

              <p className="feature-desc">
                Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.
              </p>

              <ul className="feature-list">
                <li className="feature-item">
                  <span className="feature-number">1</span>
                  <div>
                    <h4>Find your trip partner</h4>
                    <p>
                      With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.
                    </p>
                  </div>
                </li>

                <li className="feature-item">
                  <span className="feature-number">2</span>
                  <div>
                    <h4>Plan trip with easy steps</h4>
                    <p>
                      With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="feature-right">
              <img src={img} alt="App preview" />
            </div>

          </div>
        </div>
      </section>

      <section id="feature2" className="feature-section">
        <div className="feature-wrapper">
          <div className="feature-flex">

            <div className="feature-img-container">
              <img src={imgg} alt="App preview" />
            </div>

            <div className="feature-content">
              <h2 className="feature-heading">
                See the world & spend less always.
              </h2>

              <p className="feature-paragraph">
                Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="feature3" className="feature">
        <div className="container">
          <div className="feature-container">

            <div className="feature-left">
              <h2 className="feature-title">
                Improving your travel experience.
              </h2>

              <p className="feature-desc">
                Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.
              </p>
            </div>

            <div className="feature-right">
              <img src={phone} alt="App preview" />
            </div>

          </div>
        </div>
      </section>


      <footer id="footer" className="footer-section">
        <div className="footer-container">
          <h2 className="footer-title">Get the app now</h2>

          <p className="footer-text">
            Create custom landing pages with Omega that converts
            more visitors than any website.
          </p>

          <div className="footer-buttons">
            <a href="#" className="footer-btn footer-appstore">
              <span className="footer-icon"></span>
              <div className="footer-btn-text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </div>
            </a>

            <a href="#" className="footer-btn footer-googleplay">
              <span className="footer-icon">▶</span>
              <div className="footer-btn-text">
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
