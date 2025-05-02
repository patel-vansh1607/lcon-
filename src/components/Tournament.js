import "../styles/Tournament.css";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

const TournamentPage = () => {
    const [agreed, setAgreed] = useState(false);
  
    const handleContinue = () => {
      if (agreed) {
        window.location.href="/register"
      } else {
        alert("Please agree to the terms to continue.");
      }
    };

useEffect(() => {

}, [agreed])
  return (
    <>
      <div className="main-div">
        <h1 className="club-name">Leo Club of Nakuru</h1>
        <h2 className="presents">PRESENTS</h2>
        <h1 className="tournament-title">FOOTBALL TOURNAMENT</h1>

        <div className="rules-section">
          <h2>📜 Rules & Regulations</h2>
          <ul>
            <li>Each team must consist of 10 players.</li>
            <li>Players must be under 25 years of age.</li>
            <li>Each player must carry a valid ID.</li>
            <li>No aggressive behavior or foul play will be tolerated.</li>
            <li>Referee decisions are final and must be respected.</li>
            <li>Matches will be 30 minutes each (15 mins per half).</li>
            <li>Late arrivals may lead to disqualification.</li>
            <li>All team members must wear appropriate kits.</li>
          </ul>
        </div>
        <div className="continue-section">
        <label className="checkbox-label">
            <input
            type="checkbox"
            onChange={() => setAgreed(!agreed)}
            />
            I have read and agree to the rules and regulations.
        </label>
        <p className="continue-text">
            To continue with the registration, <button  onClick={handleContinue}>click here</button>.
        </p>
        </div>
      </div>
    </>
  );
};

export default TournamentPage;
