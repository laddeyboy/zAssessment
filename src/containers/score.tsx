import React, { useState, useEffect } from "react";
import "./styles/score.css";

interface PassedProps {
  startTimer: boolean;
  getTime: (timeInSecs: number) => void;
  penalties: number;
}

const Score: React.FC<PassedProps> = props => {
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);

  useEffect(() => {
    let interval: any = null;
    if (props.startTimer) {
      interval = setInterval(() => {
        setSecondsElapsed(secondsElapsed => secondsElapsed + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [secondsElapsed, props.startTimer]);

  return (
    <div className="score-container">
      <div>Timer: {("0" + (secondsElapsed % 60)).slice(-2)} secs</div>
      <div>Score: {(secondsElapsed % 60) + props.penalties * 10}</div>
    </div>
  );
};

export default Score;
