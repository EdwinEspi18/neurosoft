import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, f as renderHead, g as renderSlot, m as maybeRenderHead, h as renderComponent } from '../chunks/astro/server_DTb4TK__.mjs';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_961ZprQG.mjs';
import { useState } from 'preact/hooks';
import { jsx, Fragment, jsxs } from 'preact/jsx-runtime';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://neurosoft.vercel.app/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Desarrollo de apps moviles | Desarrollo de paginas web | Inteligencia Artificial"><meta name="robots" content="index,follow"><meta name="author" content="Edwin Espinal"><meta name="keywords" content="Neurosoft, Neurosoft.dev, Neurosoft.dev, Neurosoft, Neurosoft.dev, Neurosoft.dev, Neurosoft, Neurosoft.dev, Neurosoft.dev, Neurosoft, Neurosoft.dev, Neurosoft.dev"><meta property="og:site_name" content="neurosoft.dev"><meta property="og:title" content="neurosoft.dev"><meta property="og:description" content="Desarrollo de apps moviles | Desarrollo de paginas web | Inteligencia Artificial"><meta property="og:url" content="https://neurosoft.dev/"><meta property="og:image" content="/logo.svg"><meta name="twitter:card" content="summary"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} <img class="img-gradient" src="/bg-gradient.svg" alt="gradient" class="gradient"> </body></html>`;
}, "C:/Users/onli/Desktop/Projects/landing-tomas/src/layouts/Layout.astro", void 0);

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-ymhdp2rl> <img src="/logo.svg" alt="Logo Neurosoft.dev" data-astro-cid-ymhdp2rl> <div class="menu-toggle" id="hamburger" data-astro-cid-ymhdp2rl> <span data-astro-cid-ymhdp2rl></span> <span data-astro-cid-ymhdp2rl></span> <span data-astro-cid-ymhdp2rl></span> </div> <nav id="nav-menu" class="nav-menu" data-astro-cid-ymhdp2rl> <ul data-astro-cid-ymhdp2rl> <li data-astro-cid-ymhdp2rl><a href="#" data-astro-cid-ymhdp2rl>Inicio</a></li> <li data-astro-cid-ymhdp2rl><a href="#servicios" data-astro-cid-ymhdp2rl>Servicios</a></li> <li data-astro-cid-ymhdp2rl><a href="#contactos" data-astro-cid-ymhdp2rl>Contactos</a></li> <li data-astro-cid-ymhdp2rl><a href="#" data-astro-cid-ymhdp2rl>Nosotros</a></li> </ul> </nav> </header>  `;
}, "C:/Users/onli/Desktop/Projects/landing-tomas/src/components/NavBar.astro", void 0);

const $$Seccion1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-qbrewa5h> <h2 data-astro-cid-qbrewa5h>Innovación Impulsada por Datos</h2> <div class="separator" data-astro-cid-qbrewa5h></div> <div class="card" data-astro-cid-qbrewa5h> ${renderComponent($$result, "Image", $$Image, { "src": "/seccion-1.webp", "alt": "card 1", "width": 450, "height": 450, "data-astro-cid-qbrewa5h": true })} <p data-astro-cid-qbrewa5h>Utilizamos análisis de datos para informar y mejorar constantemente nuestras soluciones. Esto garantiza que nuestras aplicaciones, páginas web y chatbots estén siempre en la vanguardia de la tecnología.</p> </div> <div data-astro-cid-qbrewa5h></div> </section> `;
}, "C:/Users/onli/Desktop/Projects/landing-tomas/src/components/Seccion1.astro", void 0);

const $$Astro$1 = createAstro("https://neurosoft.vercel.app/");
const $$CardOrigin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardOrigin;
  const { img, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card" data-astro-cid-6ogu6ky7> <div class="card-img_container" data-astro-cid-6ogu6ky7> <img${addAttribute(img, "src")} alt="card 1" loading="lazy" data-astro-cid-6ogu6ky7> </div> <div class="card-content" data-astro-cid-6ogu6ky7> <h2 data-astro-cid-6ogu6ky7>${title}</h2> <div class="separator" data-astro-cid-6ogu6ky7></div> <p data-astro-cid-6ogu6ky7>${body}</p> </div> </article> `;
}, "C:/Users/onli/Desktop/Projects/landing-tomas/src/components/CardOrigin.astro", void 0);

