import React from 'react'
import { Container, Row, Card, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Eterlogic = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
     <Container className="mt-5">
      <h1 className="mb-4">Eterlogic Port Splitter</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Text>
                *** If you install this under "Run as other user", you must run as administrator bfore the program will function. ***<br />
                <br />
                <br />
                1. Open "New Port Splitter"<br />
                2. Run SetupVSPE_64.msi <br />
                3. Go back to Eterlogic Port Splitter folder, copy license key from “Key.txt”. <br />
                4. Open program, go to help-enter license key, paste key. <br />
                5. Creating a virtual port for scanner - Check device manager to see what COM port the scanner is. <br />
                6. Go back to port splitter, click on “Create new device…” <br />
                7. Device type – Virtual splitter. <br />
                8. Check box that says “Special mode: create single virtual port which can be opened many times”. <br />
                9. “COM Port to use as a data source” – COM port that the scanner was in step 1. <br />
                10. Under “Selected virtual port settings”, choose a port that is not in use, usually 10 and above. It does not matter as long as it isn’t in use under device manager. <br />
                11. Click finish. <br />
                12. Save config file as – choose location, temp is usually fine. <br />
                13. Let the officer know where it is in case they need to start it. You can also put this config file under shell:common startup so that it always launches on startup. 
                
                
              </Card.Text>
             <Button variant='secondary' onClick={handleButtonClick}>Back to Install Directory</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Eterlogic