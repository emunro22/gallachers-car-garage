"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 bg-neutral-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition text-neutral-900"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 bg-neutral-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition text-neutral-900"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 bg-neutral-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition text-neutral-900"
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Service Required
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full px-4 py-3 bg-neutral-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition text-neutral-900"
          >
            <option value="">Select a service</option>
            <option value="Diagnostics">Diagnostics</option>
            <option value="Servicing">Servicing</option>
            <option value="Brakes">Brakes</option>
            <option value="Diagnostics">Diagnostics</option>
            <option value="Clutch Repair">Clutch Repair</option>
            <option value="Timing Belt">Timing Belt / Wet Belt</option>
            <option value="Suspension">Suspension</option>
            <option value="Exhaust">Exhaust</option>
            <option value="Engine Work">Engine Work</option>
            <option value="Tyres & Batteries">Tyres &amp; Batteries</option>
            <option value="Car/Van Repair">Car / Van Repair</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 bg-neutral-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition resize-none text-neutral-900"
          placeholder="Tell us about your vehicle and what you need..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-6 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Enquiry"}
      </button>

      {status === "sent" && (
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
          <p className="text-primary font-medium">
            Thank you! We&apos;ll get back to you as soon as possible.
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
          <p className="text-red-600 font-medium">
            Something went wrong. Please call us on 01698 711111 instead.
          </p>
        </div>
      )}
    </motion.form>
  );
}
