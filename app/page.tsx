import Link from "next/link";
export default function Home() {
  return (
    <>
      {/* Header */}
{/*       <header className="header">
    <div className="nav-container">
      <a href="/" className="logo">
        CalvinBall Technologies
      </a>
      <nav>
        <ul className="nav-menu">
          <li>
            <a href="/">Overview</a>
          </li>
          <li>
            <a href="#product">Product</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#experts">Experts</a>
          </li>
          <li>
            <a href="/careers">Career</a>
          </li>
        </ul>
      </nav>
      <a href="#waitlist" className="cta-button">
        Join The Waitlist
        <span>→</span>
      </a>
    </div>
      </header> */}
        <header className="header">
        <div className="nav-container">
          <Link href="/" className="logo">
            CalvinBall Technologies
          </Link>
          <nav>
            <ul className="nav-menu">
              <li>
                <Link href="/">Overview</Link>
              </li>
              <li>
                <a href="#product">Product</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#experts">Experts</a>
              </li>
              <li>
                <Link href="/careers">Career</Link>
              </li>
            </ul>
          </nav>
          <a href="#waitlist" className="cta-button">
            Join The Waitlist <span>→</span>
          </a>
        </div>
      </header>
      {/* Hero Section */}
      <section className="hero">
    <div className="hero-container">
      <h1>Meet KJ</h1>
      <h2 className="hero-subtitle">AI Super-Agent for Consumer Brands</h2>
      <p className="hero-description">
        Built by Industry Experts. Engineered for Business Results.
      </p>
      <a href="#waitlist" className="hero-cta">
        Join The Waitlist
        <span>→</span>
      </a>
    </div>
      </section>
      {/* Innovation Partners */}
      <section className="partners" id="product">
    <div className="partners-container">
      <h2>Our Innovation Partners</h2>
      <div className="partners-grid">
        <div className="partner-logo">Marico</div>
        <div className="partner-logo">Godrej</div>
        <div className="partner-logo">Concha y Toro</div>
        <div className="partner-logo">ITC</div>
        <div className="partner-logo">Unilever</div>
        <div className="partner-logo">LVMH</div>
        <div className="partner-logo">Colgate-Palmolive</div>
        <div className="partner-logo">Wings</div>
        <div className="partner-logo">Mayora</div>
      </div>
    </div>
      </section>
      {/* Testimonials */}
      <section className="testimonials" id="team">
    <div className="testimonials-container">
      <div className="testimonials-grid">
        <div className="testimonial">
          <p className="testimonial-text">
            KJ allows our team to focus more on strategy and critical
            decision-making, while routine tasks are streamlined. It has helped
            improve efficiency and create space for more high-value, creative
            work.
          </p>
          <div className="testimonial-author">Jessica Lo</div>
          <div className="testimonial-company">
            Vice President, Make Up For Ever (LVMH)
          </div>
        </div>
        <div className="testimonial">
          <p className="testimonial-text">
            The hard truth is that AI is useless without expert training.
            Vertical AI agents like Calvinball start with your business context
            already built in and thats the real shortcut here.
          </p>
          <div className="testimonial-author">Vikrant Shinde</div>
          <div className="testimonial-company">
            Director, Home Care Unilever
          </div>
        </div>
      </div>
    </div>
      </section>
      {/* Calvinballer Hubs */}
      <section className="hubs" id="experts">
    <div className="hubs-container">
      <h2>Calvinballer Hubs</h2>
      <div className="hubs-grid">
        <div className="hub">
          <div className="hub-name">New York</div>
        </div>
        <div className="hub">
          <div className="hub-name">London</div>
        </div>
        <div className="hub">
          <div className="hub-name">Singapore</div>
        </div>
        <div className="hub">
          <div className="hub-name">Bali</div>
        </div>
      </div>
    </div>
      </section>
      {/* Footer */}
      <footer className="footer">
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">CalvinBall Technologies</div>
        <a href="#waitlist" className="footer-cta">
          Join The Waitlist
          <span>→</span>
        </a>
      </div>
      <div className="certifications">
        <div className="cert">
          <div className="cert-icon" />
          <span>ISO Certified</span>
        </div>
        <div className="cert">
          <div className="cert-icon" />
          <span>SOC Compliant</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 CalvinBall Technologies. All rights reserved.</p>
      </div>
    </div>
      </footer>
    </>
  );
}
