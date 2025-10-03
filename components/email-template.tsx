import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email?: string;
  message?: string;
}

export function EmailTemplate({
  firstName,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        lineHeight: 1.6,
        color: "#333",
        padding: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#0070f3" }}>New Client Inquiry</h2>
        <p>You have received a new message from your website contact form:</p>

        <table
          style={{
            width: "100%",
            marginTop: "20px",
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            <tr>
              <td style={{ padding: "8px", fontWeight: "bold" }}>Name:</td>
              <td style={{ padding: "8px" }}>{firstName}</td>
            </tr>
            {email && (
              <tr>
                <td style={{ padding: "8px", fontWeight: "bold" }}>Email:</td>
                <td style={{ padding: "8px" }}>{email}</td>
              </tr>
            )}
            {message && (
              <tr>
                <td style={{ padding: "8px", fontWeight: "bold" }}>Message:</td>
                <td style={{ padding: "8px" }}>{message}</td>
              </tr>
            )}
          </tbody>
        </table>

        <p style={{ marginTop: "20px", fontStyle: "italic", color: "#555" }}>
          Reply promptly to ensure great client experience.
        </p>

        <hr style={{ margin: "20px 0", borderColor: "#eee" }} />

        <p style={{ fontSize: "12px", color: "#999" }}>
          MidlineCode – Professional Web Development Agency
        </p>
      </div>
    </div>
  );
}
