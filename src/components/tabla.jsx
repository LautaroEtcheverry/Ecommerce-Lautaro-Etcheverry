import React from 'react';

const Tabla = ({ datos }) => {
  return (
    <div>
      <h3>Datos Enviados</h3>
      {datos.length === 0 ? (
        <p>No hay datos</p>
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Texto</th>
              <th>Número</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((item, index) => (
              <tr key={index}>
                <td>{item.texto}</td>
                <td>{item.numero}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Tabla;

