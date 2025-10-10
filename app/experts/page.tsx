'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Experience {
  title: string;
  company: string;
}

interface Expert {
  name: string;
  image: string;
  shortQuote: string;
  fullQuote: string;
  role: string;
  organization: string;
  email?: string;
  linkedin?: string;
  experience?: Experience[];
}

export default function Experts() {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);

  const experts: Expert[] = [
    {
      name: "Antoine de Carbonnel",
      image: "/antoine.png",
      shortQuote: "KJ is the first time that I've seen industry-specific intelligence in an AI product. It's clear for ...",
      fullQuote: "KJ is the first time that I've seen industry-specific intelligence in an AI product. It's clear for me that Calvin Ball has built something that understands the nuances of our industry in ways that generic AI tools simply cannot match.",
      role: "Ex Chief Commercial Officer",
      organization: "Gojek",
      email: "antoine@example.com",
      linkedin: "#",
      experience: [
        {
          title: "Chief Commercial Officer",
          company: "Gojek"
        },
        {
          title: "VP Commercial & Marketing",
          company: "Gojek"
        },
        {
          title: "Regional Director - Southeast Asia",
          company: "Uber"
        }
      ]
    },
    {
      name: "Darnesh Gordhon",
      image: "/darnesh.png",
      shortQuote: "When I was CEO running multiple businesses across multiple geographies, I wish I could have an agent...",
      fullQuote: "When I was CEO running multiple businesses across multiple geographies, I wish I could have an agent like KJ to make mine and my team's life easier",
      role: "Ex Chief Executive Officer",
      organization: "Godrej | Nestlé",
      email: "darnesh@example.com",
      linkedin: "#",
      experience: [
        {
          title: "CEO / Regional Business Head - Africa, USA & Middle East Region",
          company: "Godrej"
        },
        {
          title: "CEO (President Director) - Indonesia",
          company: "Nestlé"
        },
        {
          title: "CEO / Managing Director - Nigeria",
          company: "Nestlé"
        }
      ]
    },
    {
      name: "François Walewski",
      image: "/francois.png",
      shortQuote: "With Calvin Ball, your institutional savoir-faire becomes a repeatable product, not just a tribal kn...",
      fullQuote: "With Calvin Ball, your institutional savoir-faire becomes a repeatable product, not just a tribal knowledge. This is the future of how organizations will scale expertise and maintain consistency.",
      role: "Ex-Director and Growth Officer",
      organization: "Bacardi",
      email: "francois@example.com",
      linkedin: "#",
      experience: [
        {
          title: "Director and Growth Officer",
          company: "Bacardi"
        },
        {
          title: "Global Brand Director",
          company: "Martini"
        },
        {
          title: "Marketing Director - Europe",
          company: "Diageo"
        }
      ]
    },
    {
      name: "Vittoria Gambirasi",
      image: "/vittoria.png",
      shortQuote: "The challenge today is bridging the gaps between what AI can do and the business needs. And that's w...",
      fullQuote: "The challenge today is bridging the gaps between what AI can do and the business needs. And that's where Calvin Ball excels - they've built AI that actually understands business context and delivers real value.",
      role: "Managing Director",
      organization: "BrandHack.AI | Ex-Nestle",
      email: "vittoria@example.com",
      linkedin: "#",
      experience: [
        {
          title: "Managing Director",
          company: "BrandHack.AI"
        },
        {
          title: "Global Marketing Director",
          company: "Nestlé"
        },
        {
          title: "Brand Strategy Lead - EMEA",
          company: "Nestlé"
        }
      ]
    },
    {
      name: "Christopher Smith",
      image: "/christopher.png",
      shortQuote: "So imagine bottling your top palettes best instincts and scaling them instantly. That's what vertica...",
      fullQuote: "So imagine bottling your top palettes best instincts and scaling them instantly. That's what vertical AI agents do. It's like having your best expert available 24/7 across every market and every decision.",
      role: "Founder | Rock Paper Scissors",
      organization: "Campaign Asia Pacific 50 over 50",
      email: "christopher@example.com",
      linkedin: "#",
      experience: [
        {
          title: "Founder & Creative Director",
          company: "Rock Paper Scissors"
        },
        {
          title: "Campaign Asia Pacific 50 over 50",
          company: "Recognition Award"
        },
        {
          title: "Executive Creative Director",
          company: "BBDO Asia"
        }
      ]
    }
  ];

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
            {experts.map((expert, index) => (
              <article key={index} className="expert-card">
                <div className="expert-image-wrapper">
                  <div className="expert-image-container">
                    <Image src={expert.image} alt={expert.name} className="expert-image" width={272} height={272} />
                  </div>
                </div>
                <div className="expert-info">
                  <h3 className="expert-name">{expert.name}</h3>
                  <h4 className="expert-role">{expert.role}</h4>
                  <div className="expert-org">{expert.organization}</div>
                </div>
                <p className="expert-quote">&ldquo;{expert.shortQuote}&rdquo; <span className="read-more" onClick={() => setSelectedExpert(expert)}>Read more</span></p>
                <div className="expert-socials">
                  {expert.linkedin && (
                    <a href={expert.linkedin} target="_blank" rel="noopener noreferrer" className="expert-social-icon">
                      <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                    </a>
                  )}
                  {expert.email && (
                    <a href={`mailto:${expert.email}`} className="expert-social-icon">
                      <Image src="/mail.svg" alt="Email" width={24} height={24} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="experts-cta">
            <Link href="#waitlist" className="footer-cta">
              Join The Waitlist
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Expert Modal */}
      {selectedExpert && (
        <div className="modal-overlay" onClick={() => setSelectedExpert(null)}>
          <div className="expert-modal" onClick={(e) => e.stopPropagation()}>
            <div className="expert-modal-header">
              <h3 className="expert-modal-title">Details</h3>
              <button className="expert-modal-close" onClick={() => setSelectedExpert(null)}>&times;</button>
            </div>
            
            <div className="expert-modal-profile">
              <div className="expert-modal-image">
                <Image src={selectedExpert.image} alt={selectedExpert.name} width={120} height={120} />
              </div>
              <div className="expert-modal-info">
                <h2 className="expert-modal-name">{selectedExpert.name}</h2>
                <p className="expert-modal-role">{selectedExpert.role}</p>
                <p className="expert-modal-org">{selectedExpert.organization}</p>
              </div>
            </div>
            
            <div className="expert-modal-body">
              <div className="expert-modal-quote">
                <p>&ldquo;{selectedExpert.fullQuote}&rdquo;</p>
              </div>
              
              {selectedExpert.experience && selectedExpert.experience.length > 0 && (
                <div className="expert-modal-experience">
                  <h4 className="expert-modal-section-title">Experience</h4>
                  <ul className="expert-experience-list">
                    {selectedExpert.experience.map((exp, index) => (
                      <li key={index} className="expert-experience-item">
                        <div className="expert-experience-title">{exp.title}</div>
                        <div className="expert-experience-company">{exp.company}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="expert-modal-socials">
                {selectedExpert.linkedin && (
                  <a href={selectedExpert.linkedin} target="_blank" rel="noopener noreferrer" className="expert-modal-social-icon">
                    <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                  </a>
                )}
                {selectedExpert.email && (
                  <a href={`mailto:${selectedExpert.email}`} className="expert-modal-social-icon">
                    <Image src="/mail.svg" alt="Email" width={24} height={24} />
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
