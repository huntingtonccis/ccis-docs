import { useNavigate } from 'react-router-dom'

const LowFinancial = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
     <div className="grid-container">
      <div className='header-cell'>
      <div className="header">
        <h1>Low Financial</h1>
        <button className='button' onClick={handleButtonClick}>Install Directory</button>
      </div>
      </div>
      <div className='spacer'/>
      <div className='sidebar'>
        <h4>Notes:</h4>
        Low Financial software for Auditor office, and 
        whomever else needs it.
      </div>
      <div className='main-content'>
        <h2>Install Instructions</h2>
       "1. Log into beagleboys.da.",
        "2. Map network drive \\low-financial\\lllow.",
        "3. In the search bar in the top of the file explorer, type in \\low-financial\\lllow\\fin\\utilities\\lowclientconfig.exe",
        "** You cannot navigate to this folder and run the .exe it will not work. You must execute the installer form the bar at the top of file explorer."
      </div>
    </div>
  )
}

export default LowFinancial