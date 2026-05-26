import {useNavigate} from 'react-router-dom'

const Cubic = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    } 
    return (
     <div className='grid-container'>
            <div className='header-cell'>
                <div className='header'>
                    <h2>Cubic - City Water Dept</h2>
                    <button className='button' onClick={handleButtonClick}>Install Directory</button>
                </div>
            </div>
            <div className='spacer'/>
            <div className='sidebar'>
            <h4>Notes:</h4>
            <p>Cubic - Waterbilling</p>
            <p>Most likely need to run as </p>
            <p>administrator first time.</p>
        </div>
        <div className='main-content'>
            <h3><u>For a first time installation on a new computer</u></h3>
            <p>1. Log in DomainAdmin account </p>
            <p>2. Map &nbsp;&nbsp;<code>\\cubic\water_dept_software</code>&nbsp; to F:</p>
            <p>3. Run &nbsp;<code>F:\CUBIC.exe</code></p>
            <p></p>
            <h3><u>For a update to the software on exisiting installations</u></h3>
            <h4>Everyone has to be out of the program</h4>
            <p>1. Reboot Cubic server</p>
            <p>2. On one workstation with software installed;</p>
            <p>&nbsp;&nbsp;&nbsp; * repeat first time install steps 1-2</p>
            <p>3. Download the update - typically from email from Jennifer Gunn</p>
            <p>4. Run the file.</p>
            <p>5. During the install, ensure you point to the correct data point </p>
        </div>
     </div>
    )
}

export default Cubic