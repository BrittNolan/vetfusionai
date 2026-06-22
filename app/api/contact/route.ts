import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Where inquiries land + the verified Resend sender. Configurable via env so
// the address can change without a code edit. Ryan's email is NEVER exposed to
// the browser — it only lives server-side here.
const TO = process.env.CONTACT_TO || "rwhitney@vetfusionai.com";
const FROM = process.env.RESEND_FROM || "VetFusion <noreply@vetfusion.ai>";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const org = String(body.org ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.company_website ?? "").trim();

  // Bot trap: silently accept so the bot thinks it succeeded.
  if (honeypot) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please add your name, email, and a short message." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY not set — inquiry could not be delivered:", email);
    return NextResponse.json(
      { error: "Our contact form is being finalized — please check back shortly." },
      { status: 503 },
    );
  }

  const subject = `VetFusion inquiry — ${name}${org ? ` · ${org}` : ""}`;
  const text = [
    "New VetFusion inquiry",
    "",
    `Name:  ${name}`,
    `Email: ${email}`,
    `Org:   ${org || "—"}`,
    "",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[contact] Resend error", res.status, detail);
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please try again." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
