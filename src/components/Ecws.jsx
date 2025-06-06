import { Container, Row, Card, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Ecws = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
     <Container className="mt-5">
      <h1 className="mb-4">ECWS - E-Ticket</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              
              <Card.Text>
                
                1. Open ECWS folder<br />
                2. Run ECWSClientinstall5.0.98.exe<br />
                3. Install everything it asks<br />
                4. Open ECWS (not the training), fill out either huntington county or city, enter the computer name under description <br />
                5. Got to https://mycourts.in.gov/default.aspx <br />
                6. Log in, navigate to ECWS Central Repository-Admin-devices.<br />
                7. Find the device you just added, click edit <br />
                8. Assign the officer to the device, or just assign all. <br />
                9. OK
                
                
              </Card.Text>
            
              <Button variant='secondary' onClick={handleButtonClick}>Back to Install Directory</Button>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Ecws