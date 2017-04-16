import React, { Component } from 'react'
import MiniBoard from './miniBoard';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

function SavedGameView(props) {

    return (
        <div className="savedGame">
            <MiniBoard position={props.position} />
            <div className="savedGameButtonsControls">
                <button onClick={() => props.onLoadGameClick(props.gameNumber)}>Load Game</button>
                <button className="deleteGameButton" onClick={() => props.onDeleteGameClick(props.gameNumber)}>Delete Game</button>
                <span>Score: {props.score}</span>
            </div>
            
        </div>
    )
}

function SavedGamesView(props) {

    const savedGamesList = props.savedGames.map((game, index) => {
        return <SavedGameView key={index} gameNumber={index} onLoadGameClick={props.onLoadGameClick} onDeleteGameClick={props.onDeleteGameClick} position={game.position} score={game.score}/>
    })

    return(
            <div className="savedGames">
                {savedGamesList.length ? savedGamesList : <span className="noSavedGames">You didn't save anything yet</span> }
            </div>
        
    )
}

export default SavedGamesView;