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
          <h2>1. Gameplay</h2>
          <ul>
            <li>Group stage matches will be played for 15 minutes (full game duration).</li>
            <li>16 teams will participate, divided into 4 groups of 4 teams each.</li>
            <li>The top 2 teams from each group will qualify for the next stage.</li>
            <li>All game schedules, stats, and scores will be updated on this app: <a href="https://play.google.com/store/apps/details?id=il.talent.winner&hl=en" target="_blank" rel="noopener noreferrer">Winner - Tournament Maker App   </a>.<br></br></li>
            <li>The app will determine the top 2 of each group <strong>automatically</strong></li>
            <li>All Games will be played in <a href="https://www.google.com/maps/place/Nakuru+Athletics+Club/@-0.2911066,36.0655563,17z/data=!3m1!4b1!4m6!3m5!1s0x18298dc186ede701:0x42d8dd651d754c1a!8m2!3d-0.2911066!4d36.0655563!16s%2Fg%2F1ypmn2xrf?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Nakuru Athletics Club</a>.<br></br></li>
            <li>All players will be provided with a Gate Pass to enter the ground which must be verified by <strong>security</strong> before entering</li>
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
          <h2>7. Tie-Breaking Rules</h2>
          <ul>
            <li>TBD</li>
          </ul>
          <h2>8. Uniform</h2>
        <ul>
          <li>Team should have a matching T-shirt color code or Team Jersey</li>
          <li>Short</li>
          <li>Socks</li>
        </ul>
        <h2>9. Referee Authority</h2>
        <ul>
          <li>Referee’s decisions are <strong>FINAL</strong>.</li>
          <li>Can stop, suspend, or abandon the game.</li>
          <li>Can issue yellow/red cards <strong>before, during, or after</strong> the game.</li>
        </ul>
        <h2>10. Medical Rules</h2>
        <ul>
          <li>Any injured player must be assessed by the referee and medical personnel before continuing.</li>
          <li>Head injuries will follow a mandatory concussion protocol — players must be cleared by medical staff before returning.</li>
          <li>Bleeding players must leave the pitch and may only return once bleeding has stopped and the referee permits.</li>
          <li>In case of serious injury, play will be stopped immediately and medical help will be called.</li>
        </ul>
        <div className="faded-line"></div>
        <ul>
          <li>All rules are designed to ensure player safety and sportsmanship throughout the tournament.</li>
          <li>General respect toward everyone must be maintained at all times.</li>
          <li>
            If any rules are unclear,&nbsp;
            <a
              href="https://wa.me/254748660944"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#25D366", textDecoration: "underline" }}
            >
              contact the Organizer
            </a>.
          </li>
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
