"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BUSINESS, SERVICES, REVIEWS } from "@/lib/constants";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative min-h-[90vh] flex items-center bg-neutral-950 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-garage.jpg"
            alt="Car repair workshop"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/75 to-neutral-950/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
          <div className="max-w-2xl">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              {/* Badge */}
              <motion.div
                variants={fade}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6"
              >
                <Stars />
                <span className="text-white/70 text-sm">
                  {BUSINESS.rating}/5 &middot; {BUSINESS.reviewCount} verified reviews
                </span>
              </motion.div>

              <motion.h1
                variants={fade}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
              >
                Blantyre&apos;s Trusted
                <br />
                <span className="text-primary">Auto Repair</span> Centre
              </motion.h1>

              <motion.p
                variants={fade}
                className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed max-w-xl"
              >
                Repairs, servicing &amp; MOT testing you can trust. Honest work
                at fair prices — for cars and light commercial vehicles up to 3.5t.
              </motion.p>

              <motion.div
                variants={fade}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-lg text-base transition-colors text-center"
                >
                  Book Now
                </Link>
                <a
                  href={BUSINESS.phoneHref}
                  className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-white font-semibold px-7 py-3.5 rounded-lg text-base transition-colors text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {BUSINESS.phone}
                </a>
              </motion.div>
            </motion.div>

            {/* Stat badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { value: "MOT", label: "Approved Station" },
                { value: "4.8★", label: "Customer Rating" },
                { value: "All", label: "Makes & Models" },
                { value: "3.5t", label: "Light Goods" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-center"
                >
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────── SERVICES ───────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p variants={fade} className="text-primary font-semibold text-sm tracking-wide uppercase">
              What We Do
            </motion.p>
            <motion.h2 variants={fade} className="text-3xl md:text-4xl font-extrabold text-neutral-900 mt-2">
              Our Services
            </motion.h2>
            <motion.p variants={fade} className="text-neutral-500 mt-3 max-w-2xl text-lg">
              From MOTs and servicing to full engine rebuilds — quality repairs at
              honest prices for cars and vans.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.slug}
                variants={fade}
                className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-white"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-neutral-900">{service.title}</h3>
                  <p className="text-neutral-500 text-sm mt-2 leading-relaxed">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4 group-hover:gap-2 transition-all"
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────── WHY US ───────── */}
      <section className="py-20 md:py-28 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fade} className="text-primary font-semibold text-sm tracking-wide uppercase">
                Why Choose Us
              </motion.p>
              <motion.h2 variants={fade} className="text-3xl md:text-4xl font-extrabold mt-2">
                Honest Work at Fair Prices
              </motion.h2>
              <motion.p variants={fade} className="text-white/50 mt-4 text-lg leading-relaxed">
                We tell you exactly what&apos;s wrong and fix it. No hard sell, no
                inflated charges, no unnecessary work. Just straightforward
                service from mechanics you can trust.
              </motion.p>

              <motion.div variants={fade} className="mt-8 space-y-5">
                {[
                  {
                    title: "Transparent Pricing",
                    desc: "Full quote before any work begins. No hidden costs, no surprises.",
                  },
                  {
                    title: "Experienced Mechanics",
                    desc: "Qualified technicians handling everything from routine services to complex repairs.",
                  },
                  {
                    title: "All Makes & Models",
                    desc: "Cars, vans, and light commercial vehicles up to 3.5 tonnes. Every brand welcome.",
                  },
                  {
                    title: "MOT Approved Station",
                    desc: "Official MOT testing with honest assessments and competitive repair prices.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-white/40 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-800">
                <Image
                  src="/logo.jpg"
                  alt="Gallachers Car Garage"
                  fill
                  className="object-contain p-8"
                  quality={80}
                />
              </div>
              {/* Floating review badge */}
              <div className="absolute -bottom-6 -left-4 md:left-auto md:-right-6 bg-white rounded-xl shadow-xl shadow-black/15 p-5 max-w-[260px]">
                <Stars />
                <p className="text-neutral-900 text-sm font-medium mt-2">
                  &ldquo;Best garage around. Lovely friendly people and great prices.&rdquo;
                </p>
                <p className="text-neutral-500 text-xs mt-1.5">— Emma, Google Review</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────── REVIEWS ───────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fade} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <p className="text-primary font-semibold text-sm tracking-wide uppercase">
                  Reviews
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mt-2">
                  What Our Customers Say
                </h2>
              </div>
              <div className="flex items-center gap-3 bg-neutral-50 rounded-xl px-5 py-3">
                <div className="text-3xl font-extrabold text-neutral-900">{BUSINESS.rating}</div>
                <div>
                  <Stars />
                  <p className="text-neutral-500 text-xs mt-0.5">{BUSINESS.reviewCount} Google reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {REVIEWS.slice(0, 6).map((review, i) => (
              <motion.div
                key={i}
                variants={fade}
                className="bg-neutral-50 rounded-2xl p-6 border border-gray-100"
              >
                <Stars />
                <p className="text-neutral-800 text-sm leading-relaxed mt-3">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-neutral-900 text-sm font-semibold">{review.name}</p>
                    <p className="text-neutral-500 text-xs">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Read all reviews
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── LOCATION ───────── */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fade} className="text-primary font-semibold text-sm tracking-wide uppercase">
              Find Us
            </motion.p>
            <motion.h2 variants={fade} className="text-3xl md:text-4xl font-extrabold text-neutral-900 mt-2">
              Our Location
            </motion.h2>
            <motion.p variants={fade} className="text-neutral-500 mt-3 max-w-2xl mx-auto">
              We&apos;re tucked just off the main road in Blantyre. Search
              &ldquo;Gallachers Car Garage&rdquo; on Google Maps or use the
              directions below.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 rounded-2xl overflow-hidden h-[400px] md:h-[450px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2240.5!2d-4.0917!3d55.7917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888461c8b5a3a3b%3A0x7c1234567890!2sForrest+St%2C+Blantyre%2C+Glasgow+G72+0JP!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gallachers Car Garage - Forrest Street, Blantyre"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 bg-neutral-950 rounded-2xl p-8 text-white flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-2">Address</p>
                  <p className="font-semibold text-lg">{BUSINESS.address.full}</p>
                  <a
                    href={BUSINESS.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary text-sm mt-2 hover:underline"
                  >
                    Get directions
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div>
                  <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-2">Phone</p>
                  <a href={BUSINESS.phoneHref} className="text-xl font-bold text-primary hover:underline">
                    {BUSINESS.phone}
                  </a>
                </div>

                <div>
                  <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-2">Email</p>
                  <a href={`mailto:${BUSINESS.email}`} className="text-white/80 hover:text-white transition-colors">
                    {BUSINESS.email}
                  </a>
                </div>

                <div>
                  <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-2">Opening Hours</p>
                  <div className="space-y-1 text-sm text-white/70">
                    <p>{BUSINESS.hours.weekday}</p>
                    <p>{BUSINESS.hours.saturday}</p>
                    <p>{BUSINESS.hours.sunday}</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-white/30 mt-8 leading-relaxed">
                Serving Blantyre, Hamilton, Bothwell, Uddingston,
                Cambuslang, East Kilbride &amp; South Lanarkshire.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="relative py-20 md:py-24 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fade} className="text-primary font-semibold text-sm tracking-wide uppercase">
              Ready to Book?
            </motion.p>
            <motion.h2 variants={fade} className="text-3xl md:text-5xl font-extrabold text-white mt-3">
              Get in touch today
            </motion.h2>
            <motion.p variants={fade} className="text-white/50 mt-4 text-lg max-w-xl mx-auto">
              Book online anytime or call us during opening hours. Free quotes,
              no obligation.
            </motion.p>
            <motion.div
              variants={fade}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                Send an Enquiry
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {BUSINESS.phone}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
