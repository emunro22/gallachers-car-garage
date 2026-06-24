import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

const SERVICE_LINKS = [
  { label: "Diagnostics", href: "/diagnostics-blantyre" },
  { label: "Car Servicing", href: "/car-servicing-blantyre" },
  { label: "Brake Repairs", href: "/brake-repair-blantyre" },
  { label: "Diagnostics", href: "/diagnostics-blantyre" },
  { label: "Clutch Repairs", href: "/clutch-repair-blantyre" },
  { label: "Timing Belts", href: "/timing-belt-replacement-blantyre" },
  { label: "Suspension", href: "/suspension-repair-blantyre" },
  { label: "Engine Work", href: "/engine-repair-blantyre" },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "All Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
  { label: "Car Repair Near Me", href: "/car-repair-near-me" },
  { label: "Garage Near Me", href: "/garage-near-me-blantyre" },
];

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-700 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.jpg"
              alt="Gallachers Car Garage"
              width={180}
              height={60}
              className="h-10 w-auto mb-4"
            />
            <p className="text-neutral-500 text-sm leading-relaxed mb-5">
              Blantyre&apos;s trusted auto repair centre. Honest, expert vehicle
              care for cars and light commercial vehicles.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-neutral-400 text-xs">
                {BUSINESS.rating}/5.0 &middot; {BUSINESS.reviewCount} reviews
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-500 hover:text-neutral-900 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-500 hover:text-neutral-900 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-4">
              Contact
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <a
                  href={BUSINESS.phoneHref}
                  className="text-primary font-semibold text-base hover:underline"
                >
                  {BUSINESS.phone}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  {BUSINESS.email}
                </a>
              </div>
              <div>
                <a
                  href={BUSINESS.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-neutral-900 transition-colors leading-relaxed"
                >
                  {BUSINESS.address.full}
                </a>
              </div>
              <div className="pt-2 border-t border-neutral-200">
                <p className="text-neutral-400 text-xs font-medium tracking-wider uppercase mb-2">
                  Opening Hours
                </p>
                <div className="text-neutral-500 space-y-1">
                  <p>{BUSINESS.hours.weekday}</p>
                  <p>{BUSINESS.hours.friday}</p>
                  <p>{BUSINESS.hours.weekend}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-neutral-400 text-xs">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-neutral-400 text-xs">
            Auto Repair Centre &middot; Blantyre, South Lanarkshire
          </p>
        </div>
      </div>
    </footer>
  );
}
