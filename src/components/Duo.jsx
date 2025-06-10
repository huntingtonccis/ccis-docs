import { Container, Row, Card, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Duo = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
     <Container className="mt-5">
      <h1 className="mb-4">Duo</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>    
              <Card.Text>
                1. Open \\ccis22\install\duo. <br />
                2. Copy duo.bat and duosilent.exe to the computer locally. <br />
                3. Run duo.bat (you can run as other user if you're logged into an employee's user accuont). <br />                  
              </Card.Text>
              <Button variant='secondary' onClick={handleButtonClick}>Back to Install Directory</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Duo