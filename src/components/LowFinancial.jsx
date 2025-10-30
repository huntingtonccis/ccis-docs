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
        <p>
        <strong>LOW Financial</strong> software for Auditor office, and 
        whomever else needs it.
        </p>
        <p>
          <h4>
            Knowledge Base:
          </h4>
        </p>
        <p>
        If a certain report doesn't work properly, you could try deleting the following registry key on one of the users who are having an issue and see if resetting the defaults for the Low Apps addresses it.
        <p>
        <code>Computer\HKEY_CURRENT_USER\Software\Low Associates Inc</code>
        </p>
        </p>
      </div>
      <div className='main-content'>
        <h2>Install Instructions</h2>
         <p>1. Log into beagleboys.da.</p>
         <p>2. Map network drive \\low-financial\\lllow.</p>
         <p>3. In the search bar in the top of the file explorer, type in <br /><code>\\low-financial\lllow\fin\utilities\lowclientconfig.exe</code></p>
        <p>** You cannot navigate to this folder and run the .exe it will not work. You must execute the installer form the bar at the top of file explorer.</p>
      </div>
    </div>
  )
}

export default LowFinancial