import React from "react";
import { motion } from "framer-motion";
import "../styles/Playerform.css";

const PlayerForm = ({ playerNumber, playerData, handleChange, isOpen, toggleOpen }) => {
  const isCompleted =
    playerData.name && playerData.age && playerData.jersey && playerData.photo;

  return (
    <div className="player-form">
      <div className="player-header">
        <button type="button" onClick={toggleOpen} className="toggle-btn">
          {isOpen ? "➖" : "➕"} Player {playerNumber}
        </button>
        {isCompleted && <span className="completed-badge">✅ Completed</span>}
      </div>

      {isOpen && (
        <motion.div
          className="form-fields"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={playerData.name}
            onChange={(e) => handleChange(playerNumber - 1, e)}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={playerData.age}
            onChange={(e) => handleChange(playerNumber - 1, e)}
          />
          <input
            type="text"
            name="jersey"
            placeholder="Jersey Number"
            value={playerData.jersey}
            onChange={(e) => handleChange(playerNumber - 1, e)}
          />
          <label className="photo-label">📸 Add your profile photo here</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={(e) => handleChange(playerNumber - 1, e)}
          />
        </motion.div>
      )}
    </div>
  );
};

export default PlayerForm;
