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

  const onDragOver = (evt: any) => {
    evt.preventDefault();
  };
  const onDrop = (evt: any, item: CardType) => {
    const { checkPlayerGuess } = props;
    checkPlayerGuess(item);
  };

  const createPlayingMat = () => {
    return LOGO_IMAGES.map(item => {
      const found = cardsNotFound.filter(card => card.id === item.id);
      return (
        <div
          className="playmat-slot"
          key={item.id}
          id={item.id}
          onClick={() => checkPlayerGuess(item)}
          onDragOver={evt => onDragOver(evt)}
          onDrop={evt => onDrop(evt, item)}
        >
          <img
            style={found.length === 0 ? { opacity: 1 } : { opacity: 0.5 }}
            className="card-face"
            src={item.imgSrc}
            alt="zoovu logo"
          />
        </div>
      );
    });
  };
  return <div className="playmat-container">{createPlayingMat()}</div>;
};

export default PlayArea;
