import React from "react";
import toptxt from '../img/top.png';
import bunny from '../img/bunny.gif'


import Container from "react-bootstrap/Container";
import Stack from 'react-bootstrap/Stack';

function MusicComponent() {
  return (
    <div className="music-section">
        <div className="top-text">
          <img src={toptxt} alt="My Top 10"/>
          <img className="bunny-gif" src={bunny} alt="bunny"/>
        </div>
      <Container>
        <Stack direction="vertical" gap={5}>
          <div>
            <h2>1. Ditto</h2>
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/pSUydWEqKwE?si=mca8j7h8XMkR0XSJ" title="Ditto" allowFullScreen></iframe>
            </div>
          </div>
          <div>
            <h2>2. New Jeans</h2>
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/kcelgrGY1h8?si=O1h64aevzyM-2YqH" title="New Jeans" allowFullScreen></iframe>
            </div>
          </div>
          <div>
            <h2>3. Cool With You</h2>
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/kKsivrgoyDw?si=8PsjKpnggayRBJ-g" title="Cool With You" allowFullScreen></iframe>
            </div>
          </div>
          <div>
            <h2>4. OMG</h2>
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/sVTy_wmn5SU?si=cjSe9XVqY9tEfSeh" title="OMG" allowFullScreen></iframe>
            </div>
          </div>
          <div>
            <h2>5. Get Up - criminally short 😔</h2>
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/SXM1q0CTfew?si=64n89fhEUcV3_PD6" title="Get Up" allowFullScreen></iframe>
            </div>
          </div>
        </Stack>
      </Container>
    </div>
  );
}

export default MusicComponent;






