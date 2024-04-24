import React, { useState } from 'react';
import './assets/formulario.css';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    edad: '',
    contraseña: '',
    descripcion: '',
    seleccion: '',
    fecha: '',
    hora: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mt-4">
      <div className="formulario-container">
        <h2 className="formulario-title text-center">Formulario</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="edad" className="form-label">Edad</label>
            <input type="number" className="form-control" id="edad" name="edad" value={formData.edad} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="contraseña" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="contraseña" name="contraseña" value={formData.contraseña} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">Descripción</label>
            <textarea className="form-control" id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="seleccion" className="form-label">Genero</label>
            <select className="form-select" id="seleccion" name="seleccion" value={formData.seleccion} onChange={handleChange}>
              <option value="">Selecciona una opción</option>
              <option value="opcion1">Femenino</option>
              <option value="opcion2">Masculino</option>
              <option value="opcion3">Otro</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="fecha" className="form-label">Fecha</label>
            <input type="date" className="form-control" id="fecha" name="fecha" value={formData.fecha} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="hora" className="form-label">Hora</label>
            <input type="time" className="form-control" id="hora" name="hora" value={formData.hora} onChange={handleChange} />
          </div>
          <div className='text-center'>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
