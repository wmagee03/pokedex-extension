import React from 'react';
import pokeball from '../Pokeball.jpeg';


const Results = props => (
    <div className="outer">
        <img src={props.resultPokemon.length> 0 ? props.resultPokemon[0].sprites.front_default : pokeball} alt="sprite" style={{width: "100px"}}></img>
        <div className="main" style={props.resultPokemon.length === 0 ? {display: 'none'} : {display: 'block'}}>
            <div style={{fontSize: '5ex'}}>{props.resultPokemon.length > 0 ? props.resultPokemon[0].name[0].toUpperCase() + props.resultPokemon[0].name.slice(1) : ""}</div>

            <div style={{fontStyle: 'italic'}}>{props.resultPokemon.length > 0 ? "TYPES" : ""}</div>
            <div style={{border: 'inset', borderColor: 'red'}}>
                {props.resultPokemon.length > 0 ? props.resultPokemon[0].types.map(function(item, index) {
                    return <div key={index}>{item.type.name}</div>}) : ""}
            </div>

            <div style={{fontStyle: 'italic'}}>{props.resultPokemon.length > 0 ? "ABILITIES" : ""}</div>
            <div style={{border: 'inset', borderColor: 'green'}}>
                {props.resultPokemon.length > 0 ? props.resultPokemon[0].abilities.map(function(item, index) {
                    return <div key={index}>{item.ability.name}</div>}) : ""}
            </div>

            <div style={{fontStyle: 'italic'}}>{props.resultPokemon.length > 0 ? "MOVES" : ""}</div>
            <div style={{border: 'inset',overflow:'scroll', height:'200px', width: '300px'}}>
                {props.resultPokemon.length > 0 ? props.resultPokemon[0].moves.map(function(item, index) {
                    return <div key={index}>{item.move.name}</div>}) : ""}
            </div>
        </div>
    </div>
);
export default Results;