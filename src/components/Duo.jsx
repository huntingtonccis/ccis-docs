import { Container, Row, Card, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import data from '../data.json'

const Duo = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
    
    <div className='grid-container'>
      <div className='header-cell'>
      <div className='header'>
        <h1>Duo MFA</h1>
        <button className="button" onClick={handleButtonClick}>Install Directory</button>
        </div>
      </div>
      <div className='spacer'/>
      <div className="sidebar">
        <h4>Notes:</h4>
        Cisco DUO MFA
      </div>
      <div className="main-content">
        Open \\ccis22\install\Duo
        Copy duo.bat and duosilent.exe to the computer locally.
        Run duo.bat (you can run as other user if you're logged into an employee's user accuont).
      </div>
    </div>
     
  )
}

export default Duo