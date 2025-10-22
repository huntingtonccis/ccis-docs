import { Container, Row, Card, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import data from '../data.json'

const Ecws = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
    <div className="grid-container">
      <div className="header-cell">
      <div className="header">
        <h1>ECWS</h1>
        <button className='button' onClick={handleButtonClick}>Install Directory</button>
      </div>
      </div>
      <div className="spacer"/>
      <div className="sidebar">
        <h4>Notes:</h4>
        ECWS - law enforcement ticket application
      </div>
      <div className="main-content">
        <h2>Install Instructions</h2>
        "1. Open ECWS folder",
        "2. Run ECWSClientinstall5.0.98.exe (or latest installer version)",
        "3. Install everything it asks",
        "4. Open ECWS (not the training), fill out either huntington county or city, enter the computer name under description",
        "5. Got to https://mycourts.in.gov/default.aspx",
        "6. Log in, navigate to ECWS Central Repository-Admin-devices.",
        "7. Find the device you just added, click edit",
        "8. Assign the officer to the device, or just assign all.",
        "9. Ok"
      </div>
    </div>
  )
}

export default Ecws