const $$Astro = createAstro("https://neurosoft.vercel.app/");
const $$CardInvert = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardInvert;
  const { img, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card" data-astro-cid-3pwoic4m> <div class="card-img_container" data-astro-cid-3pwoic4m> <img${addAttribute(img, "src")} alt="card 1" loading="lazy" data-astro-cid-3pwoic4m> </div> <div class="card-content" data-astro-cid-3pwoic4m> <h2 data-astro-cid-3pwoic4m>${title}</h2> <div class="separator" data-astro-cid-3pwoic4m></div> <p data-astro-cid-3pwoic4m>${body}</p> </div> </article> `;
}, "C:/Users/onli/Desktop/Projects/landing-tomas/src/components/CardInvert.astro", void 0);

function ContactosForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    tel: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: ""
  });
  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (formData.name.length < 1) {
      setLoading(false);
      return setError({
        error: true,
        message: "Por favor, rellena todos los campos"
      });
    }
    if (formData.email.length < 1) {
      setLoading(false);
      return setError({
        error: true,
        message: "Por favor, rellena todos los campos"
      });
    }
    if (formData.tel.length < 1) {
      setLoading(false);
      return setError({
        error: true,
        message: "Por favor, rellena todos los campos"
      });
    }
    if (formData.message.length < 1) {
      setLoading(false);
      return setError({
        error: true,
        message: "Por favor, rellena todos los campos"
      });
    }
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      setLoading(false);
      setFormData({
        name: "",
        lastname: "",
        email: "",
        tel: "",
        message: ""
      });
      setError({
        error: false,
        message: ""
      });
    } else {
      setLoading(false);
      return setError({
        error: true,
        message: data.message
      });
    }
  };
  return jsx(Fragment, {
    children: jsxs("form", {
      onSubmit: handleSubmit,
      className: "form",
      children: [jsxs("div", {
        className: "header-form",
        children: [jsx("h2", {
          children: "Formulario para contacto."
        }), jsx("p", {
          children: "Comunicarse con nosotros es el primer paso hacia la creación de soluciones excepcionales."
        })]
      }), jsxs("div", {
        className: "form-control-fullname",
        children: [jsx("input", {
          className: "input-control",
          type: "text",
          placeholder: "Nombre",
          name: "name",
          onChange: handleChange
        }), jsx("input", {
          className: "input-control",
          type: "text",
          placeholder: "Apellido",
          name: "lastname",
          onChange: handleChange
        })]
      }), jsx("input", {
        className: "input-control",
        type: "email",
        autocomplete: "email",
        placeholder: "Correo Electrónico",
        name: "email",
        onChange: handleChange
      }), jsx("input", {
        className: "input-control",
        type: "tel",
        placeholder: "No. de teléfono",
        name: "tel",
        onChange: handleChange
      }), jsx("textarea", {
        className: "input-textarea",
        placeholder: "Mensaje",
        name: "message",
        onChange: handleChange
      }), jsx("button", {
        disabled: loading,
        type: "submit",
        className: "button-contacto",
        children: loading ? "Enviando..." : "Enviar"
      }), error.error && jsx("p", {
        className: "error",
        children: error.message
      })]
    })
  });
}

