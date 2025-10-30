import React from "react";
import { Container, Button } from "react-bootstrap";

function Inicio() {
  return (
    <div
      className="bg-dark text-light d-flex align-items-center"
      style={{
        height: "100vh",
        
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="text-center">
        <h1 className="fw-bold display-4">BIENVENIDO A MI TIENDA</h1>
        <p className="lead mt-3 mb-4">
          Descubrí las mejores laptops al mejor precio.
        </p>
        <Button variant="primary" size="lg" href="#productos">
          Ver productos
        </Button>
      </Container>
    </div>
  );
}

export default Inicio;
