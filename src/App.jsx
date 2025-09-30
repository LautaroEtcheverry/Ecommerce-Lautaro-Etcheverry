// src/App.js
import React, { useState } from 'react';
import Navbar from './components/navbar.jsx';
import Formulario from './components/formulario.jsx';
import Tabla from './components/tabla.jsx';

const App = () => {
  const [datos, setDatos] = useState([]);
  const [vista, setVista] = useState('formulario');

  const agregarDato = (dato) => {
    setDatos([...datos, dato]);
  };

  return (
    <div>
      <Navbar setVista={setVista} />
      <div style={{ padding: '20px' }}>
        {vista === 'formulario' && <Formulario agregarDato={agregarDato} />}
        {vista === 'tabla' && <Tabla datos={datos} />}
      </div>
    </div>
  );
};

export default App;
