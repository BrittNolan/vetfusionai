"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-lg border border-paper/20 bg-paper/10 px-4 py-3 text-[0.95rem] text-paper placeholder:text-paper/40 outline-none transition focus:border-copper-soft focus:bg-paper/15";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");

    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      org: (form.elements.namedItem("org") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      // honeypot — bots fill this; humans never see it
      company_website: (form.elements.namedItem("company_website") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setError("Network error — please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="reveal mx-auto mt-10 max-w-xl rounded-2xl border border-paper/15 bg-paper/5 p-8 text-center">
        <p className="font-display text-2xl font-medium text-paper">
          Thank you — we&rsquo;ll be in touch.
        </p>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-paper/70">
          Your message is on its way. We&rsquo;ll follow up to talk through your
          records workflow and next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="reveal mx-auto mt-10 max-w-xl text-left"
      noValidate
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="sr-only">
            Your name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="sr-only">
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="cf-org" className="sr-only">
          Practice / organization
        </label>
        <input
          id="cf-org"
          name="org"
          type="text"
          autoComplete="organization"
          placeholder="Practice, rescue, shelter, or sanctuary (optional)"
          className={fieldClass}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="cf-message" className="sr-only">
          How can we help?
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your current records workflow and what you’re hoping to set up."
          className={`${fieldClass} resize-y`}
        />
      </div>

      {/* honeypot: hidden from humans, catches bots */}
      <div aria-hidden className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="cf-company-website">Company website</label>
        <input
          id="cf-company-website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <p className="mt-4 text-[0.85rem] text-copper-soft" role="alert">
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-copper px-7 py-3 text-[0.9rem] font-semibold text-paper transition duration-200 hover:bg-copper-soft active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Request a setup conversation"}
        </button>
      </div>
      <p className="mt-4 text-center font-mono text-[0.7rem] tracking-wide text-paper/55">
        We&rsquo;ll reply by email — no spam, ever.
      </p>
    </form>
  );
}
