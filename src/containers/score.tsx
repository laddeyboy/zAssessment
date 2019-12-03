import React, { useState, useEffect } from "react";
import "./styles/score.css";
import zoovuLogo from "../images/zoovu-logo.png";

interface PassedProps {
  startTimer: boolean;
  penalties: number;
  setFinalScore: (finalScore: number) => void;
}

const Score: React.FC<PassedProps> = props => {
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [score, setCurrentScore] = useState<number>(0);

  useEffect(() => {
    let interval: any = null;
    if (props.startTimer) {
      interval = setInterval(() => {
        setSecondsElapsed(secondsElapsed => secondsElapsed + 1);
      }, 1000);
    } else {
      // game over send back the score
      clearInterval(interval);
      let finalScore = props.setFinalScore(
        secondsElapsed + props.penalties * 10
      );
    }
    return () => clearInterval(interval);
  }, [secondsElapsed, props.startTimer]);

  return (
    <div className="score-container">
      <img
        style={{ marginLeft: "2%" }}
        src={zoovuLogo}
        alt="Zoovu Company Logo"
        width="100px"
      />
      <div>
        Timer: {Math.floor(secondsElapsed / 60)}:
        {("0" + (secondsElapsed % 60)).slice(-2)}{" "}
      </div>
      <div style={{ marginRight: "2%" }}>
        Score: {secondsElapsed + props.penalties * 10}
      </div>
    </div>
  );
};

export default Score;
