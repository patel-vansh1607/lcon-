import "../styles/Tournament.css";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import Navbar from "./Navbar";

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
        <Navbar/>
      <div className="main-div">
        <h1 className="club-name">Leo Club of Nakuru</h1>
        <h2 className="presents">PRESENTS</h2>
        <h1 className="tournament-title">FOOTBALL TOURNAMENT</h1>

        <div className="rules-section">
          <h2>📜 Rules & Regulations</h2><br></br>
          <h2>1. Match Duration</h2>
          <ul>
            <li>Group Stage matches be played for 15 minutes (full game).</li>
          </ul>
          <h2>2. Team Size</h2>
          <ul>
            <li>Games will be payed with 7 fielders during the game, with a max of 3 substitutes.</li>
            <li>Teams can have a maximum and munimum of 10 players <span className="spot-red">no more no less</span></li>
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
