import { Container, Row, Card, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import data from '../data.json';

const MiscNotes = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/');
    }
  return (
     <Container className="mt-5">
      <h1 className="mb-4">Miscellaneous Notes</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
             <Card.Text>
                {data.miscNotes.map((note, index) => (
                 <p key={index}>{note}</p>
                ))}                                       
             </Card.Text>
            <Button variant='secondary' onClick={handleButtonClick}>Home</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MiscNotes