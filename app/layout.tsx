import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import WaitlistManager from "./components/WaitlistManager";
import { submitWaitlist } from "@/app/actions/waitlist";
import Image from "next/image";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CalvinBall Technologies",
  description: "Meet KJ - AI Super-Agent for Consumer Brands. Built by Industry Experts. Engineered for Business Results.",
  openGraph: {
    title: "CalvinBall Technologies",
    description: "Meet KJ - AI Super-Agent for Consumer Brands",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CalvinBall Technologies",
    description: "Meet KJ - AI Super-Agent for Consumer Brands",
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
        style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
      >
        <header className="header">
          <div className="nav-container">
            <div className="logo-section">
              <Image src="/cbt_log.png" alt="Logo" width={50} height={50}/>
              <Link href="/" className="logo">CalvinBall <br /> Technologies</Link>
            </div>
            <nav>
              <ul className="nav-menu">
                <li><Link href="/">Overview</Link></li>
                <li><Link href="/product">Product</Link></li>
                <li><Link href="/team">Team</Link></li>
                <li><Link href="/experts">Experts</Link></li>
                <li><Link href="/careers">Career</Link></li>
              </ul>
            </nav>
            <Link href="#waitlist" className="footer-cta">
             Join The Waitlist
            <span>→</span>
          </Link>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div className="logo-section">
                <Image src="/cbt_log.png" alt="Logo" width={60} height={10}/>
                <div className="footer-logo">CalvinBall Technologies</div>
              </div>
                <Link href="#waitlist" className="footer-cta">
                  Join The Waitlist
                  <span>→</span>
                </Link>
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
        <WaitlistManager submitWaitlist={submitWaitlist} />
      </body>
    </html>
  );
}
