import './App.css';
import txt from './pokenames.txt';

import React from 'react';

import Searchbar from './Components/Searchbar';
import Results from './Components/Results';

class App extends React.Component {
  state = {
    searchValue: "",
    searchPlaceholder: "Enter a Pokémon Name",
    resultsArr: [],
    resultsSong: "",
    loading: false,
    typeaheadRef: {},
    pokeNames: [],
    resultPokemon: []
  };

  componentDidMount = () => {
    console.log(txt);
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=802", {
      method: "GET",
      mode: "cors"
    })
      .then(res => res.json())
      .then(res => {console.log(res.results);
        let pokemon = res.results.map(function(pokeObj){
          return pokeObj.name;
        });
        this.setState({ pokeNames: pokemon }, () => {console.log(this.state.pokeNames)})});
  };

  handleSearch = e => {
    this.setState({ searchValue: e }, () => console.log(e));
  };

  handleSelect = e => {
    console.log(e);
    this.setState({ searchValue: e }, () => console.log(e));
  };

  handleSubmit = e => {
    console.log(typeof this.state.searchValue);
    console.log(e);
    this.toggleLoading();
    fetch("https://pokeapi.co/api/v2/pokemon/" + this.state.searchValue)
      // .then(res => console.log(res.json()));
      .then(res => res.json())
      .then(res =>
        {console.log(res)
        this.setState(
          {
            resultPokemon: [res],//this.state.resultPokemon.push(res),
            searchValue: ""
          },
          () => {
            console.log(this.state.resultPokemon);
            this.toggleLoading();
          }
        )}
      );

    e.preventDefault();
  };

  handleClear = () => {
    this.setState({ searchValue: "" }, () => {
      this.handleSearch("");
    });
  };

  toggleLoading = () => this.setState({ loading: !this.state.loading });
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pokedex</h1>
          <Searchbar
            handleSubmit={this.handleSubmit}
            handleSearch={this.handleSearch}
            handleSelect={this.handleSelect}
            searchValue={this.state.searchValue}
            loading={this.state.loading}
            pokeNames={this.state.pokeNames}
          />
          <Results
            resultPokemon={this.state.resultPokemon}

          />
        </header>
      </div>
    );
  }
}

export default App;
