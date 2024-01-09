import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <Card className="bg-dark text-white">
      <Card.Body>
        <Row>
          <Col xs={4}> {/* Ancho de la columna para la imagen */}
            <Card.Img src="src/assets/IMG_7608 Large.jpeg" alt="Card image" />
          </Col>
          <Col xl={8}> {/* Ancho de la columna para el texto */}
            <Card.Title>About me</Card.Title>
            <Card.Text>
            Aspiring Full Stack Developer
              Eager to Learn and Create: Thriving on the possibilities that coding offers, I'm immersing myself to gain the skills needed to craft impactful web applications. I've taken on the challenge of mastering technologies like JavaScript, Node, SQL, MongoDB, and React. My excitement lies in learning how these pieces fit together in the digital puzzle. 🌱 Future Goals and Beyond: As I progress, I'm eager to challenge myself with a single-page application using the MERN stack. This journey isn't just about acquiring skills; it's about transforming my passion for coding into a meaningful career.
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default About;