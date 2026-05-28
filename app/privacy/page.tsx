import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL, EMAIL_HREF } from "../lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | NJ Plumbing & Heating",
  description: "Privacy policy for NJ Plumbing & Heating. How we collect, use and protect your personal data.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-brand transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span>Privacy Policy</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: May 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-sm text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">1. Who we are</h2>
            <p>
              NJ Plumbing &amp; Heating is a sole trader business operated by Nicholas Judge,
              based at 96 Hillesden Avenue, Bedford, Bedfordshire. We provide plumbing, drainage,
              bathroom and heating services across Bedford and the surrounding areas.
            </p>
            <p className="mt-2">
              For any data-related queries, contact us at{" "}
              <a href={EMAIL_HREF} className="text-brand underline">{EMAIL}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">2. What data we collect</h2>
            <p>When you use our website we may collect:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your name and phone number (when you submit a quote request or contact form)</li>
              <li>Your email address (if provided)</li>
              <li>Your postcode or town</li>
              <li>A description of the work you need</li>
              <li>Your preferred appointment date (if provided)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">3. How we use your data</h2>
            <p>We use the information you provide solely to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Respond to your enquiry or quote request</li>
              <li>Book and manage appointments</li>
              <li>Contact you about the job you have requested</li>
            </ul>
            <p className="mt-2">
              We do not use your data for marketing purposes without your explicit consent.
              We do not sell or share your data with third parties for commercial use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">4. Legal basis</h2>
            <p>
              We process your personal data on the basis of legitimate interests (responding to
              your enquiry) and, where you book an appointment, on the basis of performing a
              contract with you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">5. How long we keep your data</h2>
            <p>
              We retain contact details and job information for up to 2 years for warranty
              and record-keeping purposes. After this period, your data is securely deleted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">6. Third-party services</h2>
            <p>Our website uses the following third-party services which may process your data:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Formspree</strong> — processes quote form submissions and forwards them to us by email</li>
              <li><strong>Calendly</strong> — used for online booking; governed by Calendly&apos;s own privacy policy</li>
              <li><strong>Google Maps</strong> — embedded maps on our contact and areas pages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">7. Your rights</h2>
            <p>Under UK GDPR you have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, email us at{" "}
              <a href={EMAIL_HREF} className="text-brand underline">{EMAIL}</a>. We will
              respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">8. Cookies</h2>
            <p>
              This website does not use tracking or advertising cookies. We do not use Google
              Analytics or any similar analytics tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">9. Contact</h2>
            <p>
              If you have any questions about this policy or a complaint about how we handle
              your data, please email{" "}
              <a href={EMAIL_HREF} className="text-brand underline">{EMAIL}</a>.
            </p>
            <p className="mt-2">
              You also have the right to lodge a complaint with the Information Commissioner&apos;s
              Office (ICO) at{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline"
              >
                ico.org.uk
              </a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
