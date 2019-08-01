import './App.css';
//import readFile from './parseFile.js';

import React from 'react';

import Searchbar from './Components/Searchbar';
import Results from './Components/Results';
//import { cache, fetchFile } from './parseFile';


class App extends React.Component {
  state = {
    searchValue: "",
    searchPlaceholder: "Enter a Pokémon Name",
    resultsArr: [],
    resultsSong: "",
    loading: false,
    typeaheadRef: {},
    pokeNames: [],
    resultPokemon: [],
    gifPokemon: {},
    evStats: []
  };

  componentDidMount = () => {

    const headers = new Headers ({
      "Content-Type": "application/json",
      "Accept": "application/json"
    });
    fetch(`./pokemodelURLs_alt.json`, {h:headers})
    .then(res => res.json())
    .then(res => {console.log(res);
      let nameArr = Object.keys(res);
      console.log(nameArr);
      this.setState({ pokeNames : nameArr, gifPokemon : res})
    });

    // fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=802", {
    //   method: "GET",
    //   mode: "cors"
    // })
    //   .then(res => res.json())
    //   .then(res => {console.log(res.results);
    //     let pokemon = res.results.map(function(pokeObj){
    //       return pokeObj.name;
    //     });
    //     this.setState({ pokeNames: pokemon }, () => {console.log(this.state.pokeNames)})});
    
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
        {console.log(res);
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
    // Attempting to implement gifs into the thing
    console.log(this.state.searchValue);
    // fetch("https://projectpokemon.org/images/normal-sprite/shuckle.gif", {
    //   method: 'GET',
    //   mode: 'no-cors'
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //     this.setState({
    //       gifPokemon: [res],
    //       searchValue: ""
    //     }, () => {
    //       console.log(this.state.gifPokemon);
    //       this.toggleLoading();
    //     })
    //   });

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
          <h1 style={{fontFamily: 'Pokemon-Title', fontWeight: '400'}}>Poké-Dextension</h1>
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
            gifPokemon={this.state.gifPokemon}
          />
        </header>
      </div>
    );
  }
}

export default App;
