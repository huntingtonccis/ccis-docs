import { useNavigate } from 'react-router-dom'

const Keystone = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
    return (
        <div className="grid-container">
            <div className="header-cell">
                <div className="header">
                    <h1>Keystone</h1>
                    <button className='button' onClick={handleButtonClick}>Install Directory</button>
                </div>
            </div>
            <div className='spacer' />
            <div className='sidebar' >
            <h4>Notes:</h4>
            <p>
            Make sure everyone is out of application 
            on first update as it will 
            update the database.
            </p>
            <p>
            With first install on a computer,
            you may need to run one or both 
            of these setup files.
            </p>
            <p style = {{ overflowWrap: 'break-word'}}>
            <code>\\keystone\keystone\keyinstalls\VFP9 Runtime Files\setup.exe</code>
            </p>
            <p style = {{ overflowWrap: 'break-word'}}>
            <code>\\keystone\keystone\keyinstalls\Work Station Runtime Files\setup.exe</code>
            </p>
        </div>
        <div>
            <div className='main-content'>
                <h2>Install Instructions</h2>
                <p>1. Have new file downloaded and placed \\Keystone\keystone\keyinstalls
                    with updated license information if available. </p>
                <p>2. Log in as domain admin to user workstation i.e. cityclerk11 .</p>
                <p>3. Map \\keystone\keystone\   as F:\ </p>
                <p>4. Run install file, open program.</p>
                <p>5. After this, you can update on other computers that need it, using the same steps, but people can use the program at this point.</p>
            </div>
        </div>
        </div>
    )
}

export default Keystone