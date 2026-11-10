import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Single-line, trimmed, length-capped text. Non-strings become "".
function field(value: unknown, max = 200): string {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  const body: unknown = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const data = body as Record<string, unknown>;

  const lead = {
    name: field(data.name),
    email: field(data.email),
    phone: field(data.phone, 40),
    market: field(data.market),
    website: field(data.website, 300),
    role: field(data.role, 80),
    plan: field(data.plan, 80),
  };

  if (!lead.name || !EMAIL_PATTERN.test(lead.email)) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const topic = lead.plan ? `${lead.plan} plan` : "General inquiry";
  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Market", lead.market],
    ["Website", lead.website],
    ["Role", lead.role],
  ];

  const tableRows = rows
    .filter(([, value]) => value)
    .map(([label, value]) => {
      const safe = escapeHtml(value);
      const content = label === "Email" ? `<a href="mailto:${safe}" style="color: #141414;">${safe}</a>` : safe;
      return `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #DCD8D3; color: #5C5752; font-size: 0.8rem; width: 120px;">${label}</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #DCD8D3; color: #141414; font-size: 0.9rem;">${content}</td>
              </tr>`;
    })
    .join("");

  try {
    await transporter.sendMail({
      from: `"Luxury Homes" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: lead.email,
      subject: `New booking request — ${topic}`,
      html: `
        <div style="font-family: Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #EEEAE5;">
          <div style="background: #141414; padding: 32px; border-top: 2px solid #C9A66B; margin-bottom: 24px;">
            <h1 style="color: #F9F9F9; font-family: Georgia, serif; font-weight: 400; font-size: 1.4rem; margin: 0 0 6px;">Luxury Homes</h1>
            <p style="color: #C9A66B; font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; margin: 0;">New booking request</p>
          </div>

          <div style="background: #F9F9F9; padding: 32px;">
            <div style="display: inline-block; background: #141414; color: #C9A66B; font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; padding: 6px 14px; margin-bottom: 24px;">
              ${escapeHtml(topic)}
            </div>

            <table style="width: 100%; border-collapse: collapse;">${tableRows}
            </table>

            <div style="margin-top: 28px; padding: 16px; background: #EEEAE5; font-size: 0.78rem; color: #5C5752;">
              Reply within 24 hours to book their call.
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
