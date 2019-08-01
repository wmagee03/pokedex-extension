import React from 'react';
import pokeball from '../Pokeball.jpeg';

import '../App.css';


//import Form from 'react-bootstrap/Form';
//import InputGroup from "react-bootstrap/InputGroup";


//let calcVal = 0;
// function calcStats(name, base, ev) {
//     return name === "hp" ? Math.floor((2 * base + 31 + ev/4) + 110) : Math.floor((2 * base + 31 + ev/4) + 5)
// }

// function getValue(val) {
//     this.setState(val);
// }

const Results = props => (
    <div className="outer">
        <img src={props.resultPokemon.length > 0 ? props.gifPokemon[props.resultPokemon[0].name] : pokeball} alt="sprite" style={{width: "200px", margin: '10px'}}></img>
        <div className="main" style={props.resultPokemon.length === 0 ? {display: 'none'} : {display: 'block', justifyContent: 'center'}}>
            <div style={{fontSize: '5ex'}}>{props.resultPokemon.length > 0 ? props.resultPokemon[0].name[0].toUpperCase() + props.resultPokemon[0].name.slice(1) : ""}</div>

            <div style={{fontFamily: 'Pokemon-VGStyle', marginTop: '40px'}}>{props.resultPokemon.length > 0 ? "TYPES" : ""}</div>
            <div style={{border: 'inset', borderColor: 'red', backgroundColor: 'white'}}>
                {props.resultPokemon.length > 0 ? props.resultPokemon[0].types.map(function(item, index) {
                    return <div key={index} style={{fontFamily: 'Pokemon-VGStyle', fontSize: '15px', color: 'black'}}>{item.type.name}</div>}) : ""}
            </div>

            <div style={{fontFamily: 'Pokemon-VGStyle', marginTop: '40px'}}>{props.resultPokemon.length > 0 ? "ABILITIES" : ""}</div>
            <div style={{border: 'inset', borderColor: 'green', backgroundColor: 'white'}}>
                {props.resultPokemon.length > 0 ? props.resultPokemon[0].abilities.map(function(item, index) {
                    return <div key={index} style={{fontFamily: 'Pokemon-VGStyle', fontSize: '15px', color: 'black'}}>{item.ability.name}</div>}) : ""}
            </div>

            <div style={{fontFamily: 'Pokemon-VGStyle', marginTop: '40px'}}>{props.resultPokemon.length > 0 ? "MOVES" : ""}</div>
            <div style={{border: 'inset', overflow:'scroll', height:'200px', borderColor:'cyan', backgroundColor: 'white'}}>
                {props.resultPokemon.length > 0 ? props.resultPokemon[0].moves.map(function(item, index) {
                    return <div key={index} style={{fontFamily: 'Pokemon-VGStyle', fontSize: '15px', color: 'black'}}>{item.move.name}</div>}) : ""}
            </div>

            <div style={{fontFamily: 'Pokemon-VGStyle', marginTop: '40px'}}>{props.resultPokemon.length > 0 ? "STAT CALCULATION" : ""}</div>
            <div style={{border: 'inset', borderColor: 'blue', height:'200px', width: '400px', backgroundColor: 'white',  marginBottom: '40px'}}>
                {props.resultPokemon.length > 0 ? props.resultPokemon[0].stats.map(function(item, index) {
                    return <div key={index}>
                                <span style={{paddingRight: "10px", width: "10px"}}>
                                    <input style={{border: 'inset'}} type={"number"} maxLength={3} defaultValue={0} max={255} min={0}>
                                    </input>
                                </span>
                                <span style={{fontFamily: 'Pokemon-VGStyle', color: 'black', fontSize: '15px'}}>{item.stat.name + ": " + item.base_stat}</span>
                        </div>}) : ""}
            </div>

        </div>
    </div>
);
export default Results;