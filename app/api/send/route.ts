import { EmailTemplate } from "@/components/email-template";
import { validateContact } from "@/lib/contact-validation";
import { Resend } from "resend";

export const runtime = "nodejs";
const headers = { "Cache-Control": "no-store" };
const publicError =
  "We couldn’t send your inquiry. Please try again or email contact@midlinecode.com.";
const maxBodyBytes = 24_000;

export async function POST(request: Request) {
  if (
    !request.headers
      .get("content-type")
      ?.toLowerCase()
      .startsWith("application/json")
  )
    return Response.json(
      { error: "Please submit the contact form." },
      { status: 415, headers },
    );
  const size = Number(request.headers.get("content-length"));
  if (size > maxBodyBytes)
    return Response.json(
      { error: "Your inquiry is too long." },
      { status: 413, headers },
    );
  let body: unknown;
  try {
    // Bound streamed bodies too; Content-Length alone is not reliable.
    const reader = request.body?.getReader();
    if (!reader)
      return Response.json(
        { error: "Please provide your project details." },
        { status: 400, headers },
      );
    const chunks: Uint8Array[] = [];
    let total = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > maxBodyBytes) {
        await reader.cancel();
        return Response.json(
          { error: "Your inquiry is too long." },
          { status: 413, headers },
        );
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(total);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    body = JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return Response.json(
      { error: "Please provide valid contact details." },
      { status: 400, headers },
    );
  }
  // Silently discard honeypot submissions without contacting the email provider.
  if (
    body &&
    typeof body === "object" &&
    "website" in body &&
    (body as { website: unknown }).website
  )
    return Response.json({ success: true }, { headers });
  const { data, errors } = validateContact(body);
  if (!data || Object.keys(errors).length)
    return Response.json(
      { error: "Please check your name, email, and project details.", errors },
      { status: 400, headers },
    );
  if (!process.env.RESEND_API_KEY)
    return Response.json({ error: publicError }, { status: 503, headers });
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Midline Code Notifications <no-reply@notifications.midlinecode.com>",
      to: ["contact@midlinecode.com"],
      replyTo: data.email,
      subject: `Midline Code: Studio inquiry from ${data.name}`,
      react: EmailTemplate({
        firstName: data.name,
        email: data.email,
        message: data.message,
      }),
    });
    if (error) {
      console.error("Contact delivery failed");
      return Response.json({ error: publicError }, { status: 502, headers });
    }
    return Response.json({ success: true }, { headers });
  } catch {
    console.error("Contact delivery failed");
    return Response.json({ error: publicError }, { status: 502, headers });
  }
}
