import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NJ Plumbing & Heating — Bedford",
  description: "Professional plumbing, heating and drainage services across Bedford and surrounding areas. Fast response, upfront pricing. Call 07927 910665.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
