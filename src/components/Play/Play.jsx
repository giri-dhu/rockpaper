import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Play.css'
import Triangle from '../../images/bg-triangle.svg'
import Paper from '../../images/icon-paper.svg'
import Rock from '../../images/icon-rock.svg'
import Scissors from '../../images/icon-scissors.svg'

const Play = ({ setMyChoice }) => {
  const navigate = useNavigate();

  const handleChoice = (e) => {
    const choice = e.currentTarget.dataset.id;  // 👈 use currentTarget for reliability
    setMyChoice(choice);
    navigate('/game'); // 👈 navigate after setting choice
  }

  return (
    <div className="play">
      <img src={Triangle} className="triangle" alt="" />
      <div className="items">
        <div
          className="icon iconR"
          data-id="rock"
          onClick={handleChoice}
        >
          <img src={Rock} alt="rock" />
        </div>
        <div
          className="icon iconS"
          data-id="scissors"
          onClick={handleChoice}
        >
          <img src={Scissors} alt="scissors" />
        </div>
        <div
          className="icon iconP"
          data-id="paper"
          onClick={handleChoice}
        >
          <img src={Paper} alt="paper" />
        </div>
      </div>
    </div>
  )
}

export default Play
