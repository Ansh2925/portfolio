"use client";

import { FormEvent, useState } from "react";
import MagneticButton from "@/components/MagneticButton";
import { profile } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      setError("Please complete name, email, and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email.");
      return;
    }
    setError("");
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="display mt-4 text-5xl md:text-7xl">Have an idea worth building?</h2>
          <p className="mt-5 text-xl text-mute">Let’s turn it into something real.</p>
          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <a className="rounded-full border border-white/10 px-4 py-2 hover:border-gold" href={profile.githubUrl}>
              GitHub
            </a>
            <a className="rounded-full border border-white/10 px-4 py-2 hover:border-gold" href={profile.linkedinUrl}>
              LinkedIn
            </a>
            <a className="rounded-full border border-white/10 px-4 py-2 hover:border-gold" href="#contact-form">
              Email
            </a>
          </div>
        </div>
        <form id="contact-form" onSubmit={onSubmit} className="glass rounded-[2rem] p-6">
          {sent ? (
            <p className="font-display text-3xl">Received. Continue the conversation on GitHub.</p>
          ) : (
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm">
                Name
                <input name="name" autoComplete="name" required />
              </label>
              <label className="grid gap-2 text-sm">
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label className="grid gap-2 text-sm">
                Message
                <textarea name="message" rows={5} required />
              </label>
              {error ? <p className="text-sm text-gold">{error}</p> : null}
              <MagneticButton type="submit">Send Message</MagneticButton>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}