import { resend } from "./resend.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      //   to: ["samidmunir7@gmail.com"],
      to: [email],
      subject: "Verify your email address now!",
      html: `<h1>Verify your email address with this token: <strong>${verificationToken}</strong></h1>`,
    });
  } catch (error) {
    console.log("Error sending verification email:", error);
    throw new Error("Error sending verification email.");
  }
};
