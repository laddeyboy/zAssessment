import React from "react";
import Card from "./card";
import "./styles/cardsToPlay.css";

interface PassedProps {
  cardsToPlay: Array<{ card: string }>;
}

const CardsToPlay: React.FC<PassedProps> = props => {
  const createPlayingCards = () => {
    const { cardsToPlay } = props;
    return cardsToPlay.map((cardObj, index) => {
      return <Card showFront={false} frontImage={cardObj.card} key={index} />;
    });
  };
  return <div className="playingArea-container">{createPlayingCards()}</div>;
};

export default CardsToPlay;
