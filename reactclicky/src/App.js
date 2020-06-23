import React, {Component} from "react";
import NavBar from "./components/NavBar";
import Grid from "./components/Grid";
import Card from "./components/Card";
import Score from "./components/Score";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";
import Alert from "./components/Alert";
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
      <div className ="App">
        <NavBar/>
          <Grid container direction = 'column'>
            <Grid>
              <Card>
                {this.state.alertMessgae === "Keep Going" ? (
                  <Alert message = {this.state.alertMessage} />
                ) : (
                  <Alert message = {this.state.alertMessage} />
                )}
              </Card>
            </Grid>
          <Grid>
            <Grid>
              <Card>
                <Score type = 'Score' score = {this.state.pickedCharacters.length} />
              </Card>
            </Grid>
          <Grid>
            <Card>
              <Score type = 'Top Score' score = {this.state.topScore} />
            </Card>
          </Grid>
          </Grid>
          </Grid>
          <Grid>
            <Grid container spacing = {24} justify = 'center' style = {{maxWidth: 945, margin: '0 auto'}}>
              {this.state.characters.map(character => (
                <Grid>
                  <CharacterCard 
                  id = {character.id}
                  name = {character.name}
                  image = {character.image}
                  key = {character.id}
                  handlePicked = {this.handlePicked}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
      </div>
    )
  }
}

export default App;
