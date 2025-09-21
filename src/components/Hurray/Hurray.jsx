import React from 'react'
import Prize from '../../images/realistic-golden-trophy-with-congratulations-text.png'
import { Link } from 'react-router-dom'
import './Hurray.css'
const Hurray = () => {
  return (
    <div className='hurray-container'>
      <img className='prize-img' src={Prize} alt="" />
      <h1 className='hurray-h1'>HURRAY!!</h1>
      <h3 className='hurray-h3'>YOU WON THE GAME</h3>
     <Link to='/'><button className='hurray-button'>Play Again</button></Link>

    </div>
  )
}

export default Hurray;