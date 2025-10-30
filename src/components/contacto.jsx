import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Contacto() {
    
  return (
    <Container className="p-4 bg-light rounded shadow-sm" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1525186402429-4a8b5e0b0e1b?auto=format&fit=crop&w=800&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '400px',
      position: 'relative'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.85)',
        borderRadius: '1rem',
        padding: '2rem',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h2 className="mb-3 text-center">Contáctanos</h2>
        <p className="mb-4 text-center text-muted">¿Tienes alguna consulta o comentario? Completa el formulario y te responderemos pronto.</p>
        <Form>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Tu nombre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="nombre@ejemplo.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMensaje">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje aquí..." />
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}


export default Contacto;