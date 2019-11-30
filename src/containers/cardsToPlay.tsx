import React from "react";
import Card from "./card";
import "./styles/cardsToPlay.css";
import { CardType } from "../util/constants";

interface PassedProps {
  cardsToPlay: Array<CardType>;
}

const CardsToPlay: React.FC<PassedProps> = props => {
  const setPlayersGuessingCard = (id: string) => {
    console.log("what am I clicking?", id);
  };

  const createPlayingCards = () => {
    const { cardsToPlay } = props;
    return cardsToPlay.map((card, index) => {
      return (
        <Card
          showFront={false}
          frontImage={card.imgSrc}
          key={index}
          id={card.id}
          // onClick={() => setPlayersGuessingCard(card.id)}
        />
      );
    });
  };
  return <div className="playingArea-container">{createPlayingCards()}</div>;
};

export default CardsToPlay;
