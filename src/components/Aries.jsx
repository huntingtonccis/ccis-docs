import { useNavigate } from 'react-router-dom'

const Aries = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
    <div className="grid-container">
      <div className="header-cell">
      <div className="header">
        <h1>Aires Crash Report</h1>
        <button className='button' onClick={handleButtonClick}>Install Directory</button>
      </div>
      </div>
      <div className="spacer"/>
      <div className='sidebar'>
        <h4>Notes:</h4>
        Crash Report application for law enforcement.
      </div>
      <div className='main-content'>
        <h2>Install Instructions</h2>
       <p>1. Open Crash Program - ARIES</p>    
       <p>2. Open ARIES 6</p>
       <p>3. Run the latest ARIES-Setup-XXXX.exe</p>
       <p>4. Open Program, let it update</p>
      </div>
    </div>
  )
}

export default Aries