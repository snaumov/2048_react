import React, { Component } from 'react'
import MiniBoard from './miniBoard';

function SavedGameView(props) {

    return (
        <div className="savedGame">
            <MiniBoard position={props.position} />
            <div className="savedGameButtonsControls">
                <button onClick={() => props.onLoadGameClick(props.gameNumber)}>Load Game</button>
                <button className="deleteGameButton" onClick={() => props.onDeleteGameClick(props.gameNumber)}>Delete Game</button>
            </div>
            
        </div>
    )
}

function SavedGamesView(props) {

    const savedGamesList = props.savedGames.map((position, index) => {
        return <SavedGameView gameNumber={index} onLoadGameClick={props.onLoadGameClick} onDeleteGameClick={props.onDeleteGameClick} position={position}/>
    })
    return(
        <div className="savedGames">
           {savedGamesList}
        </div>
    )
}

export default SavedGamesView;