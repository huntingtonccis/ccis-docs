/*import { Container, Row, Card, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CradlePoint = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
    return (
        <Container className="mt-5">
            <h1 className="mb-4">CradlePoint VPN-MDT config</h1>
            <Row>
                <Col md={4}>
                 <Card>
                  <Card.Body>
                   
                    <h2>CradlePoint VPN Instructions</h2>
                    <p>Notes:</p>
                    <ul>
                    <li>Metronet IP: 69.174.162.228</li>
                    <li>SecretPSK: N$odT63$8xS*DhcSP</li>
                    </ul>

                    <h2>CRADLEPOINT CONFIG</h2>
                    <ol>
                        <li><a href="https://www.cradlepointecm.com/">https://cradlepointecm.com/</a></li>
                        <li>Find device to configure, clear configuration.</li>
                        <li>Move device to proper group</li>
                        <li>Change the name of the device</li>
                        <li>Navigate to:
                            <ul>
                            <li>Configuration - Edit - Networking - Local Networks - Local IP Networks</li>
                            <li>Change Local Primary to 172.21.carnumber.1</li>
                            </ul>
                        </li>
                        <li>Using HPD Car 09 as example</li>
                            <ul>
                                <li>172.21.9.1</li>
                            </ul>
                        <li>Using Sheriff Car 03 as example</li>    
                            <ul>
                                <li>172.21.103.1</li>
                            </ul>
                        <li>Navigate to:
                            <ul>
                            <li>Configuration - Edit - Networking - Tunnels - IPSec - HSD</li>
                            <li>Local Identity</li>
                            <li>Static IP of cradlepoint device ( from Verizon ).</li>
                            <li>Change Local Networks to</li>
                            <li>172.21.carnumber.1</li>
                            <li>Commit changes</li>
                            <li>Reboot cradlepoint device</li>
                            </ul>
                        </li>
                    </ol>
                    <h2>FORTIGATE CONFIG</h2>
                    <ol>
                        <li>Step 1</li>
                        <li>Log into Fortigate and open the CLI</li>
                        <li>Using “SHERIFF03” as an existing config and adding “HPD09” as a new tunnel.</li>
                        <li>Show vpn ipsec phase1-interface ‘SHERIFF03’</li>
                        <li>config vpn ipsec phase1-interface</li>
                        <li>edit 'HPD09'</li>
                        <li>At this point, you will copy each of the settings listed for “SHERIFF03”, with the specific data needed for the “HPD09” tunnel.</li>
                        <li>The ‘remote-gw’ is the static IP of the cradlepoint.</li>
                        <li>Repeat step 1, using phase2-interface this time.</li>
                        <li>Close CLI. Navigate to:</li>
                        <li>Policy & Objects - Addresses</li>
                        <li>Right click and ‘clone’.</li>
                        <li>IP Range/Subnet – HPD-CAR-09-RemoteInternal 172.21.9.1/24</li>
                        <li>Need to ensure to update to correct name and IP.</li>
                        <li>Address Group – HPD-CAR-09-GROUPRemoteInternal</li>
                        <li>Add the AddressGroup just created to the HPD-CARS-RemoteInternalPGrp</li>
                        <li>Navigate to: Network - Static Routes</li>
                        <li>Right click and 'clone'.</li>
                        <li>Create Static Route</li>
                        <li>HPD-CAR-09-GROUPRemoteInternal – update VPN interface to correct one.</li>
                        <li>HPD-CAR-09-GROUPRemoteInternal – Blackhole.</li>
                        <li>Navigate to: Policy & Objects - Firewall Policy</li>
                        <li>Right click and Copy/Paste</li>
                        <li>Copy Internal_to_SHERIFF03-Car</li>
                        <li>Replace outgoing interface with HPD-CAR-09-RemoteInternal</li>
                        <li>Replace destination with Address Group</li>
                        <li>Rename and Enable the policy</li>
                        <li>Copy SHERIFF03-Car-To_Internal</li>
                        <li>Edit and replace all of the necessary information</li>
                        <li>Rename and Enable the policy</li>
                    </ol>                    
                   
                   <Button variant='secondary' onClick={handleButtonClick}>Back to Install Directory</Button>
                  </Card.Body>
                 </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CradlePoint
*/

import { Container, Row, Col, Card, Button, Alert, Badge, ListGroup, Accordion, Breadcrumb } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// tiny copy button for code/text snippets
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
  const SECRET_PSK = 'N$odT63$8xS*DhcSP';

  return (
    
    <Container className="mt-5">
    <div className="position-sticky top=0 py-2" style={{zIndex: 1020 }}>
        <div className="d-flex justify-content-end">
            <h1 className="display-6 mb-4">CradlePoint VPN-MDT Config</h1>
            <Button variant="outline-primary" size="sm" onClick={ () => handleButtonClick}>Dashboard</Button> 
        </div>
        </div>
        
      

      <Row className="g-4">
        {/* Main column */}
        <Col lg={8}>
          <Card>
           
            <Card.Body>
                <hr className="my-2" />
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <div>
                    Metronet IP:&nbsp;
                    <code>{METRONET_IP}</code>
                  </div>
                  <CopyBtn text={METRONET_IP} />
                </div>
                <div className="d-flex align-items-center gap-2 flex-wrap mt-2">
                  <div>
                    Secret PSK:&nbsp;
                    <code>{SECRET_PSK}</code>
                  </div>
                  <CopyBtn text={SECRET_PSK} />
                </div>
              

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>CradlePoint Config</Accordion.Header>
                  <Accordion.Body>
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
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>FortiGate Config</Accordion.Header>
                  <Accordion.Body>
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

                    <h6 className="mt-3">GUI tasks</h6>
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
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
              <small className="text-muted">Last updated: today</small>
              <Button variant="secondary" onClick={handleButtonClick}>Back to Install Directory</Button>
            </Card.Footer>
          </Card>
        </Col>

        {/* Sidebar */}
        <Col lg={4}>
          <Card>
            <Card.Header>Quick Reference</Card.Header>
            <Card.Body className="pt-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>Cradlepoint ECM</div>
                <a href="https://www.cradlepointecm.com/" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary">
                  Open
                </a>
              </div>
              <div className="mb-2">
                <div className="text-muted small">Local Primary format</div>
                <code>172.21.&lt;carNumber&gt;.1</code>
              </div>
              <div className="mb-2">
                <div className="text-muted small">Examples</div>
                <div><Badge bg="light" text="dark" className="me-2">HPD09</Badge><code>172.21.9.1</code></div>
                <div><Badge bg="light" text="dark" className="me-2">SHERIFF03</Badge><code>172.21.103.1</code></div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}