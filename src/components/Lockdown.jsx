import { useNavigate } from 'react-router-dom'

const Lockdown = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
    return (
        <div className="grid-container">
            <div className='header-cell'>
            <div className="header">
        <h1>Lockdown</h1>
        <button className='button' onClick={handleButtonClick}>Back to Install</button>
        </div>
        </div>
        <div className='spacer'/>
        <div className='sidebar'>
            <h4>Notes:</h4>
            Lockdown is for Jail Commissary department.
            This is physically stored
            on a dell computer in the Jail server room
            by IT office.  
        </div>
         <div className="main-content">
            <h2>Install Instructions</h2>
            <p>Run the installer - located here:</p>
            <ul>
            \\ccis22\install\Jail Install\LockdownInstall
            </ul>
            <p>For the shared path, put 172.30.30.192\lockdown</p>
            <ul>
            <li>ccis</li>
            <li>Huntington1!</li>
            </ul>           
         </div>
        </div>        
    )
}

export default Lockdown