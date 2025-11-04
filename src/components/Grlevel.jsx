import { useNavigate } from 'react-router-dom'

const Grlevel = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
     <div className="grid-container">
      <div className='header-cell'>
      <div className="header">
        <h1>GRLevel</h1>
        <button className='button' onClick={handleButtonClick}>Install Directory</button>
      </div>
      </div>
      <div className='spacer'/>
      <div className='sidebar'>
        <h4>Notes:</h4>
        <p>
        GRLevel weather radar software for EMA and Dispatch
        </p>
      </div>
      <div className='main-content'>
       <h2>Install Instructions</h2>
        <p>1. Install grlevel3_setup.exe</p>
        <p>2. Install <code>new_grlevel3_2_setup.exe</code></p>
        <p>3. Open GRLevel3_2.</p>
        <p>4. Click <code>Help/About - Register</code></p>
        <p>5. Put in registration in key.txt file for specific machine. </p> 
        <p>6. Then put in old key in the same key.txt file at the top.</p> 
        <p>7. Click Site - Settings - Change default radar on open to Fort Wayne ~ Ok ~ Ok </p> 
        <p>8. Close and Reopen</p>
      </div>
    </div>
  )
}

export default Grlevel