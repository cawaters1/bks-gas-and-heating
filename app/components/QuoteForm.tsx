"use client";

import { useState } from "react";
import { CheckCircle, Phone, ChevronLeft } from "lucide-react";
import { PHONE, PHONE_HREF } from "../lib/constants";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const services = [
  "Boiler installation",
  "Boiler service/annual",
  "Boiler repair",
  "Gas safety certificate (CP12)",
  "Heating repair",
  "Plumbing repair",
  "Bathroom installation",
  "Emergency call-out",
  "Other",
];

interface FormData {
  service: string;
  description: string;
  postcode: string;
  name: string;
  phone: string;
  preferredDate: string;
}

export default function QuoteForm({ defaultService = "" }: { defaultService?: string }) {
  const [step, setStep] = useState(defaultService ? 2 : 1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<FormData>({
    service: defaultService,
    description: "",
    postcode: "",
    name: "",
    phone: "",
    preferredDate: "",
  });

  const progress = Math.min(step, 3);

  function selectService(s: string) {
    setData((d) => ({ ...d, service: s }));
    setStep(2);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          service: data.service,
          description: data.description,
          postcode: data.postcode,
          name: data.name,
          phone: data.phone,
          preferredDate: data.preferredDate || "Not specified",
          _subject: `New quote request from ${data.name} — ${data.service}`,
        }),
      });
      if (res.ok) {
        setStep(4);
      } else {
        setError("Something went wrong. Please call us directly on " + PHONE + ".");
      }
    } catch {
      setError("Something went wrong. Please call us directly on " + PHONE + ".");
    } finally {
      setSubmitting(false);
    }
  }

  if (step === 4) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-6">
        <CheckCircle size={56} className="text-green-400" />
        <div>
          <h3 className="text-2xl font-extrabold text-ink mb-2">Request received!</h3>
          <p className="text-steel">We&apos;ll call you back within the hour.</p>
        </div>
        <a
          href={PHONE_HREF}
          className="flex items-center gap-2 bg-brand text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-brand-light transition-colors"
        >
          <Phone size={20} />
          Call {PHONE}
        </a>
      </div>
    );
  }

  const inputClass =
    "w-full bg-elevated border border-border-dark rounded-xl text-ink placeholder:text-steel-muted px-4 py-3 focus:outline-none focus:border-brand transition-colors";

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-steel text-sm">Step {Math.min(step, 3)} of 3</span>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                s <= progress ? "bg-brand" : "bg-border-dark"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div>
          <h3 className="text-ink font-bold text-lg mb-4">What service do you need?</h3>
          <div className="grid grid-cols-2 gap-3">
            {services.map((s) => (
              <button
                key={s}
                onClick={() => selectService(s)}
                className="bg-elevated hover:bg-border-emphasis border border-border-dark hover:border-brand text-ink text-sm font-medium rounded-xl px-4 py-3 text-left transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div>
          <h3 className="text-ink font-bold text-lg mb-4">Describe the job</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-steel text-sm mb-1">Job description</label>
              <textarea
                rows={4}
                value={data.description}
                onChange={(e) => setData((d) => ({ ...d, description: e.target.value }))}
                placeholder="Tell us what needs doing..."
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-steel text-sm mb-1">Postcode</label>
              <input
                type="text"
                value={data.postcode}
                onChange={(e) => setData((d) => ({ ...d, postcode: e.target.value }))}
                placeholder="e.g. UB7 9JY"
                className={inputClass}
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-1 text-steel hover:text-ink text-sm transition-colors"
              >
                <ChevronLeft size={16} />
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!data.description.trim()}
                className="flex-1 bg-brand text-white font-bold py-3 rounded-xl hover:bg-brand-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h3 className="text-ink font-bold text-lg mb-4">Your details</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-steel text-sm mb-1">Full name</label>
              <input
                type="text"
                required
                value={data.name}
                onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-steel text-sm mb-1">Phone number</label>
              <input
                type="tel"
                required
                value={data.phone}
                onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
                placeholder="Your phone number"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-steel text-sm mb-1">
                Preferred date (optional)
              </label>
              <input
                type="date"
                value={data.preferredDate}
                onChange={(e) => setData((d) => ({ ...d, preferredDate: e.target.value }))}
                className={inputClass}
              />
            </div>
            {error && (
              <p className="text-red-300 text-sm bg-red-900/30 border border-red-800 rounded-xl px-4 py-3">{error}</p>
            )}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex items-center gap-1 text-steel hover:text-ink text-sm transition-colors"
              >
                <ChevronLeft size={16} />
                Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-brand text-white font-bold py-3 rounded-xl hover:bg-brand-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending…" : "Request Free Quote"}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
