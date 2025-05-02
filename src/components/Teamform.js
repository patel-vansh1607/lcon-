import { useState } from "react";
import PlayerForm from "../components/Playerform";

const TeamForm = () => {
  const [players, setPlayers] = useState(
    Array(10).fill({ name: "", age: "", jersey: "", photo: null })
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
    setSuccess(true);
    console.log("Team Registered:", players);
  };

  return (
    <form className="team-form" onSubmit={handleSubmit}>
      {[...Array(10)].map((_, index) => (
        <PlayerForm
          key={index}
          playerNumber={index + 1}
          playerData={players[index]}
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
