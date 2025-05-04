import React from "react";
import { motion } from "framer-motion";
import "../styles/Playerform.css";

const PlayerForm = ({ playerNumber, playerData, handleChange, isOpen, toggleOpen }) => {
  const isCompleted =
    playerData.name && playerData.age && playerData.jersey && playerData.photo && playerData.birthCert;

  return (
    <div className="player-form">
      <div className="player-header">
        <button type="button" onClick={toggleOpen} className="toggle-btn">
          {isOpen ? "➖" : "➕"} {playerData.name || `Player ${playerNumber}`}
        </button>
        <div className="status-group">
          {playerData.photo && (
            <img
              src={URL.createObjectURL(playerData.photo)}
              alt="Avatar"
              className="avatar"
            />
          )}
          {isCompleted && <span className="completed-badge">✅ Completed</span>}
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="form-fields"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={playerData.name}
              onChange={(e) => handleChange(playerNumber - 1, e)}
            />
          </label>

          <label>
            Age:
            <input
              type="number"
              name="age"
              placeholder="Enter age"
              value={playerData.age}
              onChange={(e) => handleChange(playerNumber - 1, e)}
            />
          </label>

          <label>
            Jersey Number:
            <input
              type="text"
              name="jersey"
              placeholder="Enter jersey number"
              value={playerData.jersey}
              onChange={(e) => handleChange(playerNumber - 1, e)}
            />
          </label>

          <label>
            📸 Profile Photo:
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={(e) => handleChange(playerNumber - 1, e)}
            />
          </label>

          <label>
            📄 Birth Certificate:
            <input
              type="file"
              name="birthCert"
              accept=".pdf,image/*"
              onChange={(e) => handleChange(playerNumber - 1, e)}
            />
          </label>
        </motion.div>
      )}
    </div>
  );
};

export default PlayerForm;