const $$Seccion3 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contactos" data-astro-cid-l2fnv5m3> <h2 data-astro-cid-l2fnv5m3>Contáctanos</h2> <div class="separator" data-astro-cid-l2fnv5m3></div> <div class="container-contactos" data-astro-cid-l2fnv5m3> ${renderComponent($$result, "ContactosForm", ContactosForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/onli/Desktop/Projects/landing-tomas/src/components/ContactForm", "client:component-export": "default", "data-astro-cid-l2fnv5m3": true })} <div class="separator-vertical" data-astro-cid-l2fnv5m3></div> <div data-astro-cid-l2fnv5m3> <article class="email_container" data-astro-cid-l2fnv5m3> <p class="email-label" data-astro-cid-l2fnv5m3>Correo Electrónico:</p> <a href="mailto:support@neurosoft.dev" class="email-value" data-astro-cid-l2fnv5m3>support@neurosoft.dev</a> </article> <article class="telefono" data-astro-cid-l2fnv5m3> <p class="tel_label" data-astro-cid-l2fnv5m3>Teléfonos:</p> <div class="tel_value_container" data-astro-cid-l2fnv5m3> <p class="tel_value" data-astro-cid-l2fnv5m3>USA: <a href="tel:+13476530431" data-astro-cid-l2fnv5m3>(347) 653-0431</a></p> <p class="tel_value" data-astro-cid-l2fnv5m3>Rep. Dom: <a href="tel:+18294513026" data-astro-cid-l2fnv5m3>(829) 451-3026</a></p> </div> </article> </div> </div> </section> `;
}, "C:/Users/onli/Desktop/Projects/landing-tomas/src/components/Seccion3.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte> <p class="sr-only" data-astro-cid-sz7xmlte>Neurosoft.dev</p> </div> <p id="footer" data-astro-cid-sz7xmlte></p> <aside data-astro-cid-sz7xmlte> <a href="https://github.com/EdwinEspi18/neurosoft.git" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte> <img src="/logo-github.svg" alt="github" loading="lazy" data-astro-cid-sz7xmlte> </a> <a href="#" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte> <img src="/logo-linkedin.svg" alt="linkedin" loading="lazy" data-astro-cid-sz7xmlte> </a> <a href="#" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte> <img src="/logo-ig.svg" alt="linkedin" loading="lazy" data-astro-cid-sz7xmlte> </a> <a href="#" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte> <img src="/logo-facebook.svg" alt="linkedin" loading="lazy" data-astro-cid-sz7xmlte> </a> </aside> </footer>  `;
}, "C:/Users/onli/Desktop/Projects/landing-tomas/src/components/Footer.astro", void 0);

