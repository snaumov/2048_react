import React, { Component } from 'react'
import Board from '../../Board/components/board';

function SavedGameView(props) {

    return (
        <div className="savedGame">
            <Board position={props.position} />
            <button onClick={e => props.onLoadGameClick(e.target.id)}>Load Game</button>
            <button onClick>Save Game</button>
        </div>
    )
}

function SavedGamesView(props) {

    const savedGamesList = props.savedGames.map((position) => {
        return <SavedGameView onLoadGameClick={props.onLoadGameClick} position={position}/>
    })
    console.log(props.savedGames, savedGamesList)
    return(
        <div className="savedGames">
           {savedGamesList}
        </div>
    )
}

export default SavedGamesView;