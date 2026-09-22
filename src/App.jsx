function App() {
  return (
    <div>
      <header>
        <nav>
          <h2>SHINE SYNDICATES</h2>

          <div>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home">
          <h1>MAKE YOUR CAR<br />SHINE.</h1>

          <p>
            Premium car washing and detailing
            for a cleaner, fresher ride.
          </p>

          <button>Book a Wash</button>
        </section>

        <section id="services">
          <h2>Our Services</h2>

          <div>
            <div>
              <h3>Basic Wash</h3>
              <p>Exterior wash and rinse.</p>
            </div>

            <div>
              <h3>Premium Wash</h3>
              <p>Complete exterior and interior clean.</p>
            </div>

            <div>
              <h3>Full Detail</h3>
              <p>Deep cleaning for your entire vehicle.</p>
            </div>
          </div>
        </section>

        <section id="about">
          <h2>About Shine Syndicates</h2>

          <p>
            We believe every car deserves to look its best.
            Shine Syndicates provides quality car care with
            attention to detail.
          </p>
        </section>

        <section id="contact">
          <h2>Ready to Shine?</h2>

          <p>Book your car wash today.</p>

          <button>Contact Us</button>
        </section>
      </main>

      <footer>
        <p>© 2026 Shine Syndicates. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App