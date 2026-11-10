"use client";

import { useState, type FormEvent, type HTMLInputTypeAttribute } from "react";
import { useBooking } from "./BookingContext";

const perks = ["30-minute strategy call", "Custom quote, no commitment", "Live in as little as two weeks"];

const fields: {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "url";
}[] = [
  { name: "name", label: "Full name", type: "text", placeholder: "Jane Whitmore", required: true, autoComplete: "name" },
  { name: "email", label: "Email", type: "email", placeholder: "jane@brokerage.com", required: true, autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+1 (305) 000-0000", autoComplete: "tel" },
  { name: "market", label: "Your market", type: "text", placeholder: "Miami Beach, FL" },
  // Plain text so "janesmith.com" passes; type="url" would demand a scheme.
  { name: "website", label: "Current website (optional)", type: "text", placeholder: "https://", autoComplete: "url", inputMode: "url" },
];

const roles = ["Agent", "Team lead", "Brokerage", "Developer / new development"];

type Status = "idle" | "sending" | "sent" | "error";

export default function LeadForm() {
  const { plan } = useBooking();
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, plan }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="start" className="lead-section">
      <div className="container lead-box">
        <div className="lead-panel tone-dark">
          <p className="eyebrow" style={{ marginBottom: 18, fontSize: 11 }}>
            {plan ? `${plan} plan · Book a call` : "Book a call · Get a quote"}
          </p>
          <h2 id="start-title" className="title" style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: "normal" }}>
            Let’s talk about <em>your website.</em>
          </h2>
          <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.7, color: "var(--on-dark-body)" }}>
            Tell us about your business and market. We’ll get back to you within 24 hours to book a 30-minute
            call and send a custom quote.
          </p>
          <ul style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14, fontSize: 15, color: "var(--on-dark-soft)" }}>
            {perks.map((perk) => (
              <li key={perk} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span aria-hidden="true" style={{ width: 24, height: 1, flexShrink: 0, background: "var(--gold-light)" }} />
                {perk}
              </li>
            ))}
          </ul>
        </div>

        <form className="lead-form" onSubmit={handleSubmit} aria-labelledby="start-title">
          {status === "sent" ? (
            <div role="status" style={{ gridColumn: "1 / -1", padding: "60px 0", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--display)", fontSize: 44 }}>Thank you.</p>
              <p style={{ marginTop: 12, fontSize: 16, color: "var(--text-muted)" }}>
                We’ll reach out within 24 hours to book your call.
              </p>
            </div>
          ) : (
            <>
              {fields.map((f) => (
                <label key={f.name} className="field">
                  {f.label}
                  <input
                    className="field-input"
                    name={f.name}
                    type={f.type}
                    placeholder={f.placeholder}
                    required={f.required}
                    autoComplete={f.autoComplete}
                    inputMode={f.inputMode}
                  />
                </label>
              ))}
              <label className="field">
                I am a…
                <select className="field-input" name="role" defaultValue={roles[0]}>
                  {roles.map((role) => (
                    <option key={role}>{role}</option>
                  ))}
                </select>
              </label>

              <div
                style={{
                  gridColumn: "1 / -1",
                  marginTop: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 20,
                  flexWrap: "wrap",
                }}
              >
                {status === "error" ? (
                  <p role="alert" style={{ fontSize: 14, color: "var(--danger)" }}>
                    Something went wrong. Please try again or email hello@luxuryhomes.studio.
                  </p>
                ) : (
                  <p style={{ fontSize: 14, color: "var(--text-muted)" }}>We never share your details. No spam, ever.</p>
                )}
                <button
                  type="submit"
                  className="btn btn-dark"
                  disabled={status === "sending"}
                  style={{ padding: "0 38px" }}
                >
                  {status === "sending" ? "Sending…" : "Book my call →"}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
