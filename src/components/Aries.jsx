import { Container, Row, Card, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Aries = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
     <Container className="mt-5">
      <h1 className="mb-4">ARIES - Crash Reports</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              
              <Card.Text>
                
                1. Open Crash Program - ARIES<br />

                2. Open ARIES 6<br />

                3. Run the latest ARIES-Setup-XXXX.exe<br />

                4. Open Program, let it update <br />

                
                
                
              </Card.Text>
            
              <Button variant='secondary' onClick={handleButtonClick}>Back to Install Directory</Button>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Aries