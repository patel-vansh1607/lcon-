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
       {/*  <Navbar/> */}
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
            <li>Teams can have a maximum and munimum of 10 players <span className="spot-red">no more no less</span>.</li>
          </ul>
          <h2>3. Fouls & Misconduct</h2>
          <ul>
          <li>
            <strong>Direct Free Kick:</strong> Awarded for serious fouls such as:
            <ul>
              <li>Kicking or attempting to kick an opponent</li>
              <li>Tripping or jumping at an opponent</li>
              <li>Charging or striking</li>
              <li>Pushing, tackling from behind</li>
              <li>Deliberate handball (outside goalkeeper's box)</li>
            </ul>
          </li>
          <li>
            <strong>Indirect Free Kick:</strong> For less serious offenses like:
            <ul>
              <li>Dangerous play (e.g., high foot)</li>
              <li>Impediment without contact</li>
              <li>Goalkeeper holding the ball for over 6 seconds</li>
              <li>Goalkeeper touching the ball after a teammate’s deliberate back-pass</li>
            </ul>
          </li>
          <li>
            <strong>Yellow Card (Caution):</strong> Given for:
            <ul>
              <li>Unsporting behavior</li>
              <li>Dissent by word or action</li>
              <li>Persistent infringement of rules</li>
              <li>Delaying the restart of play</li>
              <li>Not keeping distance at free kicks/corners</li>
              <li>Entering/leaving field without permission</li>
            </ul>
          </li>
          <li>
            <strong>Red Card (Send-off):</strong> Issued for:
            <ul>
              <li>Serious foul play</li>
              <li>Violent conduct</li>
              <li>Spitting at any person</li>
              <li>Denying a goal-scoring opportunity by hand or foul</li>
              <li>Using offensive or abusive language</li>
              <li>Receiving a second yellow card</li>
            </ul>
            <p><em>Note: Red-carded players cannot be replaced.</em></p>
          </li>
        </ul>
        <h2>4. Offside Rules</h2>
          <ul>
          <li>
            <strong>A player is offside if : </strong> 
            <ul>
              <li>They're nearer to the opponent's goal than both the ball and the second-last defender when the ball is played to them</li>
              <li>Offside = <strong>Indirect Free Kick</strong> to opponent.</li>
            </ul>
          </li>
        </ul>
        <h2>6. Restarts & Ball Out of Play</h2>
          <ul>
            <li><strong>Kick-off:</strong> After goals or at the start of each half.</li>
            <li><strong>Throw-in:</strong> Ball crosses touchline → last touched by opponent.</li>
            <li><strong>Goal Kick:</strong> Opponent last touches ball over goal line, no goal scored.</li>
            <li><strong>Corner Kick:</strong> Defender last touches ball over own goal line.</li>
            <li><strong>Free Kick Types:</strong></li>     
              <ul>
                <li><strong>Direct:</strong>  Can score directly.</li>
                <li><strong>In-Direct:</strong> Another player must touch before scoring.</li>
              </ul> 
            <li><strong>Penalty Kick:</strong> Awarded for fouls in the penalty area.</li>
          </ul>
        </div>
        <div className="continue-section">
        {/* <label className="checkbox-label">
            <input
            type="checkbox"
            onChange={() => setAgreed(!agreed)}
            />
            I have read and agree to the rules and regulations.
        </label>
        <p className="continue-text">
            To continue with the registration, <button  onClick={handleContinue}>click here</button>.
        </p> */}
        </div>
      </div>
    </>
  );
};

export default TournamentPage;
