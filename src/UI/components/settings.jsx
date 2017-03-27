import React,  { Component } from 'react'

function Settings(props) {
    const getNewSettings = () => {
        const amountOfTilesToSpawn = document.querySelector('select').value;
        return {
            amountOfTilesToSpawn: amountOfTilesToSpawn,
        }
    }

    return(
        <div className="settingsPanel">
            <h3>Amount of tiles to spawn</h3>
            <select name="" value={props.amountOfTileToSpawn}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button onClick={() => props.onSaveButtonClick(getNewSettings())}>Save</button>
            <button>Reset to default</button>
        </div>
    )
}

export default Settings;