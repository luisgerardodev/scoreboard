import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [previousTime, setPreviousTime] = useState(0);

  useEffect(() => {
    const tick = () => {
      if (isRunning) {
        const now = Date.now();
        setPreviousTime(now);
        setElapsedTime((prevState) => prevState + (now - previousTime));
      }
    };

    console.log("The stopwatch mounted!");
    
    const intervalID = setInterval(() => tick(), 100);
    console.log(elapsedTime);

    return () => clearInterval(intervalID);
  });

  const handleStopwatch = () => {
    setIsRunning((prevState) => !prevState);
    if (!isRunning) {
      setPreviousTime(Date.now());
    }
  };

  const handleReset = () => setElapsedTime(0);

  const seconds = Math.floor(elapsedTime / 1000);
  return (
    <div className="stopwatch">
      <h2>StopWatch</h2>
      <span className="stopwatch-time">{seconds}</span>
      <button onClick={handleStopwatch}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default React.memo(Stopwatch);
