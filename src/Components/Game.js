/* Possible Expansion 
Side bar navigation
how to play
different difficulties
        maybe just have differnt themes be the different difficulties
fancier win screen
different themes
    have a switch in main game about which database to use
play every theme round

SOMETHING FUCKED UP WITH MAX SCORE




*/

import React, { useState } from 'react';
import Scoreboard from './Scoreboard';
import './CSS/Game.css';
import Data from './Data';


const Game = (props) => {
    const riders = Data;
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [cardOne, setCardOne] = useState(riders[0]);
    const [cardTwo, setCardTwo] = useState(riders[1]);
    const [cardThree, setCardThree] = useState(riders[2]);


    /* Plays on click and checks answer
    */
    function playRound(choice){
        if (!riders[choice].used){
            setScore(score +1);
            riders[choice].used = true
        }else{
            alert('loser')
            newGame();
        }
        if (score === riders.length -1){
            alert('Jeez Louise you win!')
            newGame();
        }
        else {
            setCards();
        }
    }

    /*checks to ensure at least one card hasn't been picked
    and then sets the new card values*/
    function setCards(){
        shuffle(riders)
        if (riders[0].used === true && riders[1].used === true && riders[2].used === true){
            setCards();
        }
        else {
            setCardOne(riders[0]);
            setCardTwo(riders[1]);
            setCardThree(riders[2]);
        }
    }

    /* Resets the game*/
    function newGame(){
        for(let i = 0; i < riders.length; i++){
            if (riders[i].used === true){
                riders[i].used = false;
            }
        }
        if (score > highScore ){
            setHighScore(score +1);
        }
        setScore(0);
        setCards();
    }

    /* Shuffle the array */
    function shuffle(array){
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
            }
    }

    return (
        <div>
        <Scoreboard score = {score} 
                    highScore = {highScore}/>
        <div id = "game-container">
            <div className = "card" onClick = {() => playRound(0)}>
                <img src = {cardOne.src} alt ={cardOne.name}></img>
                <span className = 'rider-name'>{cardOne.name}</span>
            </div>
            <div className = "card" onClick = {() => playRound(1)}>{cardTwo.id}
                <img src = {cardTwo.src} alt ={cardTwo.name}></img>
                <span className = 'rider-name'>{cardTwo.name}</span>
            </div>
            <div className = "card" onClick = {() => playRound(2)}>{cardThree.id}
                <img src = {cardThree.src} alt ={cardThree.name}></img>
                <span className = 'rider-name'>{cardThree.name}</span>
            </div>
        </div>
        </div>
    )
}

export default Game