import "../styles/Tournament.css";
import { useEffect, useState } from "react";
import leologo from "../images/logo-02.png"
import lionslogo from "../images/logo-03.png"
import Navbar from "./Navbar";
import Footer from "./Footer";

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
       <Navbar />
      <div className="main-div">
        <div className="main">
          <img className="img" src={leologo} alt="Leo Logo" />
          <h1 className="club-name">LEO CLUB OF NAKURU <br></br> <span>PRESENTS</span></h1>
          <img className="img" src={lionslogo} alt="Lions Logo" />
        </div>
        <h1 className="tournament-title">SOCCER CUP <br></br> <span className="span2">WHERE TALENT MEETS OPPORTUNITY</span></h1>
      
        <div className="rules-section">
          <div style={{ color: 'red', fontWeight: 'bold', fontSize: '18px', marginTop: '10px' }}>
    ⚠️ TEAMS TO BE REGISTERED BY <u>25TH JULY 2025</u> EVENING <u>WEDNESDAY</u>
  </div>
          <h2>📜 Rules & Regulations</h2><br></br>
          <h2>1. Gameplay</h2>
          <ul>
            <li>Group stage matches will be played for 20 minutes (10 each half).</li>
            <li>16 teams will participate, divided into 4 groups of 4 teams each.</li>
            <li>The top 2 teams from each group will qualify for the next stage.</li>
            <li>All game schedules, stats, and scores will be updated on this app: <a href="https://play.google.com/store/apps/details?id=il.talent.winner&hl=en" target="_blank" rel="noopener noreferrer">Winner - Tournament Maker App   </a>.<br></br></li>
            <li>The app will determine the top 2 of each group <strong>automatically</strong></li>
            <li>All Games will be played in <a href="https://www.google.com/maps/place/Nakuru+Athletics+Club/@-0.2911066,36.0655563,17z/data=!3m1!4b1!4m6!3m5!1s0x18298dc186ede701:0x42d8dd651d754c1a!8m2!3d-0.2911066!4d36.0655563!16s%2Fg%2F1ypmn2xrf?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Nakuru Athletics Club</a>.<br></br></li>
            <li>All players will be provided with a Gate Pass to enter the ground which must be verified by <strong>security</strong> before entering</li>
          </ul>
          <h2>2. Team Size</h2>
          <ul>
            <li>Games will be played with 7 fielders during the game, with a max of 3 substitutes.</li>
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
              <li>Goalkeeper directly handling (holding) the ball after a teammates deliberate backpass</li>
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
          <br></br>NO OFFSIDE <br></br>
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
            <li>Group Stage Matches</li>
            <ul>
              <li>Points: 3 for a win, 1 for a draw, 0 for a loss.</li>
              <li>For draw no extra time, team will each get one point.</li>
            </ul>
            <li>Quater Finals & Semi Finals</li>
              <ul>
                <li>8 minutes extra time.</li>
                <li>If game is a tie even after extra time, a penatly shoot-out will take place.</li>
              </ul>
              <li>Finals</li>
              <ul>
                <li>15 minutes extra time.</li>
                <li>If game is a tie even after extra time, a penatly shoot-out will take place.</li>
              </ul>
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
        <h2>11. Sportsmanship</h2>
        <li>Zero Tolerance for Racism</li>
        <ul>
          <li>Any racial comments, gestures, or insults will result in an immediate red card.</li>
          <li>Further disciplinary actions may include suspension from the tournament.</li>
        </ul>

        <li>No Fighting</li>
        <ul>
          <li>Any player involved in a fight will receive a red card immediately.</li>
          <li>Both players may be suspended from future matches depending on severity.</li>
        </ul>

        <li>Respect for Officials</li>
        <ul>
          <li>Abusive language or behavior toward referees or staff is not allowed.</li>
          <li>Can result in yellow or red card based on the situation.</li>
        </ul>

        <li>Respect Opponents</li>
        <ul>
          <li>No mocking, taunting, or provoking opponents.</li>
          <li>First offense: yellow card. Repeated: red card.</li>
        </ul>

        <li>Fair Play</li>
        <ul>
          <li>No diving, time-wasting, or dishonest tactics.</li>
          <li>Play the game with integrity.</li>
        </ul>

        <li>Team & Fan Conduct</li>
        <ul>
          <li>Captains are responsible for players and fans.</li>
          <li>Fan misconduct may result in team warnings or match suspension.</li>
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
              Contact the Offical
            </a>.
          </li>
        </ul>

        </div>

      </div>
      <Footer />
    </>
  );
};

export default TournamentPage;
