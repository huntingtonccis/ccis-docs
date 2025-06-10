import { Container, Row, Card, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

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
                 1. On ccis22, I have cloned the github repository. will need to pull for future updates. <br />
                 2. After git pull, need to run "npm run build" possibly. 
                 3. In package.json on ccis22 instance, I added under "scripts" - "dev": <br />
                    "vite --host=172.30.30.47" so in that path you only need to "run npm dev", and vite handles it. <br />                       
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