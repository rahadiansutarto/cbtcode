'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Expert {
  name: string;
  image: string;
  shortQuote: string;
  fullQuote: string;
  role: string;
  organization: string;
  email?: string;
  linkedin?: string;
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
      linkedin: "#"
    },
    {
      name: "Darnesh Gordhon",
      image: "/darnesh.png",
      shortQuote: "When I was CEO running multiple businesses across multiple geographies, I wish I could have an agent...",
      fullQuote: "When I was CEO running multiple businesses across multiple geographies, I wish I could have an agent like this. The ability to have consistent decision-making and execution across markets is transformative.",
      role: "Ex Chief Executive Officer",
      organization: "Godrej | Nestlé",
      email: "darnesh@example.com",
      linkedin: "#"
    },
    {
      name: "François Walewski",
      image: "/francois.png",
      shortQuote: "With Calvin Ball, your institutional savoir-faire becomes a repeatable product, not just a tribal kn...",
      fullQuote: "With Calvin Ball, your institutional savoir-faire becomes a repeatable product, not just a tribal knowledge. This is the future of how organizations will scale expertise and maintain consistency.",
      role: "Ex-Director and Growth Officer",
      organization: "Bacardi",
      email: "francois@example.com",
      linkedin: "#"
    },
    {
      name: "Vittoria Gambirasi",
      image: "/vittoria.png",
      shortQuote: "The challenge today is bridging the gaps between what AI can do and the business needs. And that's w...",
      fullQuote: "The challenge today is bridging the gaps between what AI can do and the business needs. And that's where Calvin Ball excels - they've built AI that actually understands business context and delivers real value.",
      role: "Managing Director",
      organization: "BrandHack.AI | Ex-Nestle",
      email: "vittoria@example.com",
      linkedin: "#"
    },
    {
      name: "Christopher Smith",
      image: "/christopher.png",
      shortQuote: "So imagine bottling your top palettes best instincts and scaling them instantly. That's what vertica...",
      fullQuote: "So imagine bottling your top palettes best instincts and scaling them instantly. That's what vertical AI agents do. It's like having your best expert available 24/7 across every market and every decision.",
      role: "Founder | Rock Paper Scissors",
      organization: "Campaign Asia Pacific 50 over 50",
      email: "christopher@example.com",
      linkedin: "#"
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
                <div className="expert-image-container">
                  <Image src={expert.image} alt={expert.name} className="expert-image" width={128} height={128} />
                </div>
                <h3 className="expert-name">{expert.name}</h3>
                <p className="expert-quote">&ldquo;{expert.shortQuote}&rdquo; <span className="read-more" onClick={() => setSelectedExpert(expert)}>Read more</span></p>
                <div className="expert-meta">
                  <h4 className="expert-role">{expert.role}</h4>
                  <div className="expert-org">{expert.organization}</div>
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
          <div className="team-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedExpert(null)}>&times;</button>
            
            <div className="team-modal-image">
              <Image src={selectedExpert.image} alt={selectedExpert.name} width={256} height={256} />
            </div>
            
            <div className="team-modal-content">
              <h2>{selectedExpert.name}</h2>
              <h3>{selectedExpert.role}</h3>
              
              <p className="team-modal-bio">{selectedExpert.fullQuote}</p>
              
              <div className="team-modal-code">
                <h4>Organization</h4>
                <p className="team-modal-strive">{selectedExpert.organization}</p>
              </div>
              
              <div className="team-modal-socials">
                {selectedExpert.email && (
                  <a href={`mailto:${selectedExpert.email}`} className="social-icon mail-icon">
                    <Image src="/mail.svg" alt="Email" width={32} height={32} />
                  </a>
                )}
                {selectedExpert.linkedin && (
                  <a href={selectedExpert.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon">
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
