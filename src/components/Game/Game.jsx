import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Rock from '../../images/icon-rock.svg'
import Paper from '../../images/icon-paper.svg'
import Scissors from '../../images/icon-scissors.svg'
import './Game.css'
import Header from '../Header/Header'

const images = {
  rock: Rock,
  paper: Paper,
  scissors: Scissors
}

const Game = ({ 
  playerScore, 
  computerScore, 
  myChoice, 
  setPlayerScore, 
  setComputerScore, 
  setResult   // 👈 receive setResult from App
}) => {
  const [house, setHouse] = useState("")
  const [playerWin, setPlayerWin] = useState("")

  const newHousePick = () => {
    const choices = ['rock', 'paper', 'scissors']
    setHouse(choices[Math.floor(Math.random() * choices.length)])
  }

  const result = () => {
    if (myChoice === house) {
      setPlayerWin("Draw")
      setResult("Draw")        // 👈 update global result
    } else if (
      (myChoice === "rock" && house === "scissors") ||
      (myChoice === "scissors" && house === "paper") ||
      (myChoice === "paper" && house === "rock")
    ) {
      setPlayerWin("Win")
      setPlayerScore(prev => prev + 1)
      setResult("Win")         // 👈 update global result
    } else {
      setPlayerWin("Lose")
      setComputerScore(prev => prev + 1)
      setResult("Lose")        // 👈 update global result
    }
  }

  useEffect(() => {
    newHousePick()
  }, [])

  useEffect(() => {
    if (house) result()
  }, [house])

  return (
    <div className="game">
      <div className="game_you">
        <span className="text">You Picked</span>
        <div className={`picked ${myChoice} ${playerWin === "Win" ? "winner" : ""}`}>
          <img src={images[myChoice]} alt={myChoice} />
        </div>
      </div>

      <div className="game_result">
        {playerWin === "Win" && <h2>You Won 🎉</h2>}
        {playerWin === "Lose" && <h2>You Lose 😢</h2>}
        {playerWin === "Draw" && <h2>It’s a Draw 🤝</h2>}
        <Link to="/" className="play-again">Play Again</Link>
      </div>

      <div className="game_house">
        <span className="text">Computer Picked</span>
        <div className={`picked ${house} ${playerWin === "Lose" ? "winner" : ""}`}>
          <img src={images[house]} alt={house} />
        </div>
      </div>
    </div>
  )
}

export default Game
