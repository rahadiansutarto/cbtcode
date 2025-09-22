import Link from "next/link";

export default function Home() {
  return (
    <>
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
              <li><Link href="/#product">Product</Link></li>
              <li><Link href="/#team">Team</Link></li>
              <li><Link href="/#experts">Experts</Link></li>
              <li>
                <Link href="/careers">Career</Link>
              </li>
            </ul>
          </nav>
          <Link href="#waitlist" className="footer-cta">
           Join The Waitlist
          <span>→</span>
          </Link>
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
        <Link href="#waitlist" className="footer-cta">
           Join The Waitlist
          <span>→</span>
        </Link>
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
    </>
  );
}
