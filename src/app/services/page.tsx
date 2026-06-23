"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BUSINESS, SERVICES } from "@/lib/constants";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.06 } },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-950 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.p variants={fade} className="text-primary font-semibold text-sm tracking-wide uppercase">
              What We Do
            </motion.p>
            <motion.h1 variants={fade} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-[1.1] tracking-tight">
              Our Services
            </motion.h1>
            <motion.p variants={fade} className="text-white/50 text-lg mt-5 leading-relaxed">
              Full range of car and van repair services in Blantyre, South
              Lanarkshire. From MOTs and servicing to complete engine rebuilds.
              All makes and models, including light goods vehicles up to 3.5 tonnes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.slug}
                variants={fade}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-white flex flex-col sm:flex-row"
              >
                <div className="relative h-48 sm:h-auto sm:w-52 shrink-0 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 208px"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h2 className="text-xl font-bold text-neutral-900">{service.title}</h2>
                  <p className="text-neutral-500 mt-2 leading-relaxed text-sm">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-3 group-hover:gap-2 transition-all"
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

      {/* CTA */}
      <section className="relative py-20 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase">Not Sure What You Need?</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
            Give us a call
          </h2>
          <p className="text-white/50 mt-3 text-lg">
            We&apos;ll help diagnose the problem. Free advice, no obligation.
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
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
