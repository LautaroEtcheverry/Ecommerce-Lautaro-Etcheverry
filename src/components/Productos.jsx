import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";

function Productos({ onAddToCart }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/laptops")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.products);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
        setCargando(false);
      });
  }, []);

  // Cargando productos
  if (cargando) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">Cargando productos...</p>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Laptops</h2>
      <Row className="g-4">
        {productos.map((producto) => (
          <Col key={producto.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={producto.thumbnail}
                alt={producto.title}
                style={{ objectFit: "cover", height: "180px" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ fontSize: "1rem" }}>
                  {producto.title}
                </Card.Title>
                <Card.Text className="text-muted small mb-2">
                  {producto.brand}
                </Card.Text>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <strong>${producto.price}</strong>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onAddToCart && onAddToCart(producto)}
                  >
                    Añadir al carrito
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Productos;
