import { Resend } from "resend";

const resend = new Resend("re_5KYb8PEc_GmoBJeDwVopE3PeS22xbDHHY");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { userName, companyName, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["teacherfarhod@gmail.com"],
      subject: "New Contact Message",
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${userName}</p>
        <p><b>Company:</b> ${companyName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
}
