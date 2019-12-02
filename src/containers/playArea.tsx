import React from "react";
import "./styles/playArea.css";
import "./styles/card.css";
import { LOGO_IMAGES, CardType } from "../util/constants";

interface PassedProps {
  cardsNotFound: Array<CardType>;
  checkPlayerGuess: (card: CardType) => void;
}

const PlayArea: React.FC<PassedProps> = props => {
  const { cardsNotFound, checkPlayerGuess } = props;

  const createPlayingMat = () => {
    return LOGO_IMAGES.map(item => {
      const found = cardsNotFound.filter(card => card.id === item.id);
      return (
        <div
          className="playmat-slot"
          key={item.id}
          id={item.id}
          onClick={() => checkPlayerGuess(item)}
        >
          {found.length === 0 ? (
            <img className="card-face" src={item.imgSrc} alt="zoovu logo" />
          ) : null}
        </div>
      );
    });
  };
  return <div className="playmat-container">{createPlayingMat()}</div>;
};

export default PlayArea;
