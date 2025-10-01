import Link from "next/link";

export default function Experts() {
  return (
    <>
      {/* Hero / Header Section */}
      <section className="experts-hero">
        <div className="experts-container">
          <h1 className="experts-title">Backed By</h1>
          <h2 className="experts-subtitle">Experts and Leaders</h2>
        </div>
      </section>

      {/* Experts Quotes and Profiles */}
      <section className="experts-list">
        <div className="experts-container">
          <div className="experts-grid">
            {/* Antoine de Carbonnel */}
            <article className="expert-card">
              <h3 className="expert-name">Antoine de Carbonnel</h3>
              <p className="expert-quote">"KJ is the first time that I've seen industry-specific intelligence in an AI product. It's clear for ..." <span className="read-more">Read more</span></p>
              <div className="expert-meta">
                <h4 className="expert-role">Ex Chief Commercial Officer</h4>
                <div className="expert-org">Gojek</div>
              </div>
            </article>

            {/* Darnesh Gordhon */}
            <article className="expert-card">
              <h3 className="expert-name">Darnesh Gordhon</h3>
              <p className="expert-quote">"When I was CEO running multiple businesses across multiple geographies, I wish I could have an agent..." <span className="read-more">Read more</span></p>
              <div className="expert-meta">
                <h4 className="expert-role">Ex Chief Executive Officer</h4>
                <div className="expert-org">Godrej | Nestlé</div>
              </div>
            </article>

            {/* François Walewski */}
            <article className="expert-card">
              <h3 className="expert-name">François Walewski</h3>
              <p className="expert-quote">"With Calvin Ball, your institutional savoir-faire becomes a repeatable product, not just a tribal kn..." <span className="read-more">Read more</span></p>
              <div className="expert-meta">
                <h4 className="expert-role">Ex-Director and Growth Officer</h4>
                <div className="expert-org">Bacardi</div>
              </div>
            </article>

            {/* Vittoria Gambirasi */}
            <article className="expert-card">
              <h3 className="expert-name">Vittoria Gambirasi</h3>
              <p className="expert-quote">"The challenge today is bridging the gaps between what AI can do and the business needs. And that's w..." <span className="read-more">Read more</span></p>
              <div className="expert-meta">
                <h4 className="expert-role">Managing Director</h4>
                <div className="expert-org">BrandHack.AI | Ex-Nestle</div>
              </div>
            </article>

            {/* Christopher Smith */}
            <article className="expert-card">
              <h3 className="expert-name">Christopher Smith</h3>
              <p className="expert-quote">"So imagine bottling your top palettes best instincts and scaling them instantly. That's what vertica..." <span className="read-more">Read more</span></p>
              <div className="expert-meta">
                <h4 className="expert-role">Founder | Rock Paper Scissors</h4>
                <div className="expert-org">Campaign Asia Pacific 50 over 50</div>
              </div>
            </article>
          </div>

          <div className="experts-cta">
            <Link href="#waitlist" className="footer-cta">
              Join The Waitlist
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
