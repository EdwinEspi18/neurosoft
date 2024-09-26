import { useState } from "preact/hooks";

import "./Contactos.css";

export default function ContactosForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    tel: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent!");
    } else {
      setStatus("Failed to send message");
    }
  };
  console.log(status);
  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className='header-form'>
        <h2>Formulario para contacto.</h2>
        <p>
          Comunicarse con nosotros es el primer paso hacia la creación de
          soluciones excepcionales.
        </p>
      </div>
      <div className='form-control-fullname'>
        <input
          className='input-control'
          type='text'
          placeholder='Nombre'
          name='name'
          onChange={handleChange}
        />
        <input
          className='input-control'
          type='text'
          placeholder='Apellido'
          name='lastname'
          onChange={handleChange}
        />
      </div>
      <input
        className='input-control'
        type='email'
        autocomplete='email'
        placeholder='Correo Electrónico'
        name='email'
        onChange={handleChange}
      />
      <input
        className='input-control'
        type='tel'
        placeholder='No. de teléfono'
        name='tel'
        onChange={handleChange}
      />
      <textarea
        className='input-textarea'
        placeholder='Mensaje'
        name='message'
        onChange={handleChange}
      ></textarea>
      <button type='submit' className='button-contacto'>
        Enviar
      </button>
    </form>
  );
}
