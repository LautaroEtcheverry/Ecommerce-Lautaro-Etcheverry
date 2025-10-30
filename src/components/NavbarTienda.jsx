import React from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { CartFill } from "react-bootstrap-icons";

function NavbarTienda({ cartCount = 0, onCartClick }) {
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
  
        <Navbar.Brand href="#home" className="fw-bold">
        LAPTOPS
        </Navbar.Brand>

        {/* Botón hamburguesa */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>

            {/* Carrito con ícono */}
            <Nav.Link href="#carrito" className="d-flex align-items-center" onClick={e => {e.preventDefault(); onCartClick && onCartClick();}}>
              <CartFill size={20} />
              <Badge bg="light" text="dark" className="ms-1">
                {cartCount}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTienda;
