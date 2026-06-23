"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BUSINESS } from "@/lib/constants";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-950 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.p variants={fade} className="text-primary font-semibold text-sm tracking-wide uppercase">
              About Us
            </motion.p>
            <motion.h1 variants={fade} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-[1.1] tracking-tight">
              Gallachers Car Garage
            </motion.h1>
            <motion.p variants={fade} className="text-white/50 text-lg mt-5 leading-relaxed">
              Your trusted local auto repair centre in Blantyre, South
              Lanarkshire. Honest service, fair prices, and expert mechanics.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fade} className="text-3xl font-extrabold text-neutral-900">
                Who We Are
              </motion.h2>
              <motion.p variants={fade} className="text-neutral-500 mt-4 text-lg leading-relaxed">
                Gallachers Car Garage is a family-run auto repair centre based
                in Blantyre, South Lanarkshire. Led by Darren Gallacher, our
                team of experienced mechanics has been serving the local
                community for years, building a reputation for honest, reliable
                and affordable vehicle repairs.
              </motion.p>
              <motion.p variants={fade} className="text-neutral-500 mt-4 text-lg leading-relaxed">
                We&apos;re proud to be an MOT-approved testing station and
                offer a comprehensive range of services for all makes and
                models of cars and vans, including light commercial vehicles up
                to 3.5 tonnes.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-800"
            >
              <Image
                src="/logo.jpg"
                alt="Gallachers Car Garage"
                fill
                className="object-contain p-8"
                quality={80}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fade} className="text-3xl font-extrabold text-neutral-900">
              What Sets Us Apart
            </motion.h2>
            <motion.div variants={fade} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "Honest & Transparent",
                  desc: "We tell you exactly what's wrong with your vehicle and give you a fair price. No hard sell, no inflated charges, no unnecessary work.",
                },
                {
                  title: "Experienced Team",
                  desc: "Our qualified mechanics have years of experience handling everything from routine servicing to complex engine rebuilds.",
                },
                {
                  title: "Competitive Prices",
                  desc: "Quality repairs don't have to break the bank. We offer some of the best prices in South Lanarkshire without cutting corners.",
                },
                {
                  title: "All Makes & Models",
                  desc: "From family hatchbacks to commercial vans, we work on all vehicle types. Diagnostics equipment for modern and older vehicles alike.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-7 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-neutral-900 text-lg">{item.title}</h3>
                  </div>
                  <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Location emphasis */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fade} className="text-3xl font-extrabold text-neutral-900">
              Where to Find Us
            </motion.h2>
            <motion.p variants={fade} className="text-neutral-500 mt-4 text-lg leading-relaxed">
              We&apos;re located at {BUSINESS.address.full}, just off the
              main road in Blantyre. While we&apos;re a little tucked away,
              we&apos;re easy to find once you know where to look — just
              search &ldquo;Gallachers Car Garage&rdquo; on Google Maps. Look
              for our blue building with the green Gallachers sign.
            </motion.p>
            <motion.p variants={fade} className="text-neutral-500 mt-4 text-lg leading-relaxed">
              We serve customers from across South Lanarkshire including
              Blantyre, Hamilton, Bothwell, Uddingston, Cambuslang, East
              Kilbride, Rutherglen, and the surrounding areas.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase">Ready to Book?</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
            Get in touch today
          </h2>
          <p className="text-white/50 mt-3 text-lg">
            Call us or send an enquiry. We&apos;re happy to help.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
