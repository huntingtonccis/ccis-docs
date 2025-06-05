import { useState } from 'react'
import { Container, Button, Card, Row, Col } from 'react-bootstrap'


const InstallDashboard = () => {
  const [count, setCount] = useState(0)

  return (
    <>
     <Container className="mt-5">
      <h1 className="mb-4">Welcome to the Install Dashboard</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Example Card</Card.Title>
              <Card.Text>
                This is a simple example of a React-Bootstrap Card.
              </Card.Text>
              <Button variant="primary">Spillman</Button>
              <Button variant="primary">Eterlogic Port Splitter</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      <div>
       
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default InstallDashboard
