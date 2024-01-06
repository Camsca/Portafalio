import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contact() {
  return (
 
    <Form>
         <br />
      <Row>
        <Form.Label column lg={2}>
          Normal Text
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="Normal text" />
        </Col>
      </Row>
      <br />

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

     <Row>
        <Form.Label column="lg" lg={2}>
          Large Text
        </Form.Label>
        <Col>
          <Form.Control size="lg" type="text" placeholder="Large text" />
        </Col>
      </Row>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default Contact;