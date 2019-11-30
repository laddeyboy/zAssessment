import React from "react";
import "./App.css";

import Score from "./containers/score";
import FindCard from "./containers/findCard";
import CardsToPlay from "./containers/cardsToPlay";
import { createRandomCardArray } from "./util/helpers";

interface OwnState {
  cardsToPlay: Array<{ card: string }>;
}

class App extends React.Component<{}, OwnState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cardsToPlay: createRandomCardArray() //cards to pick from and play on the playmat
      // cardsToFind: [], //cards to show player to select from
      // currentCardToFind: {}
    };
  }

  componentDidMount() {
    console.log("state", this.state.cardsToPlay);
    //return an array of random cards to play
  }

  render() {
    const { cardsToPlay } = this.state;
    return (
      <div className="gameArea">
        <div className="gameArea-sidebar">
          <Score />
          <FindCard />
        </div>
        <div className="gameArea-playArea">
          <div>
            <div style={{ height: "50vh" }}>Play Mat</div>
            <CardsToPlay cardsToPlay={cardsToPlay} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
