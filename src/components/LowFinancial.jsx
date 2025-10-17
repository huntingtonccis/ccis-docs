import { Container, Row, Card, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import data from '../data.json'

const LowFinancial = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
     <Container className="mt-5">
      <button className='button' onClick={handleButtonClick}>Back to Install</button>
      <h1 className="mb-4">LOW Financial</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Text>
                {data.lowFinancial.map((note, index) => (
                    <p key={index}>{note}</p>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default LowFinancial