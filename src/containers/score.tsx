import React, { useState, useEffect } from "react";
import "./styles/score.css";

interface PassedProps {
  startTimer: boolean;
}

const Score: React.FC<PassedProps> = props => {
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);

  console.log("what is startTimer", props.startTimer);
  useEffect(() => {
    let interval: any = null;
    interval = setInterval(() => {
      setSecondsElapsed(secondsElapsed => secondsElapsed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsElapsed]);

  return (
    <div className="score-container">
      <div>Timer: {secondsElapsed}</div>
      <div>Score: </div> {/*this will show the time plus penalties*/}
    </div>
  );
};

export default Score;
