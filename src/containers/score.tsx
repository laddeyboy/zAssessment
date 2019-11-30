import React, { useState } from "react";
import "./styles/score.css";

const Score: React.FC = () => {
  const [secondsElapsed] = useState<number>(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log("interval", secondsElapsed);
  //     setSecondsElapsed(secondsElapsed + 1);
  //   }, 1000);
  // }, [secondsElapsed]);

  console.log("what is secondsElapsed?", secondsElapsed);
  return (
    <div className="score-container">
      <div>Timer: {("0" + (secondsElapsed % 60)).slice(-2)}</div>
      <div>Score: </div> {/*this will show the time plus penalties*/}
    </div>
  );
};

export default Score;
