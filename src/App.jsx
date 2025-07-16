import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import InstallDashboard from './components/InstallDashboard'
import Eterlogic from './components/Eterlogic'
import Aries from './components/Aries'
import Ecws from './components/Ecws'
import Grlevel from './components/Grlevel'
import MiscNotes from './components/MiscNotes'
import Duo from './components/Duo'
import PrintLogic from './components/PrintLogic'
import LowFinancial from './components/LowFinancial'
import Onbase from './components/Onbase'

function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Fix />}/>
      <Route path="/InstallDashboard" element={<InstallDashboard/>} />
      <Route path="/MiscNotes" element={<MiscNotes />} />
      <Route path="/Eterlogic" element={<Eterlogic/>} />
      <Route path="/Aries" element={<Aries />} />
      <Route path="/Ecws" element={<Ecws />} />
      <Route path="/Grlevel" element={<Grlevel />} />
      <Route path="/Duo" element={<Duo />} />
      <Route path="/PrintLogic" element={<PrintLogic />} />
      <Route path="/LowFinancial" element={<LowFinancial />} />
      <Route path="/OnBase" element={<Onbase />} />
    </Routes>
</BrowserRouter>
  )
  
}

function Fix() {
  

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/InstallDashboard');
  };
  const handleButtonClickMiscNotes = () => {
    navigate('/MiscNotes');
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
              <Button variant="primary" onClick={handleButtonClickMiscNotes}>Miscellaneous Notes</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      
    </>

  )
}

export default App
