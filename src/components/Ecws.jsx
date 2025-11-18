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
        <p>ECWS - law enforcement ticket application</p>
      </div>
      <div className="main-content">
       <h2>Install Instructions</h2>
        <p>1. Open ECWS folder</p>
        <p>2. Run <code>ECWSClientinstall5.0.98.exe</code> (or latest installer version)</p>
        <p>3. Install everything it asks</p>
        <p>4. Open ECWS (not the training), fill out either huntington county or city, enter the computer name under description</p>
        <p>5. Got to https://mycourts.in.gov/default.aspx</p>
        <p>6. Log in, navigate to ECWS Central Repository-Admin-devices.</p>
        <p>7. Find the device you just added, click edit</p>
        <p>8. Assign the officer to the device, or just assign all.</p>
        <p>9. Ok</p>
        <h2>If SQL Failing on Launch issue</h2>
         <p>1. Open Registry Editor <code>(regedit.exe).</code></p>
         <p>2. Go to Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\stornvme\Parameters\Device.</p>
         <p>3. Add a Multi-String Value ForcedPhysicalSectorSizeInBytes.</p>
         <p>4. Set the value to * 4096 (not * 4095 as originally suggested by Microsoft's guide).</p>
         <p>5. Restart computer.</p>
         <p>** You may need to uninstall sql server express and reinstall</p>
      </div>
    </div>
  )
}

export default Ecws