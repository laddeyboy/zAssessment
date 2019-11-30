import React from "react";
import Card from "./card";
import { LOGO_IMAGES } from "../util/constants";

const FindCard: React.FC = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3 style={{ textAlign: "center" }}>Find This Card</h3>{" "}
      <Card showFront={true} frontImage={LOGO_IMAGES[1].card} />
    </div>
  );
};

export default FindCard;
