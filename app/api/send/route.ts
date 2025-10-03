import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON from the client
    const body = await request.json();
    const { name, email, message } = body;

    // Send the email with the user data
    const { data, error } = await resend.emails.send({
      from: "MidlineCode Notifications <no-reply@notifications.midlinecode.com>",
      to: ["contact@midlinecode.com"], // your email
      subject: `MidlineCode: New Contact Form Submission by ${name}`,
      react: EmailTemplate({ firstName: name, email, message }),
    });

    if (error) {
      console.log("Resend error:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (err: any) {
    console.log("Catch error:", err);
    return Response.json({ error: String(err) }, { status: 500 });
  }
}
