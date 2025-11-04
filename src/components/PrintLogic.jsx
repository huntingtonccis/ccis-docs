import { useNavigate } from 'react-router-dom'

const PrintLogic = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
     <div className="grid-container">
      <div className='header-cell'>
      <div className="header">
        <h1>PrintLogic</h1>
        <button className='button' onClick={handleButtonClick}>Install Directory</button>
      </div>
      </div>
      <div className='spacer'/>
      <div className='sidebar'>
        <h4>Notes:</h4>
        <p>
        PrintLogic application
        </p>
      </div>
      <div className='main-content'>
        <h2>Install Instructions</h2>
        <p>1. Open <code>\\ccis22\install\printlogic</code></p>
        <p>2. Copy <code>printlogic.bat</code> to the computer locally.</p>
        <p>3. Run <code>printlogic.bat</code></p>
        <p>4. Under <code>C:\Progam Files(x86)\Printer Properties Pro\Printer Installer Client</code>, copy PrinterInstallerClient.exe to shell:common startup.</p>
        <p>This will force the print service to launch at startup of machine</p>
    </div>
    </div>
  )
}

export default PrintLogic