const $$Seccion2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="servicios" data-astro-cid-zxsuff3z> <div class="container" data-astro-cid-zxsuff3z> <h2 data-astro-cid-zxsuff3z>Conoce nuestros servicios</h2> <p data-astro-cid-zxsuff3z>Entendemos que cada proyecto es único. Por eso, trabajamos en estrecha colaboración contigo para desarrollar soluciones a medida que se adapten a tus objetivos y necesidades específicas.</p> <div class="separator" data-astro-cid-zxsuff3z></div> </div> <div class="cards" data-astro-cid-zxsuff3z> ${renderComponent($$result, "CardOrigin", $$CardOrigin, { "title": "Desarrollo m\xF3vil", "body": "Somos arquitectos de experiencias digitales que caben en la palma de tu mano. Nuestra pasi\xF3n es crear aplicaciones m\xF3viles que cautiven a tus usuarios y generen un impacto duradero. Desde la concepci\xF3n de la idea hasta el despliegue en las tiendas de aplicaciones, nuestro equipo de desarrollo m\xF3vil se enfoca en la innovaci\xF3n y la calidad. Convierte tus conceptos en aplicaciones m\xF3viles excepcionales con nosotros.", "img": "/mobile_dev.svg", "data-astro-cid-zxsuff3z": true })} ${renderComponent($$result, "CardInvert", $$CardInvert, { "title": "Desarrollo web", "body": "Somos maestros del lenguaje digital y constructores de experiencias web excepcionales. Nuestra dedicaci\xF3n a la creaci\xF3n de p\xE1ginas web va m\xE1s all\xE1 de lo ordinario, ya que cada sitio que construimos es una obra maestra de dise\xF1o y funcionalidad.", "img": "/web_dev.svg", "data-astro-cid-zxsuff3z": true })} ${renderComponent($$result, "CardOrigin", $$CardOrigin, { "title": "Inteligencia artificial", "body": "No solo somos desarrolladores, somos artesanos de la automatizaci\xF3n y cient\xEDficos de los datos, dedicados a transformar tu visi\xF3n digital en una realidad impulsada por la inteligencia artificial. Nuestra experiencia en el mundo de los bots y la ciencia de datos nos permite crear soluciones que van m\xE1s all\xE1 de lo ordinario.", "img": "/brain-ia.svg", "data-astro-cid-zxsuff3z": true })} ${renderComponent($$result, "CardInvert", $$CardInvert, { "title": "Desarrollo de BOT", "body": "Nos especializamos en dar vida a tus ideas mediante bots altamente inteligentes. Nuestra experiencia en el desarrollo de soluciones de vanguardia nos permite ofrecer mucho m\xE1s que simples aplicaciones automatizadas. Estamos aqu\xED para impulsar tu visi\xF3n digital hacia un nuevo nivel de eficiencia y versatilidad", "img": "/chat_bot.svg", "data-astro-cid-zxsuff3z": true })} ${renderComponent($$result, "CardOrigin", $$CardOrigin, { "title": "An\xE1lisis de Datos", "body": "Nuestro enfoque en el an\xE1lisis de datos va m\xE1s all\xE1 de los n\xFAmeros, buscamos patrones, tendencias y conocimientos ocultos en los datos que recopilamos. Con herramientas avanzadas y experiencia en la interpretaci\xF3n de datos, convertimos informaci\xF3n en decisiones informadas. Descubre c\xF3mo nuestro enfoque meticuloso al an\xE1lisis de datos puede transformar tu estrategia empresarial.", "img": "/analisis_datos.svg", "data-astro-cid-zxsuff3z": true })} ${renderComponent($$result, "CardInvert", $$CardInvert, { "title": "Miner\xEDa de Datos", "body": "Nuestra especialidad es extraer conocimientos valiosos de conjuntos de datos complejos y aparentemente inexplorados. Con herramientas avanzadas de miner\xEDa de datos y experiencia en an\xE1lisis estad\xEDstico, desenterramos perspectivas ocultas que pueden impulsar tu negocio hacia el \xE9xito. \xDAnete a nosotros en la aventura de la miner\xEDa de datos y descubre tesoros de informaci\xF3n que pueden impulsar tu toma de decisiones estrat\xE9gicas.", "img": "/mineria_dato.svg", "data-astro-cid-zxsuff3z": true })} </div> ${renderComponent($$result, "Seccion3", $$Seccion3, { "data-astro-cid-zxsuff3z": true })} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-zxsuff3z": true })} </section> `;
}, "C:/Users/onli/Desktop/Projects/landing-tomas/src/components/Seccion2.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "neurosoft.dev", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <section class="init" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Impulsa tu <strong data-astro-cid-j7pv25f6>Presencia Digital</strong></h1> <ul class="typing-container" data-astro-cid-j7pv25f6> <li class="typing-word active" data-astro-cid-j7pv25f6>Bot de WhatsApp</li> <li class="typing-word active" data-astro-cid-j7pv25f6>Bot de Telegram</li> <li class="typing-word" data-astro-cid-j7pv25f6>Inteligencia Artificial</li> <li class="typing-word" data-astro-cid-j7pv25f6>Análisis de Datos</li> <li class="typing-word" data-astro-cid-j7pv25f6>Desarrollo Web</li> <li class="typing-word" data-astro-cid-j7pv25f6>Desarrollo Móvil</li> <li class="typing-word" data-astro-cid-j7pv25f6>Minería de Datos</li> </ul> <h2 data-astro-cid-j7pv25f6>Hazlo con nosotros</h2> <button id="btn-contact" data-astro-cid-j7pv25f6>Contactanos</button> </section> <img src="/arrow-down.svg" alt="arrow down" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Seccion1", $$Seccion1, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Seccion2", $$Seccion2, { "data-astro-cid-j7pv25f6": true })} </main> ` })}  `;
}, "C:/Users/onli/Desktop/Projects/landing-tomas/src/pages/index.astro", void 0);

const $$file = "C:/Users/onli/Desktop/Projects/landing-tomas/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
