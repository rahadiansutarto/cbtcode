'use client';

import { useEffect, useState, useRef } from 'react';

export default function Team() {
  const totalCodes = 10;
  const cardWidth = 350 + 32; // Card width + gap
  const [scrollPosition, setScrollPosition] = useState(cardWidth * totalCodes); // Start at second set
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => prev + cardWidth);
    }, 2000); // Slide every 2 seconds

    return () => clearInterval(interval);
  }, [cardWidth]);

  useEffect(() => {
    // When we've scrolled past the second set, instantly reset to the second set
    if (scrollPosition >= cardWidth * totalCodes * 2) {
      if (trackRef.current) {
        trackRef.current.style.transition = 'none';
      }
      setTimeout(() => {
        setScrollPosition(cardWidth * totalCodes);
        setTimeout(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = 'transform 0.5s ease-in-out';
          }
        }, 50);
      }, 10);
    }
  }, [scrollPosition, cardWidth, totalCodes]);

  const codeItems = [
    { title: "Calvinballer Code 1", description: "Strive for euphoria" },
    { title: "Calvinballer Code 2", description: "Take ownership: individually and collectively" },
    { title: "Calvinballer Code 3", description: "Be resilient and persistent" },
    { title: "Calvinballer Code 4", description: "Embrace the power of imagination" },
    { title: "Calvinballer Code 5", description: "Be brave and not fearless. Do what is right and not what is easy" },
    { title: "Calvinballer Code 6", description: "Constant innovation" },
    { title: "Calvinballer Code 7", description: "Enjoy the journey and not the destination" },
    { title: "Calvinballer Code 8", description: "Have trust: focus on your own grass, the color is not important" },
    { title: "Calvinballer Code 9", description: "Work smart, always find time to do nothing" },
    { title: "Calvinballer Code 10", description: "Collaborate with compassion" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero team-hero">
        <div className="hero-container">
          <h1>Calvinballer</h1><h1 className="code-text">Code</h1>
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
            <div 
              ref={trackRef}
              className="code-track"
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                transition: 'transform 0.5s ease-in-out',
                paddingLeft: 'calc(50% - 175px)'
              }}
            >
              {/* Render multiple sets for seamless infinite scrolling */}
              {[...Array(3)].map((_, setIndex) => 
                codeItems.map((item, itemIndex) => {
                  // Calculate which card should be highlighted (centered)
                  const currentCard = Math.floor(scrollPosition / cardWidth);
                  const absoluteIndex = setIndex * totalCodes + itemIndex;
                  const isHighlighted = absoluteIndex === currentCard;
                  
                  return (
                    <div 
                      key={`set-${setIndex}-item-${itemIndex}`}
                      className="code-item"
                      style={{
                        border: isHighlighted 
                          ? '2px solid rgba(255, 255, 255, 0.8)' 
                          : '2px solid rgba(255, 255, 255, 0.2)',
                        background: isHighlighted
                          ? 'linear-gradient(320.69deg, rgba(255, 68, 35, 0.5) 3.87%, rgba(191, 59, 186, 0.5) 44.94%, rgba(89, 17, 160, 0.5) 87.26%)'
                          : 'rgba(0, 0, 0, 0.3)',
                        boxShadow: isHighlighted
                          ? '4px 4px 8px rgba(255, 255, 255, 0.1) inset, -4px -4px 8px rgba(255, 255, 255, 0.1) inset'
                          : 'none',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)'
                      }}
                    >
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  );
                })
              )}
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
