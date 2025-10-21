import { useNavigate } from 'react-router-dom'

const PrintLogic = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
     <div className="grid-container">
      <div className="header">
        <h1>PrintLogic</h1>
        <button className='button' onClick={handleButtonClick}>Install Directory</button>
      </div>
      <div className='sidebar'>
        <h4>Notes:</h4>
        PrintLogic application
      </div>
      <div className='main-content'>
        <h2>Install Instructions</h2>
       "1. Open \\ccis22\\install\\printlogic",
        "2. Copy printlogic.bat to the computer locally.",
        "3. Run printlogic.bat",
        "4. Under C:\\Progam Files(x86)\\Printer Properties Pro\\Printer Installer Client, copy PrinterInstallerClient.exe to shell:common startup.",
        "This will force the print service to launch at startup of machine."
    </div>
    </div>
  )
}

export default PrintLogic