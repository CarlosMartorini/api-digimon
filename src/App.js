import { Component } from "react";
import "./App.css";
import Digimons from './components/Digimons';
import { Container, List, FavoritesList } from './styles';

class App extends Component {

  state = {
    digimons: [],
    favorites: [],
    error: ''
  }

  componentDidMount() {
    fetch("https://digimon-api.vercel.app/api/digimon")
    .then((response) => response.json())
    .then((response) => this.setState({digimons: [...response]}))
    .catch(() => this.setState({error: 'Something is wrong!'}));
  }

  handleFavorite = (digimon) => {
    const { favorites } = this.state;
    this.setState({favorites: [...favorites, digimon]});
  }

  handleRemove = (digimonToBeDeleted) => {
    const { favorites } = this.state;
    const newList = favorites.filter ((digimon) => digimon.name !== digimonToBeDeleted.name);
    this.setState({favorites: newList});
  }

  render() {
    const { digimons, favorites } = this.state;
      return (
        <div className="App">
        <header className="App-header">
          <Container>
            <FavoritesList>
              <Digimons digimons={favorites} isFavoritesList={true} handleRemove={this.handleRemove} ></Digimons>
            </FavoritesList>
            <List>
              <Digimons digimons={digimons} func={this.handleFavorite} ></Digimons>
            </List>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
