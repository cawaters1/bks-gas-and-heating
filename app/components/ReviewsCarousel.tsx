"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { GOOGLE_BUSINESS_URL } from "../lib/constants";

const reviews = [
  {
    name: "Sarah M.",
    location: "West Drayton",
    date: "2 weeks ago",
    text: "Called Bailey out for a boiler breakdown on a cold evening. Had it diagnosed and back on within the hour. Gas Safe certificate left on the day. Brilliant service.",
  },
  {
    name: "James K.",
    location: "Uxbridge",
    date: "1 month ago",
    text: "BKS fitted our new Vaillant boiler from scratch. Immaculate job — the pipework is spotless and everything was commissioned properly. Very professional from start to finish.",
  },
  {
    name: "Emma R.",
    location: "Ealing",
    date: "3 weeks ago",
    text: "Had our full bathroom redesigned and fitted by Bailey. The finish is incredible — high-end materials, gold fixtures, exactly what we wanted. On time, on budget.",
  },
  {
    name: "David T.",
    location: "Richmond",
    date: "1 month ago",
    text: "Annual boiler service done properly. Thorough, tidy, all the paperwork sorted on the spot. Reliable and trustworthy engineer.",
  },
  {
    name: "Claire H.",
    location: "Hounslow",
    date: "2 months ago",
    text: "Emergency call-out — boiler packed in on a January morning. Bailey was with us within 2 hours. Fixed same day. Can't thank him enough.",
  },
];

function GoogleGLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = reviews.length;
  const visibleCount = 3;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next, paused]);

  const visibleIndices = Array.from({ length: visibleCount }, (_, i) => (current + i) % total);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {visibleIndices.map((idx, pos) => {
          const review = reviews[idx];
          return (
            <div
              key={`${idx}-${pos}`}
              className="bg-surface rounded-2xl p-6 border border-border-dark flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">{review.name}</p>
                    <p className="text-steel-muted text-xs">
                      {review.location} &middot; {review.date}
                    </p>
                  </div>
                </div>
                <GoogleGLogo />
              </div>

              <StarRating />

              <p className="text-steel text-sm leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => { prev(); setPaused(true); }}
            className="p-2 rounded-full bg-surface border border-border-dark hover:bg-elevated transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} className="text-brand" />
          </button>
          <button
            onClick={() => { next(); setPaused(true); }}
            className="p-2 rounded-full bg-surface border border-border-dark hover:bg-elevated transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={20} className="text-brand" />
          </button>
        </div>

        <div className="flex gap-1.5">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setPaused(true); }}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-brand" : "bg-border-emphasis"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        <a
          href={GOOGLE_BUSINESS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-light text-sm font-semibold hover:text-ink transition-colors"
        >
          View all on Google &rarr;
        </a>
      </div>
    </div>
  );
}
