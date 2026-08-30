"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

export const COOKIE_CONSENT_KEY = "cookie-consent";
export const COOKIE_CONSENT_EVENT = "cookie-consent-change";

export type ConsentValue = "accepted" | "rejected";

function subscribe(callback: () => void) {
  window.addEventListener(COOKIE_CONSENT_EVENT, callback);
  return () => window.removeEventListener(COOKIE_CONSENT_EVENT, callback);
}

function getSnapshot(): ConsentValue | null {
  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

function getServerSnapshot(): ConsentValue | null {
  return null;
}

export function useCookieConsent(): ConsentValue | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function setStoredConsent(value: ConsentValue) {
  window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT));
}

export default function CookieConsent() {
  const consent = useCookieConsent();

  if (consent !== null) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-neutral-950 text-white rounded-2xl shadow-2xl shadow-black/30 border border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm text-white/70 leading-relaxed">
          We use essential cookies to run this site, and, with your consent,
          analytics cookies to help us understand how visitors use it. See our{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setStoredConsent("rejected")}
            className="px-4 py-2.5 rounded-lg text-sm font-semibold text-white/70 hover:text-white border border-white/15 hover:bg-white/5 transition-colors"
          >
            Reject
          </button>
          <button
            onClick={() => setStoredConsent("accepted")}
            className="px-4 py-2.5 rounded-lg text-sm font-semibold bg-primary hover:bg-primary-dark text-white transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
