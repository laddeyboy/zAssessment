import React from "react";
import "./styles/card.css";

interface PassedProps {
  showFront: boolean;
  frontImage: string;
  id: string;
  setSelectPlayerCard: (id: string) => void;
  isActive?: boolean;
}

const Card: React.FC<PassedProps> = props => {
  const { showFront, frontImage, setSelectPlayerCard, isActive } = props;

  const isActiveStyle = {
    boxShadow: "inset 0px 0px 3px 3px #45daed",
    border: "none"
  };

  const handleCardClick = () => {
    setSelectPlayerCard(props.id);
  };

  const onDragStart = (evt: any, id: string) => {
    evt.dataTransfer.setData("id", id);
    setSelectPlayerCard(props.id);
  };

  return (
    <div
      style={isActive ? isActiveStyle : undefined}
      className="card"
      onClick={handleCardClick}
      onDragStart={evt => onDragStart(evt, props.id)}
      draggable
    >
      {!showFront ? (
        <p className="card-back">?</p>
      ) : (
        <img className="card-face" src={frontImage} alt="broked" />
      )}
    </div>
  );
};

export default Card;
