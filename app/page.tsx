import Link from "next/link";

export default function Home() {
  return (
    <>
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
      {/* Product Section - Innovation Partners */}
      <section className="partners" id="product">
    <div className="partners-container">
      <h2>Our Innovation Partners</h2>
      <div className="partners-marquee" aria-label="Innovation partners">
        <div className="marquee-track">
          <div className="partner-item">Marico</div>
          <div className="partner-item">Godrej</div>
          <div className="partner-item">Concha y Toro</div>
          <div className="partner-item">ITC</div>
          <div className="partner-item">Unilever</div>
          <div className="partner-item">LVMH</div>
          <div className="partner-item">Colgate-Palmolive</div>
          <div className="partner-item">Wings</div>
          <div className="partner-item">Mayora</div>
          {/* duplicate for seamless loop */}
          <div className="partner-item" aria-hidden>Marico</div>
          <div className="partner-item" aria-hidden>Godrej</div>
          <div className="partner-item" aria-hidden>Concha y Toro</div>
          <div className="partner-item" aria-hidden>ITC</div>
          <div className="partner-item" aria-hidden>Unilever</div>
          <div className="partner-item" aria-hidden>LVMH</div>
          <div className="partner-item" aria-hidden>Colgate-Palmolive</div>
          <div className="partner-item" aria-hidden>Wings</div>
          <div className="partner-item" aria-hidden>Mayora</div>
        </div>
      </div>
    </div>
      </section>
      {/* Team Section - Testimonials */}
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
      {/* Experts Section - Calvinballer Hubs */}
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
