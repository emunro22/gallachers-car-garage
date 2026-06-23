"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BUSINESS, REVIEWS } from "@/lib/constants";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

interface ServiceDetailPageProps {
  title: string;
  heroImage: string;
  intro: string;
  paragraphs: string[];
  bulletPoints: string[];
  faqs: { question: string; answer: string }[];
}

export default function ServiceDetailPage({
  title,
  heroImage,
  intro,
  paragraphs,
  bulletPoints,
  faqs,
}: ServiceDetailPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-950 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/70 to-neutral-950/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fade}>
              <Link href="/services" className="inline-flex items-center gap-1.5 text-white/50 text-sm hover:text-white/80 transition-colors mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                All Services
              </Link>
            </motion.div>
            <motion.h1 variants={fade} className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              {title}
            </motion.h1>
            <motion.p variants={fade} className="mt-5 text-lg text-white/60 leading-relaxed max-w-xl">
              {intro}
            </motion.p>
            <motion.div variants={fade} className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-center">
                Get a Free Quote
              </Link>
              <a href={BUSINESS.phoneHref} className="bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-center flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BUSINESS.phone}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-5">
            {paragraphs.map((p, i) => (
              <motion.p key={i} variants={fade} className="text-neutral-600 text-lg leading-relaxed">
                {p}
              </motion.p>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-12">
            <motion.h2 variants={fade} className="text-2xl font-extrabold text-neutral-900 mb-6">
              What&apos;s Included
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bulletPoints.map((point, i) => (
                <motion.div key={i} variants={fade} className="flex items-start gap-3 bg-neutral-50 rounded-xl p-4">
                  <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 text-sm">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fade} className="text-2xl font-extrabold text-neutral-900 mb-8">
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={fade} className="py-6 border-b border-neutral-200 last:border-0">
                  <h3 className="font-semibold text-neutral-900 text-lg">{faq.question}</h3>
                  <p className="text-neutral-500 mt-2 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Review */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-neutral-500 text-sm">{BUSINESS.rating}/5 from {BUSINESS.reviewCount} reviews</span>
          </div>
          <blockquote className="text-neutral-700 text-lg italic max-w-xl mx-auto">
            &ldquo;{REVIEWS[0].text}&rdquo;
          </blockquote>
          <p className="text-neutral-400 text-sm mt-3">&mdash; {REVIEWS[0].name}, Google Review</p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase">Ready to Book?</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">Get in touch today</h2>
          <p className="text-white/50 mt-3 text-lg">Free, no-obligation quotes. Call us or send an enquiry.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Send Enquiry
            </Link>
            <a href={BUSINESS.phoneHref} className="bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
