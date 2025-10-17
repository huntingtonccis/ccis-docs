import { Container, Row, Card, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import data from '../data.json'

const Lockdown = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
    return (
        <body>
        <h4>Lockdown Commissary Details</h4>
        
           <p>Run the installer</p><br/>
            <p>For the shared path, put 172.30.30.192\lockdown</p><br />
            <ul>
            <li>ccis</li>
            <li>Huntington1!</li>
            </ul> 
        <button className='button' onClick={handleButtonClick}>Back to Install</button>
        {/* <Button 
             variant='secondary'
             style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              zIndex: 1000
             }} onClick={handleButtonClick}>Back to Install Directory</Button> */}
   </body>
    )
}

export default Lockdown