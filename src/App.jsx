import { useState } from 'react'
import './index.css'

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
      </main>
    </>
  )
}

export default App