import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
import StickyBar from "./components/StickyBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0C0E14",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bksgasandheating.com"),
  title: {
    default: "BKS Gas & Heating | Gas Safe Engineer West London",
    template: "%s | BKS Gas & Heating",
  },
  description:
    "Gas Safe registered heating engineer in West London. Boiler installation, servicing, plumbing repairs and bathroom fitting across West London, Surrey, Buckinghamshire and Hertfordshire. Gas Safe No. 973556.",
  keywords: [
    "boiler installation West London",
    "boiler service West London",
    "Gas Safe engineer West London",
    "plumber West Drayton",
    "heating engineer West London",
    "bathroom installation West London",
    "BKS Gas Heating",
    "boiler repair Uxbridge",
    "Gas Safe registered engineer",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "BKS Gas & Heating",
    images: [{ url: "/images/van-side.jpg", width: 1200, height: 630, alt: "BKS Gas & Heating — West London" }],
  },
  alternates: {
    canonical: "/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BKS Gas & Heating",
  url: "https://bksgasandheating.com",
  telephone: "07464420695",
  email: "bksgas@outlook.com",
  description: "Gas Safe registered heating engineer (No. 973556) based in West Drayton. Boiler installation and servicing, plumbing repairs and bathroom fitting across West London, Surrey, Buckinghamshire and Hertfordshire.",
  sameAs: [
    "https://www.instagram.com/bksgasheating",
    "https://www.facebook.com/share/18hiaNi3QD/",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "96 Thornton Avenue, Uxbridge",
    addressLocality: "West Drayton",
    addressRegion: "London",
    postalCode: "UB7 9JY",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.506,
    longitude: -0.472,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: [
    "West London", "West Drayton", "Uxbridge", "Hayes", "Ealing", "Hounslow",
    "Slough", "Windsor", "Richmond", "Kingston upon Thames", "Guildford",
    "Woking", "Surrey", "Buckinghamshire", "Hertfordshire",
  ],
  priceRange: "££",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg text-ink">
        <StickyBar />
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
