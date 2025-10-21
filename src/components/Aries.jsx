import { useNavigate } from 'react-router-dom'

const Aries = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
    <div className="grid-container">
      <div className="header">
        <h1>Aires Crash Report</h1>
        <button className='button' onClick={handleButtonClick}>Install Directory</button>
      </div>
      <div className='sidebar'>
        <h4>Notes:</h4>
        Crash Report application for law enforcement.
      </div>
      <div className='main-content'>
        <h2>Install Instructions</h2>
       1 Open Crash Program - ARIES      
       2 Open ARIES 6
       3 Run the latest ARIES-Setup-XXXX.exe
       4 Open Program, let it update
      </div>
    </div>
  )
}

export default Aries