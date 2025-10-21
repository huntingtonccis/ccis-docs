import { useNavigate } from 'react-router-dom'

const Grlevel = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
     <div className="grid-container">
      <div className="header">
        <h1>GRLevel</h1>
        <button className='button' onClick={handleButtonClick}>Install Directory</button>
      </div>
      <div className='sidebar'>
        <h4>Notes:</h4>
        GRLevel weather radar software for EMA and Dispatch
      </div>
      <div className='main-content'>
        <h2>Install Instructions</h2>
       "1. Install grlevel3_setup.exe",
        "2. Install new_grlevel3_2_setup.exe",
        "3. Open GRLevel3_2.",
        "4. Click Help/About - Register1",
        "5. Put in registration in key.txt file for specific machine.  ",
        "6. Then put in old key in the same key.txt file at the top. ",
        "7. Click Site - Settings - Change default radar on open to Fort Wayne - Ok - Ok. ",
        "8. Close and Reopen "
      </div>
    </div>
  )
}

export default Grlevel