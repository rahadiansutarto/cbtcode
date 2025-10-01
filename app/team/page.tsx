
export default function Team() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>Calvinballer Code</h1>
          <p className="hero-description">
            We&rsquo;re techno-optimists who believe the next era of enterprise transformation will be powered by AI, guided by human expertise. We&rsquo;ve led iconic brands at world-class companies, built billion $ product lines and trained at the top global institutions.
          </p>
          <p className="hero-description">
            That&rsquo;s why we&rsquo;re building Vertical AI Agents: domain-specific, action-driven systems that make enterprise execution faster, smarter, and more consistent.
          </p>
        </div>
      </section>

      {/* Calvinballer Code Section */}
      <section className="calvinballer-code">
        <div className="code-container">
          <div className="code-marquee" aria-label="Calvinballer Code">
            <div className="code-track">
              <div className="code-item">
                <h3>Calvinballer Code 1</h3>
                <p>Strive for euphoria</p>
              </div>
              
              <div className="code-item">
                <h3>Calvinballer Code 2</h3>
                <p>Take ownership: individually and collectively</p>
              </div>
              
              <div className="code-item">
                <h3>Calvinballer Code 3</h3>
                <p>Be resilient and persistent</p>
              </div>
              
              <div className="code-item">
                <h3>Calvinballer Code 4</h3>
                <p>Embrace the power of imagination</p>
              </div>
              
              <div className="code-item">
                <h3>Calvinballer Code 5</h3>
                <p>Be brave and not fearless. Do what is right and not what is easy</p>
              </div>
              
              <div className="code-item">
                <h3>Calvinballer Code 6</h3>
                <p>Constant innovation</p>
              </div>
              
              <div className="code-item">
                <h3>Calvinballer Code 7</h3>
                <p>Enjoy the journey and not the destination</p>
              </div>
              
              <div className="code-item">
                <h3>Calvinballer Code 8</h3>
                <p>Have trust: focus on your own grass, the color is not important</p>
              </div>
              
              <div className="code-item">
                <h3>Calvinballer Code 9</h3>
                <p>Work smart, always find time to do nothing</p>
              </div>
              
              <div className="code-item">
                <h3>Calvinballer Code 10</h3>
                <p>Collaborate with compassion</p>
              </div>
              
              {/* duplicate for seamless loop */}
              <div className="code-item" aria-hidden>
                <h3>Calvinballer Code 1</h3>
                <p>Strive for euphoria</p>
              </div>
              
              <div className="code-item" aria-hidden>
                <h3>Calvinballer Code 2</h3>
                <p>Take ownership: individually and collectively</p>
              </div>
              
              <div className="code-item" aria-hidden>
                <h3>Calvinballer Code 3</h3>
                <p>Be resilient and persistent</p>
              </div>
              
              <div className="code-item" aria-hidden>
                <h3>Calvinballer Code 4</h3>
                <p>Embrace the power of imagination</p>
              </div>
              
              <div className="code-item" aria-hidden>
                <h3>Calvinballer Code 5</h3>
                <p>Be brave and not fearless. Do what is right and not what is easy</p>
              </div>
              
              <div className="code-item" aria-hidden>
                <h3>Calvinballer Code 6</h3>
                <p>Constant innovation</p>
              </div>
              
              <div className="code-item" aria-hidden>
                <h3>Calvinballer Code 7</h3>
                <p>Enjoy the journey and not the destination</p>
              </div>
              
              <div className="code-item" aria-hidden>
                <h3>Calvinballer Code 8</h3>
                <p>Have trust: focus on your own grass, the color is not important</p>
              </div>
              
              <div className="code-item" aria-hidden>
                <h3>Calvinballer Code 9</h3>
                <p>Work smart, always find time to do nothing</p>
              </div>
              
              <div className="code-item" aria-hidden>
                <h3>Calvinballer Code 10</h3>
                <p>Collaborate with compassion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Calvinballers Section */}
      <section className="team-members">
        <div className="team-container">
          <h2>Meet the Calvinballers</h2>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <div className="placeholder-image">Gurnoor Dhillon</div>
              </div>
              <h3>Gurnoor Dhillon</h3>
              <h4>Chief Executive Officer</h4>
              <p>&ldquo;The Calvinballer-in-Chief. Economist by degree, product by choice. Built $1 B+ beasts by bending the...&rdquo;<span className="read-more">Read more</span></p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <div className="placeholder-image">Sandeep Ramesh</div>
              </div>
              <h3>Sandeep Ramesh</h3>
              <h4>Chief Business Officer</h4>
              <p>&ldquo;Scaled YouTube to $1B in revenue. Led Google&rsquo;s $10B+ Global Partners Program. Managed billion-dollar...&rdquo;<span className="read-more">Read more</span></p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <div className="placeholder-image">Axel Wehr</div>
              </div>
              <h3>Axel Wehr</h3>
              <h4>Chief Financial Officer</h4>
              <p>&ldquo;Numbers ninja with founder mileage. Ex–Bain Capital & Princeton. Managed $200M in VC, backed SaaS & ...&rdquo;<span className="read-more">Read more</span></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
