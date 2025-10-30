import React from "react";
import { Container, ListGroup, Button, Row, Col } from "react-bootstrap";

function Carrito({ cartItems = [], onRemoveItem, onClearCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container className="my-4" id="carrito">
      <h3 className="mb-3">Carrito</h3>

      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ListGroup variant="flush" className="mb-3">
            {cartItems.map((item, idx) => (
              <ListGroup.Item key={`${item.id}-${idx}`}> 
                <Row className="align-items-center">
                  <Col xs={8}>
                    <strong>{item.title}</strong>
                    <div className="text-muted small">{item.brand}</div>
                  </Col>
                  <Col xs={2} className="text-end">${item.price}</Col>
                  <Col xs={2} className="text-end">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => onRemoveItem && onRemoveItem(item)}
                    >
                      Quitar
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <div className="d-flex justify-content-between align-items-center">
            <strong>Total: ${total.toFixed(2)}</strong>
            <div>
              <Button variant="secondary" size="sm" className="me-2" onClick={() => onClearCart && onClearCart()}>
                Vaciar
              </Button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
}

export default Carrito;
