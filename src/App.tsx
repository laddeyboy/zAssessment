import React from "react";
import "./App.css";

import Score from "./containers/score";
import FindCard from "./containers/findCard";
import CardsToPlay from "./containers/cardsToPlay";
import PlayArea from "./containers/playArea";
import {
  createRandomCardArray,
  selectRandomCard,
  removeCardFromAvailable
} from "./util/helpers";
import { LOGO_IMAGES, CardType } from "./util/constants";

interface OwnState {
  cardsToPlay: Array<CardType>;
  cardsLeftToFind: Array<CardType>;
  startTimer: boolean;
  cardToFind: CardType | null;
  cardPlayerIsGuessing: CardType;
  playmatSlot: CardType | null;
  penalties: number;
}

class App extends React.Component<{}, OwnState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cardsToPlay: createRandomCardArray(), //these are the cards to play
      cardsLeftToFind: [...LOGO_IMAGES], //array of cars for the full logo
      cardToFind: null,
      startTimer: false,
      cardPlayerIsGuessing: { imgSrc: "", id: "" }, // this should probably be CardType
      playmatSlot: null,
      penalties: 0
    };
  }

  componentDidMount() {
    const { cardsLeftToFind } = this.state;
    this.setState({
      cardToFind: selectRandomCard(cardsLeftToFind)
    });
  }
  componentDidUpdate(PrevProps: {}, PrevState: OwnState) {
    if (
      PrevState.cardsLeftToFind &&
      PrevState.cardsLeftToFind.length !== this.state.cardsLeftToFind.length
    ) {
      const { cardsLeftToFind } = this.state;
      this.setState({
        cardToFind: selectRandomCard(cardsLeftToFind)
      });
    }
    if (PrevState.startTimer !== this.state.startTimer) {
    }
  }

  handleSelectPlayerCard = (card: CardType) => {
    this.setState({ cardPlayerIsGuessing: card, startTimer: true });
  };

  handleCheckPlayerGuess = (card: CardType) => {
    const {
      cardToFind,
      cardPlayerIsGuessing,
      cardsToPlay,
      cardsLeftToFind,
      penalties
    } = this.state;
    if (cardToFind && cardPlayerIsGuessing.id !== "") {
      // ensure player has made a selection
      if (
        cardToFind.id === cardPlayerIsGuessing.id &&
        cardPlayerIsGuessing.id === card.id
      ) {
        const updatedPlayingCards = removeCardFromAvailable(cardsToPlay, card);
        const updateRemainingCards = removeCardFromAvailable(
          cardsLeftToFind,
          card
        );
        this.setState({
          cardsToPlay: updatedPlayingCards,
          cardsLeftToFind: updateRemainingCards
        });
        if (cardsLeftToFind.length === 1) {
          //here there are no more cards to find.  End the game.
          this.setState({ startTimer: false });
        }
      } else {
        let penalty = penalties;
        this.setState({ penalties: penalty + 1 });
        // display a message to try again or penalty
        console.log("TRY AGAIN");
      }
    }
  };

  handleGetTime = () => {
    console.log("do something");
  };

  render() {
    const {
      cardsToPlay,
      startTimer,
      cardToFind,
      cardsLeftToFind,
      cardPlayerIsGuessing,
      penalties
    } = this.state;
    return (
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <Score
          startTimer={startTimer}
          getTime={this.handleGetTime}
          penalties={penalties}
        />
        <div className="gameArea">
          <div className="gameArea-sidebar">
            {cardsLeftToFind.length > 0 ? (
              <FindCard startGame={true} currentCard={cardToFind} />
            ) : null}
          </div>
          <div className="gameArea-playArea">
            <PlayArea
              cardsNotFound={cardsLeftToFind}
              checkPlayerGuess={this.handleCheckPlayerGuess}
            />
            <CardsToPlay
              currentSelectedCard={cardPlayerIsGuessing}
              cardsToPlay={cardsToPlay}
              setSelectPlayerCard={this.handleSelectPlayerCard}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
