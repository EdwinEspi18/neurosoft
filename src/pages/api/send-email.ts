import { createTransport } from "nodemailer";

export async function POST({ request }: { request: Request }) {
  const { name, lastname, email, tel, message } = await request.json();

  console.log({
    user: import.meta.env.EMAIL_USER,
    pas: import.meta.env.EMAIL_PASS,
  });
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: import.meta.env.EMAIL_USER ?? process.env.EMAIL_USER,
      pass: import.meta.env.EMAIL_PASS ?? process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: import.meta.env.EMAIL_USER,
      subject: `Nuevo mensaje de contacto de ${name} ${lastname}`,
      text: `${message} \n\n ${tel}`,
    });

    return new Response(JSON.stringify({ mesage: "Mensaje enviado!" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ mesage: "Error al enviar el mensaje" }),
      {
        status: 500,
      }
    );
  }
}
