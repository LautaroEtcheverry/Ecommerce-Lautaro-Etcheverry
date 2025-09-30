import React, { useState } from 'react';

const Formulario = ({ agregarDato }) => {
  const [texto, setTexto] = useState("");
  const [numero, setNumero] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (texto && numero) {
      agregarDato({ texto, numero });
      setTexto("");
      setNumero("");
    } else {
      alert("Completa ambos campos.");
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Texto"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <input
        type="number"
        placeholder="Número"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Formulario;
