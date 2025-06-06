import { Container, Row, Card, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Grlevel = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
     <Container className="mt-5">
      <h1 className="mb-4">GRLevel - 3 - Weather app</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Text>
                1. Install grlevel3_setup.exe<br />
                2. Install new_grlevel3_2_setup.exe<br />
                3. Open GRLevel3_2.<br />
                4. Click Help/About - Register1 <br />
                5. Put in registration in key.txt file for specific machine.  <br />
                6. Then put in old key in the same key.txt file at the top.  <br />
                7. Click Site - Settings - Change default radar on open to Fort Wayne - Ok - Ok.  <br />
                8. Close and ReOpen  <br />
                
              </Card.Text>
             <Button variant='secondary' onClick={handleButtonClick}>Back to Install Directory</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Grlevel