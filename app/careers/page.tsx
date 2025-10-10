"use client";
import Link from "next/link";
import { useState } from "react";
import jobs from "@/joblist.json";


export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState<string | null>(null);
  

  const openModal = (role: string | null = null) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitMsg(null);
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      // include role
      if (selectedRole && !data.get("role")) data.set("role", selectedRole);

      const res = await fetch("/api/apply", {
        method: "POST",
        body: data,
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Upload failed");
      }
      setSubmitMsg("Application submitted successfully.");
      form.reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setSubmitMsg(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-container">
            <h1 className="hero-subtitle text-[4rem]">Join the Mission.</h1>
            <h2 className="hero-subtitle2 text-[5rem]" >Become a Calvinballer.</h2>
          </div>
        </section>
        <section className="partners">
          <div className="partners-container">
            <div className="careers-grid">
              {jobs.map((job) => (
                <div key={job.id} className="career-card">
                  <h3 className="career-title">{job.title}</h3>
                  <p className="career-description">
                    {job.description.length > 150 
                      ? `${job.description.substring(0, 150)}...` 
                      : job.description}
                    {" "}
                    <Link href={`/careers/${job.id}`} className="career-read-more">
                      Read more
                    </Link>
                  </p>
                  <div className="career-meta">
                    <span className="career-type">
                      <svg className="inline-block w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                      </svg>
                      {job.type}
                    </span>
                    <span className="career-experience">
                      <svg className="inline-block w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
                        <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
                        <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
                        <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
                      </svg>
                      {job.experience}
                    </span>
                  </div>
                  <button 
                    className="career-apply-btn" 
                    onClick={(e) => {
                      e.preventDefault(); 
                      openModal(job.title);
                    }}
                  >
                    Apply for this job
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="careers-cta">
          <div className="partners-container">
            <h2 className="careers-cta-title">Looking for something else?</h2>
            <p className="careers-cta-description">
              We&rsquo;re always on the lookout for curious minds, creative builders, and bold thinkers who take initiative and drive impact.
            </p>
            <p className="careers-cta-contact">
              <strong>If you didn&rsquo;t find a role that fits but think you&rsquo;d vibe with us, drop us a line at </strong>
              <a href="mailto:cbt.recruitment@calvinballtech.com" className="careers-email-link">
                cbt.recruitment@calvinballtech.com
              </a>
            </p>
            <p className="careers-cta-tagline">Tell us why you belong at CalvinBall Tech.</p>
          </div>
        </section>
        {/* <section className="hubs">
          <div className="hubs-container">

            <div className="hubs-grid">
              <div className="hub"><div className="hub-name">New York</div></div>
              <div className="hub"><div className="hub-name">London</div></div>
              <div className="hub"><div className="hub-name">Singapore</div></div>
              <div className="hub"><div className="hub-name">Bali</div></div>
            </div>
          </div>
        </section> */}
      </main>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="applyModalTitle" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 id="applyModalTitle">Apply {selectedRole ? `for ${selectedRole}` : "Now"}</h3>
              <button className="modal-close" onClick={closeModal} aria-label="Close">x</button>
            </div>
          <div className="modal-body">
            <form action="#" onSubmit={handleSubmit} className="space-y-6">
              {/* Role */}
              <div className="form-field">
                <label htmlFor="role">Role</label>
                <input id="role" name="role" type="text" defaultValue={selectedRole ?? ""} placeholder="Type Role"/>
            </div>

              {/* Full Name */}
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input 
                  id="name" 
                  name="name" 
                  type="text" 
                  placeholder="Your name" required 
                />
              </div>

              {/* Email */}
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="yourname@email.com" required />
              </div>

              {/* Message */}
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us briefly about yourself"
                ></textarea>
              </div>

              {/* CV Upload */}
              <div className="form-field">
                <label htmlFor="cv">Upload CV</label>
                <input
                 id="cv"
                 name="cv"
                  type="file"
                  accept=".pdf,.docx"
                  required
                  className="block w-full text-sm text-gray-300 
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-lg file:border-0
                   file:text-sm file:font-semibold
                   file:bg-purple-600 file:text-white
                   hover:file:bg-purple-700
                   cursor-pointer"
                />
                <p className="text-xs text-gray-400 mt-2"> Accepted formats: .pdf, .docx </p>
              </div>

                {/* Actions */}
                  {submitMsg && (
                    <p className="text-sm" aria-live="polite">{submitMsg}</p>
                  )}
                  <div className="modal-actions flex justify-end gap-4">
                    <button type="button" className="btn-secondary" onClick={closeModal} disabled={submitting}> Cancel </button>
                    <button type="submit" className="btn-primary" disabled={submitting}>
                      {submitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
            </form>
          </div>
          </div>
        </div>
      )}
      
    </>
  );
}
