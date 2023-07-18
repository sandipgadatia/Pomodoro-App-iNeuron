import React, { useState } from 'react';
import Timer from './components/Timer';
import Settings from './components/Settings';
import AppHeader from './components/AppHeader';
import './App.css';

const App = () => {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  const handleWorkTimeChange = (newWorkTime) => {
    setWorkTime(newWorkTime);
  };

  const handleBreakTimeChange = (newBreakTime) => {
    setBreakTime(newBreakTime);
  };

  return (
    <div className="app">
      <AppHeader />
      <Timer workTime={workTime} breakTime={breakTime} />
      <Settings
        workTime={workTime}
        breakTime={breakTime}
        onWorkTimeChange={handleWorkTimeChange}
        onBreakTimeChange={handleBreakTimeChange}
      />
    </div>
  );
};

export default App;
