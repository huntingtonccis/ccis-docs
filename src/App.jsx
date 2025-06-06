import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import InstallDashboard from './components/InstallDashboard'
import { Navigate } from 'react-router-dom'
import Eterlogic from './components/Eterlogic'
import Aries from './components/Aries'
import Ecws from './components/Ecws'
import Grlevel from './components/Grlevel'

function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Fix />}/>
      <Route path="/InstallDashboard" element={<InstallDashboard/>} />
      <Route path="/Eterlogic" element={<Eterlogic/>} />
      <Route path="/Aries" element={<Aries />} />
      <Route path="/Ecws" element={<Ecws />} />
      <Route path="/Grlevel" element={<Grlevel />} />
    </Routes>
</BrowserRouter>
  )
  
}

function Fix() {
  

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
              
              <Card.Text>
              
              </Card.Text>
              <Button variant="primary" onClick={handleButtonClick}>Install Dashboard</Button>
              <Button variant="primary">Miscellaneous Notes</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      
    </>

  )
}

export default App
