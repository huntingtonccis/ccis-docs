import { useState } from 'react'
import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const InstallDashboard = () => {
  const [count, setCount] = useState(0)

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  };
  const handleButtonClickEterlogic = () => {
    navigate('/Eterlogic');
  };
  const handleButtonClickAries = () => {
    navigate('/Aries');
  };
  const handleButtonClickEcws = () => {
    navigate('/Ecws');
  };
  const handleButtonClickGrlevel = () => {
    navigate('/Grlevel');
  };
  return (
    <>
     <Container className="mt-5">
      <h1 className="mb-4">Welcome to the Install Dashboard</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              
              <Card.Text>
                
              </Card.Text>
              <Button variant="primary">Spillman</Button>
              <Button variant="primary" onClick={handleButtonClickEterlogic}>Eterlogic Port Splitter</Button>
              <Button variant='primary' onClick={handleButtonClickAries}>Aries</Button><br />
              <Button variant='primary' onClick={handleButtonClickEcws}>ECWS E-Ticket</Button>
              <Button variant='primary' onClick={handleButtonClickGrlevel}>GRLevel 3</Button>
              <br /><Button variant='secondary' onClick={handleButtonClick}>Home</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
     
    </>
  )
}

export default InstallDashboard
