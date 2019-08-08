import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';

function Logo() {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3"> <img style={{ paddtingTop: '5px' }} alt='logo' src={brain}></img> </div>
      </Tilt>
    </div>
  )
}

export default Logo;