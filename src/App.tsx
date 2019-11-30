import React from "react";
import "./App.css";

import Score from "./containers/score";
import FindCard from "./containers/findCard";
import CardsToPlay from "./containers/cardsToPlay";
import PlayArea from "./containers/playArea";
import { createRandomCardArray, selectRandomCard } from "./util/helpers";
import { LOGO_IMAGES, CardType } from "./util/constants";

interface OwnState {
  cardsToPlay: Array<CardType>;
  cardsLeftToFind: Array<CardType>;
  currentCardToFind: CardType | null;
  startGame: boolean;
}

class App extends React.Component<{}, OwnState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cardsToPlay: createRandomCardArray(), //these are the cards to play
      cardsLeftToFind: [...LOGO_IMAGES], //array of cars for the full logo
      currentCardToFind: null,
      startGame: false
    };
  }

  componentDidMount() {
    const { cardsLeftToFind } = this.state;
    this.setState({
      currentCardToFind: selectRandomCard(cardsLeftToFind)
    });
  }

  render() {
    console.log("currentCard", this.state.currentCardToFind);
    const { cardsToPlay, startGame, currentCardToFind } = this.state;
    return (
      <div className="gameArea">
        <div className="gameArea-sidebar">
          <Score />
          <FindCard startGame={true} currentCard={currentCardToFind} />
        </div>
        <div className="gameArea-playArea">
          <div>
            <PlayArea cardsToPlay={cardsToPlay} />
            <CardsToPlay cardsToPlay={cardsToPlay} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
