import { useState } from 'react'
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faShieldHalved,
  faClock,
  faCarSide,
  faPhone,
  faChevronDown,
  faStar
} from "@fortawesome/free-solid-svg-icons";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="navbar">
        <a href="#" className="logo">
          <span>SHINE</span> SYNDICATES
        </a>

        <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <a
            href="#booking"
            className="mobile-book-button"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
        </nav>

        <a href="#booking" className="book-button">
          Book Now
        </a>

        <button
          className={menuOpen ? 'menu-button active' : 'menu-button'}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <main>
          <section id="home" className="hero">
          <div className="hero-content">

            <p className="hero-label">PREMIUM CAR CARE</p>

            <h1>
              Premium Car
              <br />
              <span>Wash.</span>
            </h1>

            <p className="hero-description">
              Professional car washing and detailing with attention to every detail.
            </p>

            <div className="hero-buttons">
              <a href="#booking" className="hero-button primary">
                Book Your Wash
              </a>

              <a href="#services" className="hero-button secondary">
                Explore Services
              </a>
            </div>

          </div>
        </section>

        
<div className="scroll-transition">
  <div className="scroll-indicator">
    <span>SCROLL DOWN</span>
    <FontAwesomeIcon icon={faChevronDown} />
  </div>
</div>

<section id="services" className="services">

  <div className="trust-bar">
    <div className="trust-item">
      <span><FontAwesomeIcon icon={faGem} /></span>
      <p>Premium Car Care</p>
    </div>

    <div className="trust-item">
      <span><FontAwesomeIcon icon={faShieldHalved} /></span>
      <p>Quality Guaranteed</p>
    </div>

    <div className="trust-item">
      <span><FontAwesomeIcon icon={faPhone} /></span>
      <p>Mobile Service</p>
    </div>

    <div className="trust-item">
      <span><FontAwesomeIcon icon={faStar} /></span>
      <p>Attention To Detail</p>
    </div>
  </div>

  <div className="services-header">
    <p className="section-tag">PRICE LIST</p>
    <h2>Professional Detailing Packages</h2>
  </div>

  <div className="price-grid">

   <div className="price-card">
  <div className="price-image">
    <img src="/public/Car Detailing vs Car Wash_ Which One Does Your Car Really Need_ - Pro-Detailing.jpg" alt="Quick Services" />
    <div className="price-overlay"></div>
  </div>

  <div className="price-content">
    <h3>Quick Services</h3>
    <div className="price-row">
      <span>Full Wash & Vacuum</span>
      <strong>R300</strong>
    </div>
  </div>
</div>

<div className="price-card">
  <div className="price-image">
    <img src="/public/Transportation Stock Photos _ Download 7K+ Royalty-Free Images.jpg" alt="Detailing Packages" />
    <div className="price-overlay"></div>
  </div>

  <div className="price-content">
    <h3>Detailing Packages</h3>

    <div className="price-row"><span>Interior Detail</span><strong>R1,000</strong></div>
    <div className="price-row"><span>Exterior Detail</span><strong>R1,200</strong></div>
    <div className="price-row"><span>Full Detail</span><strong>R1,800</strong></div>
    <div className="price-row"><span>Showroom Package</span><strong>R2,500</strong></div>
  </div>
</div>

<div className="price-card">
  <div className="price-image">
    <img src="/public/5 Big Mistakes To Avoid When Cleaning Your Car.jpg" alt="Valet Packages" />
    <div className="price-overlay"></div>
  </div>

  <div className="price-content">
    <h3>Valet Packages</h3>

    <div className="price-row"><span>Mini Valet</span><strong>R500</strong></div>
    <div className="price-row"><span>Full Valet</span><strong>R1,000</strong></div>
    <div className="price-row"><span>Premium Valet</span><strong>R1,650</strong></div>
  </div>
</div>

<div className="price-card featured">
  <div className="price-image">
    <img src="/public/Download Free Vectors, Images, Photos & Videos _ Vecteezy.jpg" alt="Add-Ons" />
    <div className="price-overlay"></div>
  </div>

  <div className="price-content">
    <h3>Add-Ons</h3>

    <div className="price-row"><span>Engine Bay Clean</span><strong>R200</strong></div>
    <div className="price-row"><span>Headlight Restoration</span><strong>R250</strong></div>
    <div className="price-row"><span>Leather Conditioning</span><strong>R200</strong></div>
    <div className="price-row"><span>Pet Hair Removal</span><strong>R150</strong></div>
    <div className="price-row"><span>Odour / Smoke Removal</span><strong>R300</strong></div>
    <div className="price-row"><span>Ceramic (6–12 mo)</span><strong>R1,500</strong></div>
    <div className="price-row"><span>Ceramic (2–5 yr)</span><strong>R3,500</strong></div>
  </div>
</div>

<div className="price-card membership">
  <div className="price-image">
    <img src="/public/download.jpg" alt="Membership" />
    <div className="price-overlay"></div>
  </div>

  <div className="price-content">
    <h3>Membership</h3>

    <div className="price-row"><span>Monthly Wash Club (×4)</span><strong>R600/mo</strong></div>
    <div className="price-row"><span>Bi-Weekly Maintenance</span><strong>R1,200/mo</strong></div>
  </div>
</div>

  </div>

  <div className="mobile-banner">
    <div>
      <h3><FontAwesomeIcon icon={faPhone} /> Mobile Service — We Come To You</h3>
      <p>Mobile call-outs available across Johannesburg.</p>
    </div>

    <div className="yoco">YOCO Accepted</div>
  </div>

</section>

      </main>

    </>
  )
}

export default App