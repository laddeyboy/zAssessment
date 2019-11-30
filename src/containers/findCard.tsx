import React from "react";
import Card from "./card";
import { CardType } from "../util/constants";

interface PassedProps {
  startGame: boolean;
  currentCard: CardType | null;
}

const FindCard: React.FC<PassedProps> = props => {
  const { startGame, currentCard } = props;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3 style={{ textAlign: "center" }}>Find This Card</h3>{" "}
      {startGame ? (
        <Card
          showFront={true}
          frontImage={currentCard ? currentCard.imgSrc : ""}
          id={currentCard ? currentCard.id : ""}
        />
      ) : (
        <button type="button">Start Game</button>
      )}
    </div>
  );
};

export default FindCard;
