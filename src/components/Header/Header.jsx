import React from 'react'
import './Header.css'
const Header = ({computerScore,playerScore}) => {
  return (
    <div className='header'>
   
      <div className='text'>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
        </div>
      <div className='score-boxes'>
        <div className='score-box'><span className='score-text'>Player Score </span><span className='score'>{playerScore}</span></div>
        <div className='score-box'><span className='score-text'>Computer Score </span><span className='score'>{computerScore}</span></div>

      
    </div>
    </div>
  )
}

export default Header
