import { useState } from "react";
import PlayerForm from "../components/Playerform";
import "../styles/Playerform.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TeamForm = () => {
  const [players, setPlayers] = useState(
    Array(10).fill({
      name: "",
      age: "",
      jersey: "",
      photo: null,
      birthCert: null,
      whatsapp: "",
    })
  );

  const [openStates, setOpenStates] = useState(Array(10).fill(false));
  const [success, setSuccess] = useState(false);
  const [teamName, setTeamName] = useState("");

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
      [name]: files ? files[0] : value,
    };
    setPlayers(updated);
  };

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = players.every(
      (player) =>
        player.name.trim() &&
        player.age &&
        player.jersey &&
        player.photo &&
        player.birthCert
    );

    if (!teamName.trim()) {
      alert("⚠️ Please enter your Team Name.");
      return;
    }

    if (!isFormValid) {
      alert("⚠️ Please complete all fields and upload required files for each player.");
      return;
    }

    setSuccess(true);

    const formData = new FormData();
    formData.append("teamName", teamName);
    formData.append("players", JSON.stringify(players));

    players.forEach((player) => {
      if (player.photo) formData.append("photo", player.photo);
      if (player.birthCert) formData.append("birthCert", player.birthCert);
    });

    try {
      const response = await fetch("http://localhost:5000/register-team", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error submitting team:", error);
    }
  };

  return (
    <form className="team-form" onSubmit={handleSubmit}>
      <Navbar />
      <h2 className="main-title">🏆 Team Registration Form</h2>

      <label className="team-name-label">
        Team Name:
        <input
          type="text"
          name="teamName"
          placeholder="Enter team name"
          value={teamName}
          onChange={handleTeamNameChange}
        />
      </label>

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

      <button type="submit" className="submit-btn">SUBMIT TEAM</button>
      {success && <p className="success-msg">✅ Team submitted successfully!</p>}
      <Footer />
    </form>
  );
};

export default TeamForm;
