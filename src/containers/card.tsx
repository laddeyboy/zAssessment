import React from "react";
import "./styles/card.css";

interface PassedProps {
  showFront: boolean;
  frontImage: string;
  id: string;
  setSelectPlayerCard: (id: string) => void;
}

const Card: React.FC<PassedProps> = props => {
  const { showFront, frontImage, setSelectPlayerCard } = props;

  const handleCardClick = () => {
    setSelectPlayerCard(props.id);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      {!showFront ? (
        <p className="card-back">?</p>
      ) : (
        <img className="card-face" src={frontImage} alt="broked" />
      )}
    </div>
  );
};

export default Card;
