import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './Footer/Footer'
import Play from './components/Play/Play'
import Game from './components/Game/Game'
import Hurray from './components/Hurray/Hurray'

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  // 👇 state to store who won
  const [result, setResult] = useState(""); // "Win" | "Lose" | "Draw"

  // 👇 detect current path
  const location = useLocation();
  const hideHeader = location.pathname === "/hurray";

  return (
    <>
      <div className='container'>
        {/* Hide header on /hurray */}
        {!hideHeader && <Header playerScore={playerScore} computerScore={computerScore} />}    

        <Routes>
          <Route 
            path='/' 
            element={<Play setMyChoice={setMyChoice} />} 
          />
          <Route 
            path='/game' 
            element={
              <Game
                setComputerScore={setComputerScore}
                setPlayerScore={setPlayerScore}
                myChoice={myChoice}
                playerScore={playerScore}
                computerScore={computerScore}
                setResult={setResult}   // 👈 pass setResult
              />
            } 
          />
          <Route path='/hurray' element={<Hurray />} />
        </Routes>
      </div>

      {/* Footer always visible */}
      <Footer result={result} />
    </>
  )
}

export default App
