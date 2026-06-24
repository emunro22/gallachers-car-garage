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

    const notificationHtml = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; background-color: #f0f0f0; -webkit-font-smoothing: antialiased;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f0f0; padding: 40px 0;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">

  <!-- Header -->
  <tr><td style="background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%); padding: 32px 40px; text-align: center;">
    <h1 style="margin: 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px;">GALLACHERS CAR GARAGE</h1>
    <p style="margin: 6px 0 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; color: #16a34a; text-transform: uppercase; letter-spacing: 2px;">New Website Enquiry</p>
  </td></tr>

  <!-- Alert badge -->
  <tr><td style="padding: 28px 40px 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 14px 18px;">
        <p style="margin: 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; color: #15803d; font-weight: 600;">New enquiry received from the website</p>
        <p style="margin: 4px 0 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; color: #22c55e;">Click reply to respond directly to the customer.</p>
      </td></tr>
    </table>
  </td></tr>

  <!-- Customer details -->
  <tr><td style="padding: 24px 40px 0;">
    <p style="margin: 0 0 12px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; font-weight: 700; color: #a3a3a3; text-transform: uppercase; letter-spacing: 1.5px;">Customer Details</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden;">
      <tr>
        <td style="padding: 14px 18px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; color: #737373; font-weight: 600; width: 110px; background-color: #fafafa; border-bottom: 1px solid #f0f0f0;">Name</td>
        <td style="padding: 14px 18px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; color: #171717; border-bottom: 1px solid #f0f0f0;">${safeName}</td>
      </tr>
      <tr>
        <td style="padding: 14px 18px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; color: #737373; font-weight: 600; width: 110px; background-color: #fafafa; border-bottom: 1px solid #f0f0f0;">Email</td>
        <td style="padding: 14px 18px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; color: #171717; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${safeEmail}" style="color: #16a34a; text-decoration: none;">${safeEmail}</a></td>
      </tr>
      <tr>
        <td style="padding: 14px 18px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; color: #737373; font-weight: 600; width: 110px; background-color: #fafafa; border-bottom: 1px solid #f0f0f0;">Phone</td>
        <td style="padding: 14px 18px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; color: #171717; border-bottom: 1px solid #f0f0f0;">${safePhone}</td>
      </tr>
      <tr>
        <td style="padding: 14px 18px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; color: #737373; font-weight: 600; width: 110px; background-color: #fafafa;">Service</td>
        <td style="padding: 14px 18px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; color: #171717;">${safeService}</td>
      </tr>
    </table>
  </td></tr>

  <!-- Message -->
  <tr><td style="padding: 24px 40px 0;">
    <p style="margin: 0 0 12px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; font-weight: 700; color: #a3a3a3; text-transform: uppercase; letter-spacing: 1.5px;">Message</p>
    <div style="background-color: #fafafa; border: 1px solid #e5e5e5; border-radius: 8px; padding: 20px;">
      <p style="margin: 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; color: #404040; line-height: 1.7;">${safeMessage}</p>
    </div>
  </td></tr>

  <!-- Footer -->
  <tr><td style="padding: 32px 40px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="border-top: 1px solid #e5e5e5; padding-top: 20px; text-align: center;">
      <p style="margin: 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; color: #a3a3a3;">Gallachers Car Garage &middot; Auto Repair Centre</p>
      <p style="margin: 4px 0 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; color: #d4d4d4;">Unit 7a, 7b Forrest Street, Blantyre, Glasgow G72 0JP</p>
    </td></tr></table>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

    const confirmationHtml = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; background-color: #f0f0f0; -webkit-font-smoothing: antialiased;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f0f0; padding: 40px 0;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">

  <!-- Header -->
  <tr><td style="background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%); padding: 40px; text-align: center;">
    <h1 style="margin: 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px;">GALLACHERS CAR GARAGE</h1>
    <p style="margin: 6px 0 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; color: #16a34a; text-transform: uppercase; letter-spacing: 2px;">Auto Repair Centre</p>
  </td></tr>

  <!-- Greeting -->
  <tr><td style="padding: 36px 40px 0;">
    <h2 style="margin: 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 22px; font-weight: 700; color: #171717;">Thank you, ${safeName}</h2>
    <p style="margin: 16px 0 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 15px; color: #525252; line-height: 1.7;">
      We've received your enquiry${service ? ` regarding <strong style="color: #171717;">${safeService}</strong>` : ""} and one of our team will be in touch shortly.
    </p>
  </td></tr>

  <!-- What happens next -->
  <tr><td style="padding: 28px 40px 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #fafafa; border-radius: 10px; overflow: hidden;">
      <tr><td style="padding: 24px;">
        <p style="margin: 0 0 16px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; font-weight: 700; color: #171717;">What happens next?</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 0 0 14px; vertical-align: top; width: 36px;">
              <div style="width: 26px; height: 26px; background-color: #16a34a; border-radius: 50%; text-align: center; line-height: 26px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; font-weight: 700; color: #ffffff;">1</div>
            </td>
            <td style="padding: 3px 0 14px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; color: #525252; line-height: 1.5;">We'll review your enquiry and assess what's needed.</td>
          </tr>
          <tr>
            <td style="padding: 0 0 14px; vertical-align: top; width: 36px;">
              <div style="width: 26px; height: 26px; background-color: #16a34a; border-radius: 50%; text-align: center; line-height: 26px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; font-weight: 700; color: #ffffff;">2</div>
            </td>
            <td style="padding: 3px 0 14px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; color: #525252; line-height: 1.5;">A member of our team will get back to you, usually within a few hours.</td>
          </tr>
          <tr>
            <td style="padding: 0; vertical-align: top; width: 36px;">
              <div style="width: 26px; height: 26px; background-color: #16a34a; border-radius: 50%; text-align: center; line-height: 26px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; font-weight: 700; color: #ffffff;">3</div>
            </td>
            <td style="padding: 3px 0 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; color: #525252; line-height: 1.5;">We'll provide a free, no-obligation quote before any work begins.</td>
          </tr>
        </table>
      </td></tr>
    </table>
  </td></tr>

  <!-- Urgent CTA -->
  <tr><td style="padding: 28px 40px 0; text-align: center;">
    <p style="margin: 0 0 14px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; color: #737373;">Need to speak to us sooner?</p>
    <a href="tel:01698711111" style="display: inline-block; background-color: #16a34a; color: #ffffff; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 15px; font-weight: 700; text-decoration: none; padding: 14px 32px; border-radius: 8px;">Call 01698 711111</a>
  </td></tr>

  <!-- Message recap -->
  <tr><td style="padding: 28px 40px 0;">
    <p style="margin: 0 0 10px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; font-weight: 700; color: #a3a3a3; text-transform: uppercase; letter-spacing: 1.5px;">Your message</p>
    <div style="background-color: #fafafa; border-left: 3px solid #16a34a; border-radius: 0 8px 8px 0; padding: 16px 20px;">
      <p style="margin: 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; color: #525252; line-height: 1.6;">${safeMessage}</p>
    </div>
  </td></tr>

  <!-- Footer -->
  <tr><td style="padding: 36px 40px 32px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="border-top: 1px solid #e5e5e5; padding-top: 24px; text-align: center;">
      <p style="margin: 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; font-weight: 700; color: #404040;">Gallachers Car Garage</p>
      <p style="margin: 6px 0 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; color: #a3a3a3;">Unit 7a, 7b Forrest Street, Blantyre, Glasgow G72 0JP</p>
      <p style="margin: 4px 0 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; color: #a3a3a3;">
        <a href="tel:01698711111" style="color: #16a34a; text-decoration: none;">01698 711111</a>
        &nbsp;&middot;&nbsp;
        <a href="mailto:dgallachers@hotmail.com" style="color: #16a34a; text-decoration: none;">dgallachers@hotmail.com</a>
      </p>
      <p style="margin: 16px 0 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; color: #d4d4d4;">Mon-Thu 8am-5pm &middot; Fri 8am-4pm &middot; Sat &amp; Sun Closed</p>
    </td></tr></table>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

    await Promise.all([
      resend.emails.send({
        from: "Gallachers Website <noreply@gallacherscargarage.co.uk>",
        to: ["dgallachers@hotmail.com"],
        replyTo: email,
        subject: `New Enquiry from ${name}${service ? ` - ${service}` : ""}`,
        html: notificationHtml,
      }),

      resend.emails.send({
        from: "Gallachers Car Garage <noreply@gallacherscargarage.co.uk>",
        to: [email],
        subject: "We've received your enquiry, Gallachers Car Garage",
        html: confirmationHtml,
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
