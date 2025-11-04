import { useNavigate } from 'react-router-dom'

const Eterlogic = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
     <div className="grid-container">
      <div className='header-cell'>
      <div className="header">
        <h1>Eterlogic Port Splitter</h1>
        <button className='button' onClick={handleButtonClick}>Install Directory</button>
      </div>
      </div>
      <div className='spacer'/>
      <div className='sidebar'>
        <h4>Notes:</h4>
        <p>
        Port splitter application for law enforcement in vehicle barcode scanners.
        </p>
        <p>
        If you install this under <code>Run as other user,</code> you must run as administrator before the program will function.
        </p>
      </div>
      <div className='main-content'>
        <h2>Install Instructions</h2>
       
        <p>1. Run SetupVSPE_64.msi"</p>                                                                                                                                                          
        <p>2. Open <code>New Port Splitter</code></p>
        <p>3. Go back to Eterlogic Port Splitter folder, copy license key from  <code>Key.txt</code></p>
        <p>4. Open program, go to help-enter license key, paste key. </p>
        <p>5. Creating a virtual port for scanner - Check device manager to see what COM port the scanner is." </p>
        <p>6. Go back to port splitter, click on “Create new device…” </p>
        <p>7. Device type – Virtual splitter.</p>
        <p>8. Check box that says “Special mode: create single virtual port which can be opened many times”. </p>
        <p>9. “COM Port to use as a data source” – COM port that the scanner was in step 1.</p>
        <p>10. Under “Selected virtual port settings”, choose a port that is not in use, usually 10 and above. It does not matter as long as it isn’t in use under device manager. </p>
        <p>11. Click Finish</p>
        <p>12. Save config file as – choose location, temp is usually fine.</p>
        <p>13. Let the officer know where it is in case they need to start it. You can also put this config file under shell:common startup so that it always launches on startup </p>
   
      </div>
    </div>
  )
}

export default Eterlogic