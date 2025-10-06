import Link from "next/link";
import Image from "next/image";

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
      <div className="hero-video-container">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/vid/vid2.mp4" type="video/mp4" />
        </video>
      </div>
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
          <div className="partner-item">
            <Image src="/marico.webp" alt="Marico" width={120} height={60} className="partner-logo" />
            <div className="partner-name">Marico</div>
          </div>
          <div className="partner-item">
            <Image src="/godrej.svg" alt="Godrej" width={120} height={60} className="partner-logo" />
            <div className="partner-name">Godrej</div>
          </div>
          <div className="partner-item">
            <Image src="/conchaytoro.svg" alt="Concha y Toro" width={120} height={60} className="partner-logo" />
            <div className="partner-name">Concha y Toro</div>
          </div>
          <div className="partner-item">
            <Image src="/itc.svg" alt="ITC" width={120} height={60} className="partner-logo" />
            <div className="partner-name">ITC</div>
          </div>
          <div className="partner-item">
            <Image src="/unilever.svg" alt="Unilever" width={120} height={60} className="partner-logo" />
            <div className="partner-name">Unilever</div>
          </div>
          <div className="partner-item">
            <Image src="/lvmh.svg" alt="LVMH" width={120} height={60} className="partner-logo" />
            <div className="partner-name">LVMH</div>
          </div>
          <div className="partner-item">
            <Image src="/colgate.svg" alt="Colgate-Palmolive" width={120} height={60} className="partner-logo" />
            <div className="partner-name">Colgate-Palmolive</div>
          </div>
          <div className="partner-item">
            <Image src="/wings.svg" alt="Wings" width={120} height={60} className="partner-logo" />
            <div className="partner-name">Wings</div>
          </div>
          <div className="partner-item">
            <Image src="/mayora.svg" alt="Mayora" width={120} height={60} className="partner-logo" />
            <div className="partner-name">Mayora</div>
          </div>
          {/* duplicate for seamless loop */}
          <div className="partner-item" aria-hidden>
            <Image src="/marico.webp" alt="Marico" width={120} height={60} className="partner-logo" />
            <div className="partner-name">Marico</div>
          </div>
          <div className="partner-item" aria-hidden>
            <Image src="/godrej.svg" alt="Godrej" width={120} height={60} className="partner-logo" />
            <div className="partner-name">Godrej</div>
          </div>
          <div className="partner-item" aria-hidden>
            <Image src="/conchaytoro.svg" alt="Concha y Toro" width={120} height={60} className="partner-logo" />
            <div className="partner-name">Concha y Toro</div>
          </div>
          <div className="partner-item" aria-hidden>
            <Image src="/itc.svg" alt="ITC" width={120} height={60} className="partner-logo" />
            <div className="partner-name">ITC</div>
          </div>
          <div className="partner-item" aria-hidden>
            <Image src="/unilever.svg" alt="Unilever" width={120} height={60} className="partner-logo" />
            <div className="partner-name">Unilever</div>
          </div>
          <div className="partner-item" aria-hidden>
            <Image src="/lvmh.svg" alt="LVMH" width={120} height={60} className="partner-logo" />
            <div className="partner-name">LVMH</div>
          </div>
          <div className="partner-item" aria-hidden>
            <Image src="/colgate.svg" alt="Colgate-Palmolive" width={120} height={60} className="partner-logo" />
            <div className="partner-name">Colgate-Palmolive</div>
          </div>
          <div className="partner-item" aria-hidden>
            <Image src="/wings.svg" alt="Wings" width={120} height={60} className="partner-logo" />
            <div className="partner-name">Wings</div>
          </div>
          <div className="partner-item" aria-hidden>
            <Image src="/mayora.svg" alt="Mayora" width={120} height={60} className="partner-logo" />
            <div className="partner-name">Mayora</div>
          </div>
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
          <Image src="/newYork.png" alt="New York" width={200} height={150} className="hub-image" />
          <div className="hub-name">New York</div>
        </div>
        <div className="hub">
          <Image src="/london.jpeg" alt="London" width={200} height={150} className="hub-image" />
          <div className="hub-name">London</div>
        </div>
        <div className="hub">
          <Image src="/singaporeX.png" alt="Singapore" width={200} height={150} className="hub-image" />
          <div className="hub-name">Singapore</div>
        </div>
        <div className="hub">
          <Image src="/balix.png" alt="Bali" width={200} height={150} className="hub-image" />
          <div className="hub-name">Bali</div>
        </div>
      </div>
    </div>
      </section>
    </>
  );
}
