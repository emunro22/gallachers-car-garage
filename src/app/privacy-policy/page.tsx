import { BUSINESS } from "@/lib/constants";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-950 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase">Legal</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-[1.1] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-lg mt-5 leading-relaxed max-w-2xl">
            How {BUSINESS.name} collects, uses and protects your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-neutral-700 space-y-10">
          <p className="text-sm text-neutral-400">Last updated: 30 August 2026</p>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Who we are</h2>
            <p className="leading-relaxed">
              {BUSINESS.name} ({BUSINESS.address.full}) operates this website. We are the
              data controller for any personal information collected through it. If you have
              questions about this policy, contact us at{" "}
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

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">What we collect</h2>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>
                <strong>Enquiry form details</strong> — name, email address, phone number and
                any message you send us via our contact form, so we can respond to your enquiry
                or quote request.
              </li>
              <li>
                <strong>Analytics data</strong> — anonymised or pseudonymised information about
                how visitors use this site (e.g. pages viewed, general location, device type),
                collected via privacy-friendly analytics and, where you consent, Google
                Analytics.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">How we use it</h2>
            <p className="leading-relaxed">
              We use enquiry details only to respond to your message, provide quotes, and
              arrange servicing or repairs. We use analytics data to understand how our website
              is used and to improve it. We do not sell your personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Cookies</h2>
            <p className="leading-relaxed">
              This site uses essential cookies required for the site to function, and, only
              with your consent, analytics cookies that help us understand site usage. You can
              change your cookie preferences at any time by clearing your browser&apos;s local
              storage for this site, which will show the cookie banner again on your next visit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">How long we keep it</h2>
            <p className="leading-relaxed">
              Enquiry form submissions are kept only as long as necessary to deal with your
              enquiry and for our legitimate business record-keeping. Analytics data is
              retained in aggregated or anonymised form in line with the retention settings of
              the analytics provider used.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Your rights</h2>
            <p className="leading-relaxed">
              Under UK GDPR you have the right to access, correct, or request deletion of your
              personal data, and to object to or restrict how we use it. To exercise any of
              these rights, contact us using the details above. You also have the right to
              complain to the Information Commissioner&apos;s Office (ICO) at{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ico.org.uk
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Changes to this policy</h2>
            <p className="leading-relaxed">
              We may update this policy from time to time. Any changes will be posted on this
              page with an updated revision date.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
