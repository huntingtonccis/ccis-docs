import { Container, Row, Card, Button, Col, CardBody, CardText } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import data from '../data.json'

const Onbase = () => {

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }

    return (
        <Container className="mt-5">
            <h1 className="mb-4">OnBase</h1>
        <Row>
            <Col md={4}>
            <Card>
                <CardBody>
                    <CardText>
                        {data.onBase.map((note, index) => (
                            <p key={index}>{note}</p>
                        ))}
                    </CardText>
                  <Button variant="secondary" onClick={handleButtonClick}>Back to Install Directory</Button>   
                </CardBody>
               </Card>
              </Col>
            </Row>        
        </Container>
  )
}

export default Onbase