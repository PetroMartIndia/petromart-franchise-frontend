import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Petromart Franchise | Premium Fuel, EV Charging & E-Commerce Hubs",
    template: "%s | Petromart Franchise",
  },
  description: "Join the future of retail with Petromart. Explore high-ROI franchise opportunities combining petroleum, EV green charging, and automated e-commerce fulfillment.",
  keywords: [
    "Petromart franchise",
    "gas station franchise opportunity",
    "EV charging station business",
    "e-commerce fulfillment hub franchise",
    "retail franchise investment",
  ],
  authors: [{ name: "Petromart Franchise Team" }],
  creator: "Petromart",
  publisher: "Petromart Corporation",
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
    url: "https://petromart-franchise.com",
    title: "Petromart Franchise | Multi-Energy & E-Commerce Retail Hubs",
    description: "Discover profitable franchise tiers with integrated fuel, EV charging, and 24/7 dark-store e-commerce. Calculate your ROI and apply today.",
    siteName: "Petromart Franchise Portal",
    images: [
      {
        url: "https://petromart-franchise.com/og-image.jpg", // Replace with your actual hosted OG image URL
        width: 1200,
        height: 630,
        alt: "Petromart Franchise Opportunity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petromart Franchise | Multi-Energy & E-Commerce Hubs",
    description: "Invest in the next generation of hybrid gas stations and automated e-commerce fulfillment centers.",
    images: ["https://petromart-franchise.com/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#0A0A0A",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0A] text-white`}
      >
        {children}
      </body>
    </html>
  );
}