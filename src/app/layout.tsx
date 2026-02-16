import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Gede Rickelme – Video Editor & Motion Graphics Designer",
    template: "%s | Gede Rickelme",
  },
  description:
    "Experienced video editor with 4+ years of expertise crafting compelling visual content for Instagram, YouTube, Facebook, and TikTok. Proficient in Adobe Premiere Pro, DaVinci Resolve, After Effects, and Audition — delivering cinematic edits, social media ads, and dynamic motion graphics.",
  keywords: [
    "Gede Rickelme",
    "Video Editor",
    "Motion Graphics Designer",
    "Videographer",
    "Adobe Premiere Pro",
    "DaVinci Resolve",
    "After Effects",
    "Adobe Audition",
    "Social Media Video Editor",
    "YouTube Video Editing",
    "Instagram Reels Editor",
    "Facebook Ads Video",
    "TikTok Video Editor",
    "Freelance Video Editor",
    "Indonesia Video Editor",
    "Tangerang Video Editor",
    "Cinematic Editing",
    "Content Creator",
  ],
  authors: [{ name: "Gede Rickelme" }],
  creator: "Gede Rickelme",
  publisher: "Gede Rickelme",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Gede Rickelme – Video Editor & Motion Graphics Designer",
    description:
      "Experienced Video Editor and Videographer delivering polished social media ads, YouTube content, and motion graphics using Premiere Pro, DaVinci Resolve, and After Effects.",
    siteName: "Gede Rickelme Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Gede Rickelme - Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gede Rickelme – Video Editor & Motion Graphics Designer",
    description:
      "Crafting cinematic edits, social media ads, and powerful visual stories. Let's make your content stand out.",
    images: ["/profile.png"],
  },
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  // },
  category: "Video Editing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#020817" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gede Rickelme",
              image: "/profile.png",
              sameAs: [],
              jobTitle: "Video Editor & Motion Graphics Designer",
              knowsAbout: [
                "Video Editing",
                "Videography",
                "Motion Graphics",
                "Adobe Premiere Pro",
                "DaVinci Resolve",
                "Adobe After Effects",
                "Adobe Audition",
                "Social Media Ads",
                "Facebook Ads",
                "Instagram Reels",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "Organization",
                name: "SMK Strada Daan Mogot",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen text-white`}
        style={{
          background: "#020817",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid-background-large min-h-screen">
          <SmoothScroll>
            <MouseMoveEffect />
            <Navbar />
            <main className="">{children}</main>
            <Footer />
            <JumpToTop />
            <Toaster position="top-center" />
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
