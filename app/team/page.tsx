'use client';

import { useEffect, useState, useRef } from 'react';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  shortBio: string;
  fullBio: string;
  favoriteCode: string;
  strive: string;
  instagram?: string;
  linkedin?: string;
}

export default function Team() {
  const totalCodes = 10;
  const cardWidth = 350 + 32; // Card width + gap
  const [scrollPosition, setScrollPosition] = useState(cardWidth * totalCodes); // Start at second set
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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

  const teamMembers: TeamMember[] = [
    {
      name: "Gurnoor Dhillon",
      title: "Chief Executive Officer",
      image: "/gurnoor.png",
      shortBio: "The Calvinballer-in-Chief. Economist by degree, product by choice. Built $1 B+ beasts by bending the...",
      fullBio: "The Calvinballer-in-Chief. Economist by degree, product by choice. Built $1B+ beasts by bending the rules,- Shikhar E-B2B at Unilever, six-market digibank at DBS. Led a $100 M GAV/GoToChefNow P/L. Y'er one of the world's youngest professionally appointed CFOs. Builds products like a Punjabi chef builds buffers: bold flavors, everything taste guaranteed.",
      favoriteCode: "Favorite Calvinballer Code",
      strive: "Strive for Euphoria\nas happiness is not good enough!",
      instagram: "#",
      linkedin: "#"
    },
    {
      name: "Sandeep Ramesh",
      title: "Chief Business Officer",
      image: "/sandeep.png",
      shortBio: "Scaled YouTube to $1B in revenue. Led Google's $10B+ Global Partners Program. Managed billion-dollar...",
      fullBio: "Scaled YouTube to $1B in revenue. Led Google's $10B+ Global Partners Program. Managed billion-dollar partnerships and strategic initiatives. Expert in building and scaling large-scale platform businesses with deep expertise in digital transformation.",
      favoriteCode: "Favorite Calvinballer Code",
      strive: "Take ownership: individually and collectively",
      instagram: "#",
      linkedin: "#"
    },
    {
      name: "Axel Wehr",
      title: "Chief Financial Officer",
      image: "/axel.png",
      shortBio: "Numbers ninja with founder mileage. Ex–Bain Capital & Princeton. Managed $200M in VC, backed SaaS & ...",
      fullBio: "Numbers ninja with founder mileage. Ex–Bain Capital & Princeton. Managed $200M in VC, backed SaaS & marketplace startups. Deep experience in financial strategy, venture capital, and building scalable financial operations for high-growth companies.",
      favoriteCode: "Favorite Calvinballer Code",
      strive: "Be resilient and persistent",
      instagram: "#",
      linkedin: "#"
    }
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
          <h2><span className="meet-text">Meet the </span><span className="calvinballers-text">Calvinballers</span></h2>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <h4>{member.title}</h4>
                <p>&ldquo;{member.shortBio}&rdquo;<span className="read-more" onClick={() => setSelectedMember(member)}>Read more</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="team-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMember(null)}>&times;</button>
            
            <div className="team-modal-image">
              <img src={selectedMember.image} alt={selectedMember.name} />
            </div>
            
            <div className="team-modal-content">
              <h2>{selectedMember.name}</h2>
              <h3>{selectedMember.title}</h3>
              
              <p className="team-modal-bio">{selectedMember.fullBio}</p>
              
              <div className="team-modal-code">
                <h4>{selectedMember.favoriteCode}</h4>
                <p className="team-modal-strive">{selectedMember.strive}</p>
              </div>
              
              <div className="team-modal-socials">
                {selectedMember.instagram && (
                  <a href={selectedMember.instagram} target="_blank" rel="noopener noreferrer" className="social-icon instagram-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                )}
                {selectedMember.linkedin && (
                  <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
