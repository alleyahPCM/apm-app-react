import React from "react";

//card img
import memberstxt from '../img/members.png';
import hanni from '../img/hanni.png';
import haerin from '../img/haerin.png';
import hyein from '../img/hyein.png';
import danielle from '../img/danielle.png';
import minji from '../img/minji.png';

//card
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

function MembersComponent() {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column card-section row">
    <div className="members-text">
      <img  src={memberstxt} alt="members text" />  
    </div>
  
    <div>
      <Stack direction="vertical" gap={4}>
        <Stack className="card-stack justify-content-center flex-sm-column flex-md-row" direction="horizontal" gap={4}>
          <Card style={{ width: '18rem'}}>
            <Card.Img className="card-img" variant="top" src={hanni} />
            <Card.Body>
              <Card.Title>Hanni</Card.Title>
              <Card.Text>
                Main Vocal, Main Dancer
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img className="card-img" variant="top" src={haerin} />
            <Card.Body>
              <Card.Title>Haerin</Card.Title>
              <Card.Text>
                Vocalist
              </Card.Text>
            </Card.Body>
          </Card>
        </Stack>
        <Stack className="card-stack justify-content-center flex-sm-column flex-md-row" direction="horizontal" gap={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img className="card-img" variant="top" src={hyein} />
            <Card.Body>
              <Card.Title>Hyein</Card.Title>
              <Card.Text>
                Vocalist, maknae
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img className="card-img" variant="top" src={danielle} />
            <Card.Body>
              <Card.Title>Danielle</Card.Title>
              <Card.Text>
                Vocalist
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img className="card-img" variant="top" src={minji} />
            <Card.Body>
              <Card.Title>Minji</Card.Title>
              <Card.Text>
                Vocalist
              </Card.Text>
            </Card.Body>
          </Card>
          </Stack>
        </Stack>
      </div>
    </div >
  );
}

export default MembersComponent;
