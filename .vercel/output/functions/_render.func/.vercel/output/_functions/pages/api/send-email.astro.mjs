import { createTransport } from 'nodemailer';
export { renderers } from '../../renderers.mjs';

async function POST({
  request
}) {
  const {
    name,
    lastname,
    email,
    tel,
    message
  } = await request.json();
  console.log({
    user: "espinaledwin1919@gmail.com",
    pas: "fxst dejw wymd pgek"
  });
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: "espinaledwin1919@gmail.com",
      pass: "fxst dejw wymd pgek"
    }
  });
  try {
    await transporter.sendMail({
      from: email,
      to: "espinaledwin1919@gmail.com",
      subject: `Nuevo mensaje de contacto de ${name} ${lastname}`,
      text: `${message} 

 ${tel}`
    });
    return new Response(JSON.stringify({
      mesage: "Mensaje enviado!"
    }), {
      status: 200
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({
      mesage: "Error al enviar el mensaje"
    }), {
      status: 500
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
