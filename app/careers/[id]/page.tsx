"use client";
import jobs from "@/joblist.json";
import Link from "next/link";
import { useState } from "react";

interface JobPageProps {
  params: { id: string };
}

export default function JobPage({ params }: JobPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState<string | null>(null);

  const job = jobs.find((j) => j.id === params.id);

  if (!job) {
    return (
      <main className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Job not found</h1>
          <Link href="/careers" className="text-purple-400 hover:text-purple-300">
            ← Back to Careers
          </Link>
        </div>
      </main>
    );
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!job) return;
    
    setSubmitMsg(null);
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      if (!data.get("role")) data.set("role", job.title);

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
      <main className="job-detail-page">
        {/* Back Navigation */}
        <div className="job-detail-container">
          <Link href="/careers" className="job-back-link">
            ← Back to Careers
          </Link>

          {/* Job Header */}
          <div className="job-detail-header">
            <h1 className="job-detail-title">{job.title}</h1>
            <div className="job-detail-meta">
              <span className="job-meta-item">
                📍 {job.location || "Remote"}
              </span>
              <span className="job-meta-separator">•</span>
              <span className="job-meta-item">{job.type}</span>
              <span className="job-meta-separator">•</span>
              <span className="job-meta-item">{job.experience}</span>
            </div>
          </div>

          {/* Job Description */}
          <div className="job-detail-section">
            <p className="job-detail-description">{job.description}</p>
          </div>

          {/* Apply Now Button */}
          <button className="job-apply-btn" onClick={openModal}>
            Apply Now
          </button>

          {/* What You'll Own */}
          {job.whatYouWillOwn && job.whatYouWillOwn.length > 0 && (
            <div className="job-detail-section">
              <h2 className="job-section-title">What You&rsquo;ll Own</h2>
              <ul className="job-detail-list">
                {job.whatYouWillOwn.map((item, index) => {
                  const parts = item.split('**: ');
                  if (parts.length === 2) {
                    const [title, description] = parts;
                    return (
                      <li key={index} className="job-list-item">
                        <strong>{title.replace('**', '')}:</strong> {description}
                      </li>
                    );
                  }
                  return <li key={index} className="job-list-item">{item}</li>;
                })}
              </ul>
            </div>
          )}

          {/* Ideal Profile */}
          {job.idealProfile && job.idealProfile.length > 0 && (
            <div className="job-detail-section">
              <h2 className="job-section-title">Ideal Profile</h2>
              <ul className="job-detail-list">
                {job.idealProfile.map((item, index) => (
                  <li key={index} className="job-list-item">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Calvinballer Vibes */}
          {job.calvinballerVibes && job.calvinballerVibes.length > 0 && (
            <div className="job-detail-section">
              <h2 className="job-section-title">Calvinballer Vibes We&rsquo;re Looking For</h2>
              <ul className="job-detail-list">
                {job.calvinballerVibes.map((item, index) => {
                  const parts = item.split('**. ');
                  if (parts.length === 2) {
                    const title = parts[0].replace('**', '');
                    const description = parts[1];
                    return (
                      <li key={index} className="job-list-item">
                        <strong>{title}.</strong> {description}
                      </li>
                    );
                  }
                  return <li key={index} className="job-list-item">{item}</li>;
                })}
              </ul>
            </div>
          )}

          {/* Apply Now Button */}
          <button className="job-apply-btn" onClick={openModal}>
            Apply Now
          </button>

          {/* Closing Section */}
          <div className="job-closing-section">
            <h2 className="job-closing-title">
              {job.id === 'operations-assistant-manager' 
                ? 'Ready to Keep the Engine Running Smoothly?' 
                : job.id === 'chief-growth-officer'
                ? 'Ready to Shape the Future of AI?'
                : job.id === 'video-editor-motion-graphics'
                ? 'Ready to Create Visual Magic?'
                : job.id === 'brand-community-lead'
                ? 'Ready to Build Our Brand Story?'
                : job.id === 'senior-product-manager'
                ? 'Ready to Build the Future of AI Agents?'
                : 'Ready to Join the Team?'}
            </h2>
            <p className="job-closing-description">
              This isn&rsquo;t just a {job.title.toLowerCase()} role – it&rsquo;s your chance to be part of something transformative and make a real impact.
            </p>
            <p className="job-closing-contact">
              If this sounds like your kind of fit, click the CTA above or drop us a note at{" "}
              <a href="mailto:cbt.recruitment@calvinballtech.com" className="job-email-link">
                cbt.recruitment@calvinballtech.com
              </a>
              {" "}– we&rsquo;d love to connect.
            </p>
          </div>
        </div>
      </main>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="applyModalTitle" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 id="applyModalTitle">Apply for {job.title}</h3>
              <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Role */}
                <div className="form-field">
                  <label htmlFor="role">Role</label>
                  <input id="role" name="role" type="text" defaultValue={job.title} placeholder="Type Role" readOnly/>
                </div>

                {/* Full Name */}
                <div className="form-field">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    placeholder="Your name" 
                    required 
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
                  <p className="text-xs text-gray-400 mt-2">Accepted formats: .pdf, .docx</p>
                </div>

                {/* Actions */}
                {submitMsg && (
                  <p className="text-sm" aria-live="polite">{submitMsg}</p>
                )}
                <div className="modal-actions flex justify-end gap-4">
                  <button type="button" className="btn-secondary" onClick={closeModal} disabled={submitting}>Cancel</button>
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
