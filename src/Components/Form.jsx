import React from "react";
import { useState } from "react";


const Form = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
  });

  const [errores, setErrores] = useState({
    nombre: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === 'nombre') {
      setErrores({
        ...errores,
        nombre: e.target.value.length > 5 ? '✅' : 'El nombre debe tener más de 5 caracteres',
      });
    }

    if (e.target.name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const esValido = emailRegex.test(e.target.value);
      setErrores({
        ...errores,
        email: esValido ? '✅' : 'Ingresa un correo electrónico válido',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.nombre.length < 5 || formData.email === "") {
      return alert("Por favor verifique sus datos nuevamente");
    }else {
      alert(`Gracias ${formData.nombre}, te contactaremos cuanto antes via mail`)
    }
    

    console.log('Datos enviados:', formData);
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" placeholder="nombre" value={formData.nombre} onChange={handleChange}/>
        {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p> }
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" name="email" placeholder="email" value={formData.email} onChange={handleChange}/>
        {errores.email && <p style={{ color: 'red' }}>{errores.email}</p>}
      </div>
      <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
