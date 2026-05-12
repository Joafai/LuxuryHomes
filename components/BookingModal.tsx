"use client";

import { useState, useEffect } from "react";

interface Props {
  plan: string;
  onClose: () => void;
}

export default function BookingModal({ plan, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    // trigger entrance animation on next frame
    requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, plan }),
    });
    setSending(false);
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <div style={{
        position: "fixed", inset: 0, zIndex: 10001,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}>
        {/* Backdrop */}
        <div
          onClick={handleClose}
          style={{
            position: "absolute", inset: 0,
            background: "rgba(32,32,32,0.88)",
            backdropFilter: "blur(8px)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Modal panel */}
        <div style={{
          position: "relative", zIndex: 1,
          background: "var(--ink)",
          border: "1px solid rgba(188,207,201,0.25)",
          maxWidth: 520, width: "100%",
          padding: "52px 48px",
          animation: visible ? "modalFadeIn 0.35s cubic-bezier(0.22,1,0.36,1) forwards" : undefined,
          opacity: visible ? undefined : 0,
        }}>
          {/* Top bar: plan pill + close */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(188,207,201,0.3)",
              padding: "6px 14px",
              borderRadius: "1px",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", display: "inline-block", flexShrink: 0 }} />
              <span style={{
                fontFamily: "var(--sans)", fontSize: "0.68rem",
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--gold)", fontWeight: 400,
              }}>
                {plan}
              </span>
            </div>
            <button
              onClick={handleClose}
              style={{
                background: "none", border: "none", padding: "4px 8px",
                fontFamily: "var(--serif)", fontSize: "1.6rem",
                color: "rgba(249,249,249,0.3)", lineHeight: 1,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(249,249,249,0.3)")}
            >
              ×
            </button>
          </div>

          {!submitted ? (
            <>
              <h3 style={{
                fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 300, color: "var(--bone)", lineHeight: 1.05, marginBottom: 14,
              }}>
                Book a free<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>30-min call.</em>
              </h3>
              <p style={{
                fontSize: "0.8rem", color: "rgba(249,249,249,0.4)",
                fontWeight: 300, lineHeight: 1.7, marginBottom: 36,
              }}>
                Leave your details and we&apos;ll reach out in{" "}
                <strong style={{ color: "var(--bone)", fontWeight: 400 }}>less than 8 hours</strong>{" "}
                to confirm a time that works for you.
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { id: "name",  label: "Full name",         type: "text",  placeholder: "María García" },
                  { id: "email", label: "Email",              type: "email", placeholder: "maria@agencia.com" },
                  { id: "phone", label: "WhatsApp / Phone",   type: "tel",   placeholder: "+54 9 11 0000-0000" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(249,249,249,0.35)" }}>
                      {label}
                    </label>
                    <input
                      required
                      type={type}
                      placeholder={placeholder}
                      value={form[id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      style={{
                        background: "rgba(249,249,249,0.03)",
                        border: "1px solid rgba(188,207,201,0.2)",
                        borderRadius: "1px",
                        padding: "13px 16px",
                        color: "var(--bone)",
                        fontSize: "0.85rem",
                        fontFamily: "var(--sans)",
                        fontWeight: 300,
                        outline: "none",
                        transition: "border-color 0.2s",
                        width: "100%",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(188,207,201,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(188,207,201,0.2)")}
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  style={{
                    marginTop: 8, background: "var(--gold)", color: "var(--ink)",
                    border: "none", padding: "15px 32px",
                    fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase",
                    fontFamily: "var(--sans)", fontWeight: 500,
                    borderRadius: "1px", transition: "background 0.3s", width: "100%",
                  }}
                  onMouseEnter={(e) => { if (!sending) e.currentTarget.style.background = "var(--gold-light)"; }}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
                  disabled={sending}
                >
                  {sending ? "Sending…" : "Confirm request →"}
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                border: "1px solid rgba(188,207,201,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 28px", color: "var(--gold)", fontSize: "1.4rem",
              }}>✓</div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", fontWeight: 300, color: "var(--bone)", marginBottom: 12 }}>
                We&apos;ll be in touch.
              </h3>
              <p style={{ fontSize: "0.82rem", color: "rgba(249,249,249,0.45)", fontWeight: 300, lineHeight: 1.7 }}>
                Expect a message within <strong style={{ color: "var(--bone)", fontWeight: 400 }}>8 hours</strong>.<br />
                We&apos;ll confirm a time and send you a calendar invite.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
