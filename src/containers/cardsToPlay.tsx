import React from "react";
import Card from "./card";
import "./styles/cardsToPlay.css";
import { CardType } from "../util/constants";

interface PassedProps {
  cardsToPlay: Array<CardType>;
  setSelectPlayerCard: (card: CardType) => void;
}

const CardsToPlay: React.FC<PassedProps> = props => {
  const createPlayingCards = () => {
    const { cardsToPlay } = props;
    return cardsToPlay.map((card, index) => {
      return (
        <Card
          showFront={false}
          frontImage={card.imgSrc}
          key={index}
          id={card.id}
          setSelectPlayerCard={() => props.setSelectPlayerCard(card)}
        />
      );
    });
  };
  return <div className="playingArea-container">{createPlayingCards()}</div>;
};

export default CardsToPlay;
