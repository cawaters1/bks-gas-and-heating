import type { Metadata } from "next";
import "./globals.css";
import StickyBar from "./components/StickyBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://njplumbingheating.co.uk"),
  title: {
    default: "NJ Plumbing & Heating Bedford | Plumber Bedford",
    template: "%s | NJ Plumbing & Heating Bedford",
  },
  description:
    "Bedford's trusted plumber. Plumbing repairs, drainage, bathrooms and heating across Bedford and Bedfordshire. Call 07927 910665.",
  keywords: [
    "plumber Bedford",
    "emergency plumber Bedford",
    "drain unblocking Bedford",
    "plumbing services Bedford",
    "heating Bedford",
    "bathroom installation Bedford",
    "NJ Plumbing",
    "NJ Plumbing Heating Bedford",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "NJ Plumbing & Heating Bedford",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "NJ Plumbing & Heating",
  url: "https://njplumbingheating.co.uk",
  telephone: "07927910665",
  email: "Nicholasjudge21@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bedford",
    addressRegion: "Bedfordshire",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.136,
    longitude: -0.467,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    "Bedford",
    "Kempston",
    "Ampthill",
    "Flitwick",
    "Sandy",
    "Biggleswade",
    "Bedfordshire",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
  },
  priceRange: "££",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <StickyBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
