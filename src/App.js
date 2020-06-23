import React, {Component} from "react";
import NavBar from "./components/NavBar";
import Score from "./components/Score";
import characters from "./characters.json";
// import CharacterCard from "./components/CharacterCard";
// import Alert from "./components/Alert";
import GameBoard from "./components/GameBoard";
import "./App.css";

class App extends Component{

  state = {
    characters: characters, 
    pickedCharacters: [],
    topScore: 0,
    alertMessage: ""
  }

  handlePicked = event => {
    const name = event.target.attributes.getNamedItem("name").value;
    this.shuffleCharacters ()
    this.checkGuess (name, this.updateTopScore)
  }

  shuffleArray = (a) => {
    var j, x, i;
    for (let index = a.length - 1; index > 0; index--) {
      j = Math.floor(Math.random() * (index + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  checkGuess = (name, cb) => {
    const newState = { ...this.state };
    if (newState.pickedCharacters.includes(name)) {
      newState.alertMessage = `You already picked  "${name.toUpperCase()}"!`
      newState.pickedCharacters = []
      this.setState(newState)
    } else {
      newState.pickedCharacters.push(name)
      newState.alertMessage = `Keep Choosing`
      this.setState(newState)
    }
    cb(newState, this.alertWinner)
  }

  alertWinner = (newState) => {
    if (newState.pickedCharacters.length === 12) {
      newState.alertMessage = "Winner!"; 
      newState.pickedCharacters = [];
      this.setState(newState)
    }
  }

shuffleCharacters = () => {this.setState(this.shuffleArray(this.state.characters))}

render () {
  return (
    <div>
      <NavBar>
        <Score type = 'Score' score = {this.state.pickedCharacters.length} />
        <Score type = 'Top Score' score = {this.state.topScore} />
      </NavBar>
      <GameBoard>
      </GameBoard>
    </div>
            
  )
}
}

export default App;
