import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function About() {
    return (
        <Card className="bg-dark text-white">
           
            <Card.Body>
                <Row>
                    <Col xs={6}> {/* Establece el ancho de la columna para la imagen */}
                        <Card.Img src="holder.js/100px270" alt="Card image" />
                    </Col>
                    <Col xs={6}> {/* Establece el ancho de la columna para el texto */}
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Body>
                <Card.Text>This is some text within a card body.</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default About;
