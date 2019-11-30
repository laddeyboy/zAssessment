import React from "react";
import "./styles/card.css";

interface PassedProps {
  showFront: boolean;
  frontImage: string;
  id: string;
  // onClick?: () => void;
}

const Card: React.FC<PassedProps> = props => {
  const { showFront, frontImage } = props;
  return (
    <div className="card">
      {!showFront ? (
        <p className="card-back">?</p>
      ) : (
        <img className="card-face" src={frontImage} alt="broked" />
      )}
    </div>
  );
};

export default Card;
