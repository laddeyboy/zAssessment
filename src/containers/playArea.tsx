import React from "react";
import Card from "./card";
import "./styles/playArea.css";
import { LOGO_IMAGES, CardType } from "../util/constants";

interface PassedProps {
  cardsToPlay: Array<CardType>;
}

const PlayArea: React.FC<PassedProps> = props => {
  const createPlayingMat = () => {
    return LOGO_IMAGES.map((item, index) => {
      return <div className="playmat-slot" key={item.id} id={item.id}></div>;
    });
  };
  return <div className="playmat-container">{createPlayingMat()}</div>;
};

export default PlayArea;
