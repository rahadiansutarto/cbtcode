"use client";
import Link from "next/link";
import { useState } from "react";
import jobs from "@/joblist.json";


export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const openModal = (role: string | null = null) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <header className="header">
        <div className="nav-container">
          <Link href="/" className="logo">CalvinBall Technologies</Link>
          <nav>
            <ul className="nav-menu">
              <li><Link href="/">Overview</Link></li>
              <li><Link href="/#product">Product</Link></li>
              <li><Link href="/#team">Team</Link></li>
              <li><Link href="/#experts">Experts</Link></li>
              <li><Link href="/careers">Career</Link></li>
            </ul>
          </nav>
          <a href="#waitlist" className="cta-button">Join The Waitlist <span>→</span></a>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="hero-container">
            <h1 className="hero-subtitle text-[4rem]">Join the Mission.</h1>
            <h2 className="hero-subtitle2 text-[5rem]" >Become a Calvinballer.</h2>
          </div>
        </section>
        <section className="partners">
          <div className="partners-container">
            <div className="testimonials-grid">
              {jobs.map((job) => (
              <Link key={job.id} href={`/careers/${job.id}`} className="block p-8 border rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition">
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <p className="text-base text-neutral-400 line-clamp-3">{job.description} </p>
              </Link>
              ))}
              {/* <div className="testimonial" onClick={() => openModal("Chief Growth Officer")} style={{ cursor: "pointer" }} role="button" tabIndex={0} aria-label="Apply for Chief Growth Officer" onKeyDown={(e) => { if (e.key === "Enter") openModal("Chief Growth Officer"); }}>
                <div className="testimonial-author">Chief Growth Officer</div>
                <div className="testimonial-company">
                  Were looking for a Chief Growth Officer to lead our AI-powered transformation agenda across Southeast Asia. This is not your typical sales leadership gig. You'll be working at the edge of enterprise AI, partnering with CXOs of the region's biggest brands to turn cutting-edge tech into real business outcomes. If you thrive where business meets technology, and if you're ready to shape the future of GTM in the AI era — this is your shot.
                </div>
                
              </div>
              <div className="testimonial" onClick={() => openModal("Operations Assistant Manager")} style={{ cursor: "pointer" }} role="button" tabIndex={0} aria-label="Apply for Operations Assistant Manager" onKeyDown={(e) => { if (e.key === "Enter") openModal("Operations Assistant Manager"); }}>
                <div className="testimonial-author">Operations Assistant Manager</div>
                <div className="testimonial-company">
                  Were looking for a proactive, detail-obsessed operator to serve as the administrative engine of our operations. You'll be the anchor that keeps things structured and on track - managing documentation, coordinating vendors and clients, maintaining financial records, and ensuring nothing operational ever becomes a bottleneck.
                </div>
              </div>
               */}
            </div>
            <div className="text-center">
              <a className="hero-cta mt-8" href="#" onClick={(e) => { e.preventDefault(); openModal(null); }}>Apply Now <span>→</span></a>
            </div>
            {/* <div className="text-center">
              <a className="hero-cta" href="id">Details <span>→</span></a>
            </div> */}
          </div>
        </section>
        <section className="hubs">
          <div className="hubs-container">

            <div className="hubs-grid">
              <div className="hub"><div className="hub-name">New York</div></div>
              <div className="hub"><div className="hub-name">London</div></div>
              <div className="hub"><div className="hub-name">Singapore</div></div>
              <div className="hub"><div className="hub-name">Bali</div></div>
            </div>
            <div>
              <a className="hero-cta" href="mailto:careers@calvinballtech.com">Send Your Resume <span>→</span></a>
            </div>
          </div>
        </section>
      </main>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="applyModalTitle" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 id="applyModalTitle">Apply {selectedRole ? `for ${selectedRole}` : "Now"}</h3>
              <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>
            </div>
            <div className="modal-body">
              <form action="#" onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
                <div className="form-field">
                  <label htmlFor="role">Role</label>
                  <input id="role" name="role" type="text" defaultValue={selectedRole ?? ""} placeholder="Type Role" />
                </div>
                <div className="form-field">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="yourname@email.com" required />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={4} placeholder="Tell us briefly about yourself"></textarea>
                </div>
                <div className="modal-actions">
                  <button type="button" className="btn-secondary" onClick={closeModal}>Cancel</button>
                  <button type="submit" className="btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">CalvinBall Technologies</div>
            <a href="#waitlist" className="footer-cta">Join The Waitlist <span>→</span></a>
          </div>
          <div className="certifications">
            <div className="cert"><div className="cert-icon" /><span>ISO Certified</span></div>
            <div className="cert"><div className="cert-icon" /><span>SOC Compliant</span></div>
          </div>
          <div className="footer-bottom">
            <p>Copyright © 2024 CalvinBall Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}