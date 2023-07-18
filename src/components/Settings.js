import React from 'react';
import '../styles/Settings.css';

const Settings = ({ workTime, breakTime, onWorkTimeChange, onBreakTimeChange }) => {
  return (
    <div className="settings">
      <div className="setting">
        <label htmlFor="workTime">Work Time (minutes):</label>
        <input
          type="number"
          id="workTime"
          value={workTime}
          onChange={(e) => onWorkTimeChange(parseInt(e.target.value))}
          min={1}
        />
      </div>
      <div className="setting">
        <label htmlFor="breakTime">Break Time (minutes):</label>
        <input
          type="number"
          id="breakTime"
          value={breakTime}
          onChange={(e) => onBreakTimeChange(parseInt(e.target.value))}
          min={1}
        />
      </div>
    </div>
  );
};

export default Settings;
