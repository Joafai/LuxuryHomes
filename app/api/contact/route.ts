import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: Request) {
  const { name, email, phone, plan } = await req.json();

  if (!name || !email || !phone || !plan) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"Luxury Homes" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New booking request — ${plan}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #f9f9f9;">
          <div style="background: #202020; padding: 32px; border-radius: 4px; margin-bottom: 24px;">
            <h1 style="color: #BCCFC9; font-size: 1.4rem; margin: 0 0 4px;">Luxury Homes</h1>
            <p style="color: rgba(249,249,249,0.4); font-size: 0.8rem; margin: 0;">New booking request</p>
          </div>

          <div style="background: #F9F9F9; padding: 32px; border-radius: 4px; border: 1px solid #e0e0e0;">
            <div style="display: inline-block; background: #202020; color: #BCCFC9; font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; padding: 6px 14px; border-radius: 2px; margin-bottom: 24px;">
              ${plan}
            </div>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 0.8rem; width: 120px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #202020; font-size: 0.9rem; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 0.8rem;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #202020; font-size: 0.9rem;"><a href="mailto:${email}" style="color: #202020;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888; font-size: 0.8rem;">WhatsApp</td>
                <td style="padding: 12px 0; color: #202020; font-size: 0.9rem;">${phone}</td>
              </tr>
            </table>

            <div style="margin-top: 28px; padding: 16px; background: #f9f9f9; border-radius: 2px; font-size: 0.78rem; color: #888;">
              Reply within 8 hours to confirm their consultation.
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
