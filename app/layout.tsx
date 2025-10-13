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
        
        {/* Fixed stars layer - follows scroll, behind content */}
        <div className="stars-container">
          <div style={{position: 'absolute', left: '5%', bottom: '10%', animation: '54s linear 0s infinite normal none running float, 3s ease-in-out 0.6s infinite alternate none running twinkle', width: '12px', height: '12px'}} className="star"></div>
          <div style={{position: 'absolute', left: '15%', bottom: '20%', animation: '52s linear 0.5s infinite normal none running float, 3s ease-in-out 0.7s infinite alternate none running twinkle', width: '8px', height: '8px'}} className="star"></div>
          <div style={{position: 'absolute', left: '25%', bottom: '5%', animation: '51s linear 1s infinite normal none running float, 3s ease-in-out 1.4s infinite alternate none running twinkle', width: '10px', height: '10px'}} className="star"></div>
          <div style={{position: 'absolute', left: '40%', bottom: '15%', animation: '53s linear 1.5s infinite normal none running float, 3s ease-in-out 1.5s infinite alternate none running twinkle', width: '15px', height: '15px'}} className="star"></div>
          <div style={{position: 'absolute', left: '55%', bottom: '25%', animation: '50s linear 2s infinite normal none running float, 3s ease-in-out 1.3s infinite alternate none running twinkle', width: '9px', height: '9px'}} className="star"></div>
          <div style={{position: 'absolute', left: '70%', bottom: '8%', animation: '52.5s linear 2.5s infinite normal none running float, 3s ease-in-out 1.6s infinite alternate none running twinkle', width: '11px', height: '11px'}} className="star"></div>
          <div style={{position: 'absolute', left: '85%', bottom: '18%', animation: '51.5s linear 3s infinite normal none running float, 3s ease-in-out 2s infinite alternate none running twinkle', width: '13px', height: '13px'}} className="star"></div>
          <div style={{position: 'absolute', left: '92%', bottom: '12%', animation: '53.5s linear 3.5s infinite normal none running float, 3s ease-in-out 2.5s infinite alternate none running twinkle', width: '7px', height: '7px'}} className="star"></div>
          <div style={{position: 'absolute', left: '10%', top: '15%', animation: '49s linear 1s infinite normal none running float, 3s ease-in-out 1.8s infinite alternate none running twinkle', width: '11px', height: '11px'}} className="star"></div>
          <div style={{position: 'absolute', left: '30%', top: '25%', animation: '55s linear 2.5s infinite normal none running float, 3s ease-in-out 2.2s infinite alternate none running twinkle', width: '9px', height: '9px'}} className="star"></div>
          <div style={{position: 'absolute', left: '50%', top: '10%', animation: '48s linear 3s infinite normal none running float, 3s ease-in-out 1.1s infinite alternate none running twinkle', width: '14px', height: '14px'}} className="star"></div>
          <div style={{position: 'absolute', left: '65%', top: '20%', animation: '52s linear 0.8s infinite normal none running float, 3s ease-in-out 1.9s infinite alternate none running twinkle', width: '10px', height: '10px'}} className="star"></div>
          <div style={{position: 'absolute', left: '80%', top: '30%', animation: '50.5s linear 1.5s infinite normal none running float, 3s ease-in-out 2.3s infinite alternate none running twinkle', width: '8px', height: '8px'}} className="star"></div>
          <div style={{position: 'absolute', left: '90%', top: '5%', animation: '53s linear 2s infinite normal none running float, 3s ease-in-out 1.2s infinite alternate none running twinkle', width: '12px', height: '12px'}} className="star"></div>
        </div>
        
        {children}
        <div className="relative" style={{height: '426px'}}>
          <div className="w-full absolute -top-32 overflow-hidden h-[400px]">
            <Image className="w-full" src="/footer.svg" alt="" width={1920} height={400} />
          </div>
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
                <div className="cert">
                  <Image src="/iso.png" alt="ISO Certification" width={24} height={24} className="cert-logo" />
                  <span>ISO Certified</span>
                  <div className="cert-icon" />
                </div>
                <div className="cert">
                  <Image src="/soc.png" alt="SOC Compliance" width={24} height={24} className="cert-logo" />
                  <span>SOC Compliant</span>
                  <div className="cert-icon" />
                </div>
              </div>
              <div className="footer-bottom">
                <p>Copyright © 2024 CalvinBall Technologies. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
        <WaitlistManager submitWaitlist={submitWaitlist} />
      </body>
    </html>
  );
}
