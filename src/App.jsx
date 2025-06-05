import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import InstallDashboard from './components/InstallDashboard'
import { Navigate } from 'react-router-dom'

function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Fix />}/>
      <Route path="/InstallDashboard" element={<InstallDashboard/>} />
    </Routes>
</BrowserRouter>
  )
  
}

function Fix() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/InstallDashboard');
  };

  return (
    
    <>
   
     <Container className="mt-5">
      <h1 className="mb-4">Welcome to CCIS-Documentation</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Example Card</Card.Title>
              <Card.Text>
                This is a simple example of a React-Bootstrap Card.
              </Card.Text>
              <Button variant="primary" onClick={handleButtonClick}>Install Dashboard</Button>
              <Button variant="primary">Miscellaneous Notes</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
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

export default App
