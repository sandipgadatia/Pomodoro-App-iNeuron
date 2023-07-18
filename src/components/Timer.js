import React, { useState, useEffect } from 'react';
import '../styles/Timer.css';

const Timer = ({ workTime, breakTime }) => {
  const [time, setTime] = useState(workTime * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      setIsActive(false);
      setIsBreak(!isBreak);
      setTime((isBreak ? workTime : breakTime) * 60);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, time, isBreak, workTime, breakTime]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTime(workTime * 60);
  };

  return (
    <div className={`timer ${isBreak ? 'break' : ''}`}>
      <div className="time">{formatTime(time)}</div>
      <div className="buttons">
        <button onClick={toggleTimer}>{isActive ? 'Stop' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
