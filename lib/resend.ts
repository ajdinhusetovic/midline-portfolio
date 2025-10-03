"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async () => {
  await resend.emails.send({
    to: "contact@midlinecode.com",
    from: "OrcDev <onboarding@resend.dev>",
    subject: "Testing email for nextjs",
    html: "<strong>This is a test</strong>",
  });
};
