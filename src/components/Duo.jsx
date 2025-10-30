import { useNavigate } from 'react-router-dom'

const Duo = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
    
    <div className='grid-container'>
      <div className='header-cell'>
      <div className='header'>
        <h1>Duo MFA</h1>
        <button className="button" onClick={handleButtonClick}>Install Directory</button>
        </div>
      </div>
      <div className='spacer'/>
      <div className="sidebar">
        <h4>Notes:</h4>
        Cisco DUO MFA
      </div>
      <div className="main-content">
        <p>1. Open <code>\\ccis22\install\duo</code></p>
        <p>2. Copy duo.bat and duosilent.exe to the computer locally.</p>
        <p>3. Run duo.bat (you can run as other user if you're logged into an employee's user accuont).</p>
      </div>
    </div>
  )
}

export default Duo