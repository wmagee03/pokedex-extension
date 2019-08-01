import React from 'react';


const Results = props => (
    <div className="main">
        <img src={props.resultPokemon.length> 0 ? props.resultPokemon[0].sprites.front_default : ""} alt="sprite"></img>
        <p>{props.resultPokemon.length > 0 ? props.resultPokemon[0].name : ""}</p>
        <p>result pokemon</p>
    </div>
);
export default Results;