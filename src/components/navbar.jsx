import React from 'react';

const Navbar = ({ setVista }) => {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
      <h2 style={{ display: 'inline', marginRight: '20px' }}>Formulario</h2>
      <button onClick={() => setVista('formulario')} style={{ marginRight: '10px' }}>
        Formulario
      </button>
      <button onClick={() => setVista('tabla')}>Tabla</button>
    </nav>
  );
};

export default Navbar;

