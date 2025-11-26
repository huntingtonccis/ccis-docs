import { useNavigate } from 'react-router-dom'

const MiscNotes = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/');
    }
  return (
    <div className="grid-container">
      <div className="header-cell">
       <div className="header">
        <h1>Miscellaneous</h1>
        <button className="button" onClick={handleButtonClick}>Home</button>
       </div>
      </div>
      <div className="spacer" />
      <div className="sidebar">
        <h4>
          Notes?  
        </h4>
      </div>
      <div className="main-content">
        <h2>AOD - Attendance On Demand</h2>
        <p>Server Name:</p>
        <p>huntingtoncountyin</p>
        <p>ESS Mobile</p>
      </div>
    </div>
  )
}

export default MiscNotes