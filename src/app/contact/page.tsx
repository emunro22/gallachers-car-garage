"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { BUSINESS } from "@/lib/constants";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-950 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.p variants={fade} className="text-primary font-semibold text-sm tracking-wide uppercase">
              Get In Touch
            </motion.p>
            <motion.h1 variants={fade} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-[1.1] tracking-tight">
              Contact Us
            </motion.h1>
            <motion.p variants={fade} className="text-white/50 text-lg mt-5 leading-relaxed">
              Call us, email us, or fill in the form below. We&apos;ll get back
              to you as soon as possible.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-extrabold text-neutral-900 mb-6">Send Us an Enquiry</h2>
              <ContactForm />
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-950 rounded-2xl p-8 text-white">
                <h2 className="text-lg font-bold mb-6">Contact Details</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-medium tracking-wider uppercase">Phone</p>
                      <a href={BUSINESS.phoneHref} className="text-primary font-bold text-lg hover:underline mt-0.5 block">
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-medium tracking-wider uppercase">Email</p>
                      <a href={`mailto:${BUSINESS.email}`} className="text-white/80 hover:text-white mt-0.5 block transition-colors">
                        {BUSINESS.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-medium tracking-wider uppercase">Address</p>
                      <p className="text-white/80 mt-0.5">{BUSINESS.address.full}</p>
                      <a
                        href={BUSINESS.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary text-sm mt-1.5 hover:underline"
                      >
                        Get directions
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-medium tracking-wider uppercase">Opening Hours</p>
                      <div className="text-white/70 text-sm mt-1 space-y-0.5">
                        <p>{BUSINESS.hours.weekday}</p>
                        <p>{BUSINESS.hours.friday}</p>
                        <p>{BUSINESS.hours.weekend}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-neutral-900 mb-6">Our Location</h2>
          <p className="text-neutral-500 mb-6">
            We&apos;re tucked just off the main road in Blantyre — search
            &ldquo;Gallachers Car Garage&rdquo; on Google Maps for easy directions.
          </p>
          <div className="rounded-2xl overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2240.5!2d-4.0917!3d55.7917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888461c8b5a3a3b%3A0x7c1234567890!2sForrest+St%2C+Blantyre%2C+Glasgow+G72+0JP!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gallachers Car Garage Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
