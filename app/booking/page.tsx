import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import BookingEmbed from "./BookingEmbed";

export const metadata: Metadata = {
  title: "Book Online | NJ Plumbing & Heating Bedford",
  description:
    "Book a plumbing, drainage or heating visit online with NJ Plumbing & Heating. Choose a date and time that suits you. Covering Bedford and Bedfordshire.",
  alternates: { canonical: "/booking" },
  openGraph: { url: "https://njplumbingheating.co.uk/booking" },
};

export default function BookingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://njplumbingheating.co.uk" },
          { name: "Book Online", url: "https://njplumbingheating.co.uk/booking" },
        ]}
      />
      <section className="bg-brand text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Book Online</span>
          </nav>
          <h1 className="text-5xl font-extrabold mb-4">Book a Visit</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Choose a date and time online. We&apos;ll confirm your booking straight away.
          </p>
        </div>
      </section>
      <BookingEmbed />
    </>
  );
}
