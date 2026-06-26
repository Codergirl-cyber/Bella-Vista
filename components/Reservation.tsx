"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import FadeInSection from "./FadeInSection";

const timeSlots = [
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM",
];

const guestOptions = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests", "6 Guests", "7-10 Guests (Private Dining)", "10+ Guests (Events)"];

export default function Reservation() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", date: "", time: "", guests: "", occasion: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="reservation" className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=80&auto=format&fit=crop"
          alt="Restaurant interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* General dark overlay */}
    <div className="absolute inset-0 bg-dark-800/65" />

    {/* Extra darkness only behind the heading */}
    <div
      className="absolute top-0 left-0 right-0 h-[320px]"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.15), transparent)",
      }}
    />
  </div>
      

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader
          eyebrow="Book Your Evening"
          title="Reserve"
          titleItalic="a Table"
          subtitle="We look forward to welcoming you. For parties of 10 or more, please call us directly."
        />

        {submitted ? (
          <FadeInSection>
            <div className="max-w-lg mx-auto text-center py-16">
              <div className="w-16 h-16 border border-gold-500 flex items-center justify-center mx-auto mb-6 text-gold-500 text-2xl">
                ✓
              </div>
              <h3
                className="text-3xl font-light text-cream mb-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Reservation Requested
              </h3>
              <p className="text-cream/55 text-sm leading-relaxed" style={{ letterSpacing: "0.04em" }}>
                Thank you, {form.name.split(" ")[0]}. Our team will confirm your reservation by email within 2 hours. We look forward to your visit.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", date: "", time: "", guests: "", occasion: "" }); }}
                className="mt-8 border border-gold-500/40 text-gold-500 px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold-500 hover:text-dark-900 transition-all duration-300"
                style={{ letterSpacing: "0.2em" }}
              >
                Make Another Reservation
              </button>
            </div>
          </FadeInSection>
        ) : (
          <FadeInSection delay={0.1}>
            {/* <form onSubmit={handleSubmit} className="max-w-3xl mx-auto"> */}
             <div className="glass-panel max-w-4xl mx-auto mt-16 px-10 py-8 md:px-12 md:py-10">
             <form onSubmit={handleSubmit}>
           
  
       
              <div className="grid md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="md:col-span-1">
                  <label className="block eyebrow mb-2" style={{ fontSize: "0.6rem" }}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="form-input"
                  />
                </div>

                {/* Phone */}
                <div className="md:col-span-1">
                  <label className="block eyebrow mb-2" style={{ fontSize: "0.6rem" }}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (000) 000-0000"
                    className="form-input"
                  />
                </div>

                {/* Email */}
                <div className="md:col-span-2">
                  <label className="block eyebrow mb-2" style={{ fontSize: "0.6rem" }}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block eyebrow mb-2" style={{ fontSize: "0.6rem" }}>Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="form-input"
                    style={{ colorScheme: "dark" }}
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block eyebrow mb-2" style={{ fontSize: "0.6rem" }}>Preferred Time *</label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="" disabled>Select a time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t} className="bg-dark-800">{t}</option>
                    ))}
                  </select>
                </div>

                {/* Guests */}
                <div>
                  <label className="block eyebrow mb-2" style={{ fontSize: "0.6rem" }}>Number of Guests *</label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="" disabled>Select guests</option>
                    {guestOptions.map((g) => (
                      <option key={g} value={g} className="bg-dark-800">{g}</option>
                    ))}
                  </select>
                </div>

                {/* Occasion */}
                <div>
                  <label className="block eyebrow mb-2" style={{ fontSize: "0.6rem" }}>Special Occasion</label>
                  <input
                    type="text"
                    name="occasion"
                    value={form.occasion}
                    onChange={handleChange}
                    placeholder="Anniversary, Birthday, etc."
                    className="form-input"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center gap-4">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="relative w-full md:w-auto px-16 py-4 bg-gold-500 text-dark-900 text-xs font-medium tracking-widest uppercase overflow-hidden group disabled:opacity-60"
                  style={{ letterSpacing: "0.2em" }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="block w-4 h-4 border-2 border-dark-900/30 border-t-dark-900 rounded-full"
                      />
                      Confirming...
                    </span>
                  ) : (
                    <>
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-cream">
                        Request Reservation
                      </span>
                      <span className="absolute inset-0 bg-dark-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    </>
                  )}
                </motion.button>
                <p className="text-cream/30 text-center" style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}>
                  BY SUBMITTING YOU AGREE TO OUR RESERVATION POLICY · CANCELLATIONS ACCEPTED 24 HOURS IN ADVANCE
                </p>
              </div>
            </form>
            </div>
          </FadeInSection>
        )}
      </div>
    </section>
  );
}
