'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  shortBio: string;
  fullBio: string;
  favoriteCode: string;
  strive: string;
  email?: string;
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
      email: "gurnoor@calvinballtech.com",
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
      email: "sandeep@calvinballtech.com",
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
      email: "axel@calvinballtech.com",
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
                  <Image src={member.image} alt={member.name} width={256} height={256} />
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
              <Image src={selectedMember.image} alt={selectedMember.name} width={256} height={256} />
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
                {selectedMember.email && (
                  <a href={`mailto:${selectedMember.email}`} className="social-icon mail-icon">
                    <Image src="/mail.svg" alt="Email" width={32} height={32} />
                  </a>
                )}
                {selectedMember.linkedin && (
                  <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon">
                    <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} />
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
