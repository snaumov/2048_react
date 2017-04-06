import React, { Component } from 'react'
import Board from '../../Board/components/board';

function SavedGameView(props) {

    return (
        <div className="savedGame">
            <Board position={props.position} />
            <button onClick={() => props.onLoadGameClick(props.gameNumber)}>Load Game</button>
            <button onClick={() => props.onDeleteGameClick(props.gameNumber)}>Delete Game</button>
        </div>
    )
}

function SavedGamesView(props) {

    const savedGamesList = props.savedGames.map((position, index) => {
        return <SavedGameView gameNumber={index} onLoadGameClick={props.onLoadGameClick} onDeleteGameClick={props.onDeleteGameClick} position={position}/>
    })
    console.log(props.savedGames, savedGamesList)
    return(
        <div className="savedGames">
           {savedGamesList}
        </div>
    )
}

export default SavedGamesView;