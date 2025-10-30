import React, { useState } from "react";
import NavbarTienda from "./components/NavbarTienda";
import Inicio from "./components/inicio.jsx";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";
import { Modal } from "react-bootstrap";
import TextControlsExample from "./components/contacto.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCarrito, setShowCarrito] = useState(false);

  const handleAddToCart = (producto) => {
    setCartItems((prev) => [...prev, producto]);
  };

  const handleRemoveItem = (item) => {
    setCartItems((prev) => prev.filter((i, idx) => i.id !== item.id || idx !== prev.findIndex((x) => x.id === item.id)));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleShowCarrito = () => setShowCarrito(true);
  const handleCloseCarrito = () => setShowCarrito(false);

  return (
    <>
      <NavbarTienda cartCount={cartItems.length} onCartClick={handleShowCarrito} />
      <Inicio />
      <div id="productos">
        <Productos onAddToCart={handleAddToCart} />
      </div>
      <Modal show={showCarrito} onHide={handleCloseCarrito} centered size="md">
        <Modal.Header closeButton>
          <Modal.Title>Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carrito cartItems={cartItems} onRemoveItem={handleRemoveItem} onClearCart={handleClearCart} />
        </Modal.Body>
      </Modal>
      <div id="contacto" className="my-5">
        <TextControlsExample />
      </div>
    </>
  );
}

export default App;
