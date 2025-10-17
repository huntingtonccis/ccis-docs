import { useState } from 'react'
import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const InstallDashboard = () => {
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
  const handleButtonClickDuo = () => {
    navigate('/Duo');
  };
  const handleButtonClickPrintlogic = () => {
    navigate('/PrintLogic');
  };
  const handleButtonClickLowFinancial = () => {
    navigate('/LowFinancial');
  };
  const handleButtonClickCradlePoint = () => {
    navigate('/CradlePoint');
  };
  const handleButtonClickLockdown = () => {
    navigate('/Lockdown');
  };
  return (
    <>
     <Container className="mt-5">
      <h1 className="mb-4">Welcome to the Install Dashboard</h1>
      <button className='button' onClick={handleButtonClick}>Home</button>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Button variant="primary">Spillman</Button>
              <Button variant="primary" onClick={handleButtonClickEterlogic}>Eterlogic Port Splitter</Button>
              <Button variant='primary' onClick={handleButtonClickAries}>Aries</Button> <br />
              <Button variant='primary' onClick={handleButtonClickEcws}>ECWS E-Ticket</Button>
              <Button variant='primary' onClick={handleButtonClickGrlevel}>GRLevel 3</Button>
              <Button variant='primary' onClick={handleButtonClickDuo}>Duo</Button> <br />
              <Button variant='primary' onClick={handleButtonClickPrintlogic}>Printlogic</Button>
              <Button variant='primary' onClick={handleButtonClickLowFinancial}>LOW Financial</Button>
              <Button variant='primary' onClick={handleButtonClickCradlePoint}>Cradle Point VPN</Button><br />
              <Button variant='primary' onClick={handleButtonClickLockdown}>Lockdown</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
     
    </>
  )
}

export default InstallDashboard
