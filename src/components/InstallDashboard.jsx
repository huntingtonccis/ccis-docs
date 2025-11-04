import { Container, Button } from 'react-bootstrap'
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
     <Container className="mt-5">
      <div className="headerDash">
       <h1>Welcome to the Install Dashboard</h1>
       <button className='button' onClick={handleButtonClick}>Home</button>
      </div>
        <div className='button-grid'>
         <Button variant='primary' onClick={handleButtonClickAries}>Aries</Button>
         <Button variant='primary' onClick={handleButtonClickCradlePoint}>Cradle Point VPN</Button>
         <Button variant='primary' onClick={handleButtonClickDuo}>Duo</Button>
         <Button variant='primary' onClick={handleButtonClickEcws}>ECWS E-Ticket</Button>
         <Button variant="primary" onClick={handleButtonClickEterlogic}>Eterlogic Port Splitter</Button>        
         <Button variant='primary' onClick={handleButtonClickGrlevel}>GRLevel 3</Button>
         <Button variant='primary' onClick={handleButtonClickLockdown}>Lockdown</Button>
         <Button variant='primary' onClick={handleButtonClickLowFinancial}>LOW Financial</Button>
         <Button variant='primary' onClick={handleButtonClickPrintlogic}>Printlogic</Button>
         <Button variant="primary" margin="10px">Spillman</Button>
        </div>
    </Container>  
  )
}

export default InstallDashboard

