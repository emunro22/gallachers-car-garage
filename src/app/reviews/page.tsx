"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BUSINESS, REVIEWS } from "@/lib/constants";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.05 } },
};

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-950 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.p variants={fade} className="text-primary font-semibold text-sm tracking-wide uppercase">
              Customer Reviews
            </motion.p>
            <motion.h1 variants={fade} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-[1.1] tracking-tight">
              What People Say
            </motion.h1>

            <motion.div variants={fade} className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3">
                <span className="text-3xl font-extrabold">{BUSINESS.rating}</span>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/40 text-xs mt-0.5">{BUSINESS.reviewCount} Google reviews</p>
                </div>
              </div>
            </motion.div>

            <motion.p variants={fade} className="text-white/50 text-lg mt-5">
              Don&apos;t just take our word for it — hear from real customers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                variants={fade}
                className="bg-neutral-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className={`w-4 h-4 ${j < review.rating ? "text-yellow-400" : "text-gray-200"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
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
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase">Experience the Difference</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
            Join our happy customers
          </h2>
          <p className="text-white/50 mt-3 text-lg">
            Book your repair today. Free quotes, no obligation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BUSINESS.phoneHref}
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
