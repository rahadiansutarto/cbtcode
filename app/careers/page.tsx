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
            <div className="testimonials-grid">
              {jobs.map((job) => (
              <Link key={job.id} href={`/careers/${job.id}`} className="block p-8 border rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition">
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <p className="text-base text-neutral-400 line-clamp-3">{job.description} </p>
              </Link>
              ))}
            </div>
            <div className="text-center">
              <button className="hero-cta mt-8" onClick={(e) => {e.preventDefault(); openModal(null);}}> Apply Now <span>→</span></button>
            </div>
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
              <Link href="mailto:careers@calvinballtech.com">Send Your Resume →</Link>
            </div>
          </div>
        </section>
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
