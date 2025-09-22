"use client";

import { useEffect, useState } from "react";

type Props = {
  submitWaitlist: (formData: FormData) => Promise<{ ok: boolean; error?: string }>;
};

export default function WaitlistManager({ submitWaitlist }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest('a[href="#waitlist"]') as HTMLAnchorElement | null;
      if (anchor) {
        event.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);

  const close = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={close}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlistModalTitle"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3 id="waitlistModalTitle">Join The Waitlist</h3>
          <button className="modal-close" onClick={close} aria-label="Close">×</button>
        </div>
        <div className="modal-body">
          <form
            action={async (formData) => {
              const res = await submitWaitlist(formData);
              if (res.ok) {
                close();
              } else {
                alert(res.error || "Submission failed");
              }
            }}
          >
            <div className="form-field">
              {/* <label htmlFor="wl-name">Full Name</label> */}
              <input id="wl-email" name="email" type="email" placeholder="Corporate Email*" required />
            </div>
            <div className="form-field">
              {/* <label htmlFor="wl-email">Email</label> */}
              <input id="wl-name" name="name" type="text" placeholder="LinkedIn*" required />
            </div>
             <div className="form-field">
              {/* <label htmlFor="wl-note">Note (optional)</label> */}
              <textarea id="wl-note" name="note" rows={2} placeholder="Area of expertise" />
            </div>
            <div className="form-field">
              {/* <label htmlFor="wl-note">Note (optional)</label> */}
              <textarea id="wl-note" name="note" rows={3} placeholder="Anything you would like us to know..." />
            </div>
            <div className="modal-actions">
              <button type="button" className="btn-secondary" onClick={close}>Cancel</button>
              <button type="submit" className="btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


