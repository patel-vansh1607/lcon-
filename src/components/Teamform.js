import { useState } from "react";
import PlayerForm from "../components/Playerform";
import "../styles/Playerform.css"; // Ensure this is imported here too

const TeamForm = () => {
  const [players, setPlayers] = useState(
    Array(10).fill({ name: "", age: "", jersey: "", photo: null, birthCert: null })
  );
  
  const [openStates, setOpenStates] = useState(Array(10).fill(false));
  const [success, setSuccess] = useState(false);

  const toggleOpen = (index) => {
    const updated = [...openStates];
    updated[index] = !updated[index];
    setOpenStates(updated);
  };

  const handleChange = (index, event) => {
    const { name, value, files } = event.target;
    const updated = [...players];
    updated[index] = {
      ...updated[index],
      [name]: name === "photo" ? files[0] : value,
    };
    setPlayers(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const isFormValid = players.every(
      (player) =>
        player.name.trim() &&
        player.age &&
        player.jersey &&
        player.photo &&
        player.birthCert
    );
  
    if (!isFormValid) {
      alert("⚠️ Please fill all fields and upload required files for every player before submitting.");
      return;
    }
  
    setSuccess(true);
    console.log("Team Registered:", players);
  };
  
  

  return (
    <form className="team-form" onSubmit={handleSubmit}>
      <h2 className="main-title">🏆 Team Registration Form</h2>

      {players.map((player, index) => (
        <PlayerForm
          key={index}
          playerNumber={index + 1}
          playerData={player}
          handleChange={handleChange}
          isOpen={openStates[index]}
          toggleOpen={() => toggleOpen(index)}
        />
      ))}

      <button type="submit" className="submit-btn">Submit Team</button>
      {success && <p className="success-msg">✅ Team submitted successfully!</p>}
    </form>
  );
};

export default TeamForm;
