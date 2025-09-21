import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";


function Footer({ result,setHomeVisible }) {
  const [showRules, setShowRules] = useState(false);
  const navigate = useNavigate();

  return (
    <footer className="footer">
      {/* Rules + Popup */}
      <div className="rules-container">
        <button className="rules-btn" onClick={() => setShowRules(!showRules)}>
          RULES
        </button>

        {showRules && (
          <div className="rules-popup">
            <div className="rules-content">
              <h2>Game Rules</h2>
              <ul>
                <li>Rock beats Scissors</li>
                <li>Scissors beats Paper</li>
                <li>Paper beats Rock</li>
              </ul>
              <button
                className="close-btn"
                onClick={() => setShowRules(false)}
              >
                ✖
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Next Button (only when win) */}
      {result === "Win" && ( <button className="next-btn" onClick={() => navigate("/hurray")}>
          NEXT
        </button>)}
    </footer>
  );
}

export default Footer;
