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

Need to change to not use multiple states in same function




*/

import React, { useState } from 'react';
import Scoreboard from './Scoreboard';
import './CSS/Game.css';
import Data from './Data';


const Game = (props) => {
    const riders = Data;
    const [scores, setScores] = useState({
        score: 0,
        highScore: 0
    });
    const [cards, setCards] = useState({
        cardOne: riders[0],
        cardTwo: riders[1],
        cardThree: riders[2]
    });


    /* Plays on click and checks answer
    */
    function playRound(choice){
        if (!riders[choice].used){
            setScores({
                highScore: scores.highScore,
                score: scores.score +1 
            }
            );
            riders[choice].used = true
        }else{
            alert('loser')
            newGame();
        }
        if (scores.score === riders.length){
            alert('Jeez Louise you win!')
            newGame();
        }
        else {
            changeCards();
        }
    }

    /*checks to ensure at least one card hasn't been picked
    and then sets the new card values*/
    function changeCards(){
        shuffle(riders)
        if (riders[0].used === true && riders[1].used === true && riders[2].used === true){
            changeCards();
        }
        else {
            setCards({
                cardOne: riders[0],
                cardTwo: riders[1],
                cardThree: riders[2]
            });
        }
    }

    /* Resets the game*/
    function newGame(){
        for(let i = 0; i < riders.length; i++){
            if (riders[i].used === true){
                riders[i].used = false;
            }
        }
        if (scores.score > scores.highScore ){
            setScores({
                highScore: scores.score,
                score: 0
            });
            changeCards();
        }else{
            setScores({
                highScore: scores.highScore,
                score: 0
            });
            changeCards();
        }
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
        <Scoreboard score = {scores.score} 
                    highScore = {scores.highScore}/>
        <div id = "game-container">
            <div className = "card" onClick = {() => playRound(0)}>
                <img src = {cards.cardOne.src} alt ={cards.cardOne.name}></img>
                <span className = 'rider-name'>{cards.cardOne.name}</span>
            </div>
            <div className = "card" onClick = {() => playRound(1)}>{cards.cardTwo.id}
                <img src = {cards.cardTwo.src} alt ={cards.cardTwo.name}></img>
                <span className = 'rider-name'>{cards.cardTwo.name}</span>
            </div>
            <div className = "card" onClick = {() => playRound(2)}>{cards.cardThree.id}
                <img src = {cards.cardThree.src} alt ={cards.cardThree.name}></img>
                <span className = 'rider-name'>{cards.cardThree.name}</span>
            </div>
        </div>
        </div>
    )
}

export default Game