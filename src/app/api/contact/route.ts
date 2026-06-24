import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeService = escapeHtml(service || "Not specified");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    await Promise.all([
      resend.emails.send({
        from: "Gallachers Website <noreply@gallacherscargarage.co.uk>",
        to: ["dgallachers@hotmail.com"],
        replyTo: email,
        subject: `New Enquiry from ${name}${service ? ` - ${service}` : ""}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #16a34a; padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 22px;">New Website Enquiry</h1>
            </div>
            <div style="padding: 24px; background: #f9f9f9;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Name:</td><td style="padding: 8px 0; color: #555;">${safeName}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td><td style="padding: 8px 0; color: #555;">${safeEmail}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td><td style="padding: 8px 0; color: #555;">${safePhone}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Service:</td><td style="padding: 8px 0; color: #555;">${safeService}</td></tr>
              </table>
              <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />
              <p style="font-weight: bold; color: #333;">Message:</p>
              <p style="color: #555; line-height: 1.6;">${safeMessage}</p>
            </div>
            <div style="padding: 16px; text-align: center; color: #999; font-size: 12px;">
              Sent from the Gallachers Car Garage website
            </div>
          </div>
        `,
      }),

      resend.emails.send({
        from: "Gallachers Car Garage <noreply@gallacherscargarage.co.uk>",
        to: [email],
        subject: "We've received your enquiry, Gallachers Car Garage",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #16a34a; padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 22px;">Gallachers Car Garage</h1>
              <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">Auto Repair Centre</p>
            </div>
            <div style="padding: 24px; background: #f9f9f9;">
              <p style="color: #333; font-size: 16px;">Hi ${safeName},</p>
              <p style="color: #555; line-height: 1.6;">
                Thank you for getting in touch with Gallachers Car Garage. We've received your enquiry
                ${service ? `regarding <strong>${safeService}</strong>` : ""} and will get back to you as soon as possible.
              </p>
              <p style="color: #555; line-height: 1.6;">
                If your matter is urgent, please don't hesitate to call us directly on
                <a href="tel:01698711111" style="color: #16a34a; font-weight: bold;">01698 711111</a>.
              </p>
              <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
              <p style="color: #888; font-size: 13px; margin: 0;"><strong>Your message:</strong></p>
              <p style="color: #666; font-size: 13px; line-height: 1.5; background: #fff; padding: 12px; border-radius: 8px; margin-top: 8px;">${safeMessage}</p>
            </div>
            <div style="padding: 16px; text-align: center; color: #999; font-size: 12px;">
              Gallachers Car Garage, Unit 7a, 7b Forrest Street, Blantyre, Glasgow G72 0JP<br />
              01698 711111 &middot; dgallachers@hotmail.com
            </div>
          </div>
        `,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
