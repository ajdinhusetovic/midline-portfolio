export const contactLimits = { name: 100, email: 254, message: 5000 };
export type ContactData = {
  name: string;
  email: string;
  message: string;
  website: string;
};
export type ContactErrors = Partial<
  Record<"name" | "email" | "message", string>
>;
export function validateContact(value: unknown): {
  data?: ContactData;
  errors: ContactErrors;
} {
  if (!value || typeof value !== "object" || Array.isArray(value))
    return {
      errors: {
        message: "Please provide your name, email, and project details.",
      },
    };
  const input = value as Record<string, unknown>;
  const data: ContactData = {
    name: typeof input.name === "string" ? input.name.trim() : "",
    email: typeof input.email === "string" ? input.email.trim() : "",
    message: typeof input.message === "string" ? input.message.trim() : "",
    website: typeof input.website === "string" ? input.website.trim() : "",
  };
  const errors: ContactErrors = {};
  if (
    !data.name ||
    data.name.length > contactLimits.name ||
    /[\r\n\x00-\x1f\x7f]/.test(data.name)
  )
    errors.name = "Enter a name of 1–100 characters.";
  if (
    data.email.length > contactLimits.email ||
    !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email)
  )
    errors.email = "Enter a valid email address (up to 254 characters).";
  if (
    !data.message ||
    data.message.length > contactLimits.message ||
    /\x00/.test(data.message)
  )
    errors.message = "Enter project details of 1–5,000 characters.";
  return { data, errors };
}
