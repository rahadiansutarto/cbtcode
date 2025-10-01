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
        <div className="product-container">
          <h2>Our Product</h2>
          <h3 className="product-subtitle">Use Cases</h3>
          
          <div className="use-cases-grid">
            <div className="use-case">
              <h4>One-Click Reports</h4>
              <p>Turn raw, live data into polished decks and share-ready reports instantly.</p>
            </div>
            
            <div className="use-case">
              <h4>Insights on Demand</h4>
              <p>Ask any business question and get instant, contextual, insight-packed answers from live data.</p>
            </div>
            
            <div className="use-case">
              <h4>Root Cause Analysis</h4>
              <p>Diagnose issues fast. KJ finds the 'why' with built-in CPG expertise.</p>
            </div>
            
            <div className="use-case">
              <h4>Early Warning Signals</h4>
              <p>Anticipate problems before they hit. KJ models, predicts, and recommends next steps.</p>
            </div>
            
            <div className="use-case">
              <h4>Plan, Execute, Launch</h4>
              <p>Spot trends, build the case, launch fast—KJ automates the entire go-to-market.</p>
            </div>
          </div>
          
          <div className="product-cta">
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
