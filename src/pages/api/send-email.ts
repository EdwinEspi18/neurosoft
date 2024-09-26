import { createTransport } from "nodemailer";

export async function POST({ request }: { request: Request }) {
  const { name, email, message } = await request.json();

  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "tu_correo@example.com",
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ status: "Email sent" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ status: "Error sending email" }), {
      status: 500,
    });
  }
}
