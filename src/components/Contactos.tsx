import { signal } from "@preact/signals";

import "./Contactos.css";

export default function ContactosForm() {
  const text = signal("");

  function onSubmit(e: any) {
    e.preventDefault();
    alert("Submitted a todo");
  }
  return (
    <form className='form' onSubmit={onSubmit}>
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
          value={text.value}
        />
        <input
          className='input-control'
          type='text'
          placeholder='Apellido'
          value={text.value}
        />
      </div>
      <input
        className='input-control'
        type='email'
        autocomplete='email'
        placeholder='Correo Electrónico'
        value={text.value}
      />
      <input
        className='input-control'
        type='tel'
        placeholder='No. de teléfono'
        value={text.value}
      />
      <textarea className='input-textarea' placeholder='Mensaje'></textarea>
      <button type='submit' className='button-contacto'>
        Enviar
      </button>
    </form>
  );
}
