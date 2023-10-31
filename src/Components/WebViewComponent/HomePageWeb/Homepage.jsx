import React from 'react'
import './Homepage.css'
import  Home from '../../../imagesassets/home.png';
import Lock from '../../../imagesassets/lock.png';

const Homepage = () => {


  return (
    <div className='homeweb'>

    <img src={Home} alt="Home Image" />

    <h1>Pocket Notes</h1>
    <p>Send and receive messages without keeping your phone online.<br/>Use Pocket Notes on up to 4 linked Devices and 1 mobile phone.</p>

    <div className="encrypt-text">

      <img src={Lock} alt="Lock Image" />

      <span><b>end-to-end encrypted</b></span>

    </div>
  </div>
  )
}

export default Homepage
