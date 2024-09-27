import { useState } from "preact/hooks";
import { h } from "preact";

import "./Contactos.css";

export default function ContactosForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    tel: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: false, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.name.length < 1) {
      setLoading(false);
      return setError({
        error: true,
        message: "Por favor, rellena todos los campos",
      });
    }
    if (formData.email.length < 1) {
      setLoading(false);
      return setError({
        error: true,
        message: "Por favor, rellena todos los campos",
      });
    }
    if (formData.tel.length < 1) {
      setLoading(false);
      return setError({
        error: true,
        message: "Por favor, rellena todos los campos",
      });
    }
    if (formData.message.length < 1) {
      setLoading(false);
      return setError({
        error: true,
        message: "Por favor, rellena todos los campos",
      });
    }

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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
        message: "",
      });
      setError({ error: false, message: "" });
    } else {
      setLoading(false);
      return setError({
        error: true,
        message: data.message,
      });
    }
  };
  return (
    <>
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
        <button disabled={loading} type='submit' className='button-contacto'>
          {loading ? "Enviando..." : "Enviar"}
        </button>
        {error.error && <p className='error'>{error.message}</p>}
      </form>
    </>
  );
}
