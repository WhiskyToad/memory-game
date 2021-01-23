import React from 'react';
import './CSS/Scoreboard.css';

const Scoreboard = ({score, highScore}) => {


return (
    <div id = 'scoreboard'>
        <h1>Memorise the riders</h1>
        <div className = 'row'>
        <h2>Current Score</h2>
        <h2>High Score</h2>
        </div>
        <div className = 'row'>
            <h2>{score}</h2>
            <h2>{highScore}</h2>
        </div>
    </div>
)
}

export default Scoreboard