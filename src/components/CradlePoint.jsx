import { Card, Button, Badge, ListGroup, } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };
  return (
    <Button size="sm" variant={copied ? 'success' : 'outline-secondary'} onClick={copy}>
      {copied ? 'Copied' : 'Copy'}
    </Button>
  );
}

export default function CradlePoint() {
  const navigate = useNavigate();
  const handleButtonClick = () => navigate('/InstallDashboard');

  const METRONET_IP = '69.174.162.228';
  const SECRET_PSK = 'empty';

  return (
    
<div className="grid-container">
  <div className='header-cell'>
      <div className="header">
        <h1>CradlePoint VPN</h1>
        <button className='button' onClick={handleButtonClick}>Install Dashboard</button>
      </div>
      </div>
      <div className='spacer'/>
      <div className='sidebar'>
      <h2>Notes:</h2>
       <p>
        Metronet IP: <code>{METRONET_IP}</code>
       </p>
       <p>
        <h3>Quick Reference</h3>
       </p>
         <p><a href="https://www.cradlepointecm.com/" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary">
          CradlePoint Website</a>
         </p>            
        <p>Example IP's / Range</p>  
        <p><strong>AndrewsPD</strong> <code>172.21.170.1</code></p>
        <strong>HPD09</strong><code>172.21.9.1</code>
       <p><strong>SHERIFF03</strong><code>172.21.103.1</code></p>
        <code>172.21.&lt;carNumber&gt;.1</code>  
      </div>
      <div className='main-content'>
      <h2>CradlePoint Config</h2>
      <ListGroup as="ol" numbered className="mb-0">
                      <ListGroup.Item as="li">
                        Open&nbsp;
                        <a href="https://www.cradlepointecm.com/" target="_blank" rel="noreferrer">
                          cradlepointecm.com
                        </a>
                      </ListGroup.Item>

                      <ListGroup.Item as="li">Find device to configure and clear its configuration.</ListGroup.Item>
                      <ListGroup.Item as="li">Move device to the proper group and rename the device.</ListGroup.Item>

                      <ListGroup.Item as="li">
                        Navigate to:
                        <ul className="mb-2">
                          <li>Configuration → Edit → Networking → Local Networks → Local IP Networks</li>
                          <li>Change Local Primary to <code>172.21.&lt;carNumber&gt;.1</code></li>
                        </ul>

                        <div className="small text-muted mb-2">
                          <Badge bg="secondary" className="me-2">Example</Badge>
                          HPD Car 09 → <code>172.21.9.1</code>
                        </div>
                        <div className="small text-muted">
                          <Badge bg="secondary" className="me-2">Example</Badge>
                          Sheriff Car 03 → <code>172.21.103.1</code>
                        </div>
                      </ListGroup.Item>

                      <ListGroup.Item as="li">
                        Navigate to:
                        <ul>
                          <li>Configuration → Edit → Networking → Tunnels → IPSec → HSD</li>
                          <li>Set <strong>Local Identity</strong> to the device’s static IP (from Verizon)</li>
                          <li>Set <strong>Local Networks</strong> to <code>172.21.&lt;carNumber&gt;.1</code></li>
                          <li>Commit changes and reboot the device</li>
                        </ul>
                      </ListGroup.Item>
                    </ListGroup>

          <h2>FortiGate Config</h2>
          <p className="mb-2">
                      Using <code>SHERIFF03</code> as a baseline and adding <code>HPD09</code> as a new tunnel.
                    </p>

                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="fw-semibold">CLI (phase1-interface)</div>
                      <CopyBtn text={`show vpn ipsec phase1-interface "SHERIFF03"
config vpn ipsec phase1-interface
  edit "HPD09"
  # replicate SHERIFF03 values and adjust for HPD09
next
end`} />
                    </div>
                    <pre className="bg-light p-2 rounded">
                      <code>{`show vpn ipsec phase1-interface "SHERIFF03"
config vpn ipsec phase1-interface
  edit "HPD09"
  # replicate SHERIFF03 values and adjust for HPD09
next
end`}</code>
                    </pre>

                    <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                      <div className="fw-semibold">CLI (phase2-interface)</div>
                      <CopyBtn text={`show vpn ipsec phase2-interface "SHERIFF03"
config vpn ipsec phase2-interface
  edit "HPD09"
  # replicate and adjust selectors
next
end`} />
                    </div>
                    <pre className="bg-light p-2 rounded">
                      <code>{`show vpn ipsec phase2-interface "SHERIFF03"
config vpn ipsec phase2-interface
  edit "HPD09"
  # replicate and adjust selectors
next
end`}</code>
                    </pre> 
                    <hr />

                    <h4 className="mt-3">GUI tasks</h4>
                    <ListGroup as="ol" numbered>
                      <ListGroup.Item as="li">Policy &amp; Objects → Addresses → <em>Clone</em> from existing.</ListGroup.Item>
                      <ListGroup.Item as="li">
                        Create <strong>HPD-CAR-09-RemoteInternal</strong> with subnet <code>172.21.9.1/24</code> (update per car).
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        Add to <strong>HPD-CARS-RemoteInternalPGrp</strong>.
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        Network → Static Routes → <em>Clone</em> → set interface to the new VPN, add a Blackhole route.
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        Policy &amp; Objects → Firewall Policy:
                        <ul className="mb-0">
                          <li>Copy <code>Internal_to_SHERIFF03-Car</code> → replace outgoing interface and destination group.</li>
                          <li>Copy <code>SHERIFF03-Car_To_Internal</code> → adjust and enable.</li>
                        </ul>
                      </ListGroup.Item>
                    </ListGroup>
      </div>       
    </div>
  );
}