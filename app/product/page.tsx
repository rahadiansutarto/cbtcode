import Link from "next/link";

export default function Product() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>AI Super-Agent for Consumer Brands</h1>
          <p className="hero-description">
            Built by Industry Experts. Engineered for Business Results.
          </p>
          <Link href="#waitlist" className="footer-cta">
            Join The Waitlist
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Product Section */}
      <section className="product-section">
        <div className="product-header">
          <h2>Our Product</h2>
          <h3 className="product-subtitle">Use Cases</h3>
        </div>
        
        {/* Use Case 1 */}
        <div className="use-case-row">
          <div className="use-case-content">
            <h3>One-Click Reports</h3>
            <p>Turn raw, live data into polished decks and share-ready reports instantly.</p>
          </div>
          <div className="use-case-video-container">
            <video autoPlay loop muted playsInline className="use-case-video">
              <source src="/vid/prod1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Use Case 2 */}
        <div className="use-case-row use-case-row-reverse">
          <div className="use-case-content">
            <h3>Insights on Demand</h3>
            <p>Ask any business question and get instant, contextual, insight-packed answers from live data.</p>
          </div>
          <div className="use-case-video-container">
            <video autoPlay loop muted playsInline className="use-case-video">
              <source src="/vid/prod2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Use Case 3 */}
        <div className="use-case-row">
          <div className="use-case-content">
            <h3>Root Cause Analysis</h3>
            <p>Diagnose issues fast. KJ finds the &lsquo;why&rsquo; with built-in CPG expertise.</p>
          </div>
          <div className="use-case-video-container">
            <video autoPlay loop muted playsInline className="use-case-video">
              <source src="/vid/prod3.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Use Case 4 */}
        <div className="use-case-row use-case-row-reverse">
          <div className="use-case-content">
            <h3>Early Warning Signals</h3>
            <p>Anticipate problems before they hit. KJ models, predicts, and recommends next steps.</p>
          </div>
          <div className="use-case-video-container">
            <video autoPlay loop muted playsInline className="use-case-video">
              <source src="/vid/prod4.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Use Case 5 */}
        <div className="use-case-row">
          <div className="use-case-content">
            <h3>Plan, Execute, Launch</h3>
            <p>Spot trends, build the case, launch fast—KJ automates the entire go-to-market.</p>
          </div>
          <div className="use-case-video-container">
            <video autoPlay loop muted playsInline className="use-case-video">
              <source src="/vid/prod5.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="product-cta">
          <Link href="#waitlist" className="footer-cta">
            Join The Waitlist
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

