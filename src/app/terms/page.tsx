import { BUSINESS } from "@/lib/constants";

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-950 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase">Legal</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-[1.1] tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-white/50 text-lg mt-5 leading-relaxed max-w-2xl">
            The terms that apply when you use this website or book work with{" "}
            {BUSINESS.name}.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-neutral-700 space-y-10">
          <p className="text-sm text-neutral-400">Last updated: 30 August 2026</p>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Using this website</h2>
            <p className="leading-relaxed">
              This website is provided by {BUSINESS.name} ({BUSINESS.address.full}) for
              information about our services and to allow you to make enquiries. Content is
              provided for general information only and does not constitute a formal quote.
              All repair and servicing prices are confirmed directly with you before work
              begins.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Enquiries and bookings</h2>
            <p className="leading-relaxed">
              Submitting our contact form or calling us does not automatically book an
              appointment. All bookings are confirmed by us directly, by phone or email. Please
              provide accurate vehicle and contact details so we can respond correctly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Servicing and repair work</h2>
            <p className="leading-relaxed">
              Where possible, we will provide a quote before carrying out chargeable work. Any
              additional work identified once your vehicle is with us will be discussed and
              agreed with you before proceeding. Estimates may vary once a fault has been fully
              diagnosed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Intellectual property</h2>
            <p className="leading-relaxed">
              The text, images and branding on this website belong to {BUSINESS.name} unless
              otherwise stated and may not be reproduced without permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Liability</h2>
            <p className="leading-relaxed">
              While we take care to keep information on this site accurate and up to date, we
              make no guarantee that it is complete or error-free, and we are not liable for
              any loss arising from reliance on it. This does not affect your statutory rights.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Governing law</h2>
            <p className="leading-relaxed">
              These terms are governed by the laws of Scotland, and any disputes will be
              subject to the exclusive jurisdiction of the Scottish courts.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Contact</h2>
            <p className="leading-relaxed">
              Questions about these terms? Contact us at{" "}
              <a href={`mailto:${BUSINESS.email}`} className="text-primary hover:underline">
                {BUSINESS.email}
              </a>{" "}
              or{" "}
              <a href={BUSINESS.phoneHref} className="text-primary hover:underline">
                {BUSINESS.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
