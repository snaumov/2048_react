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
            <div className="amountOfTilesSetting">
                <h3>Amount of tiles to spawn</h3>
                <div className="amountOfTilesSettingControls">
                    <select name="" value={props.amountOfTileToSpawn}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
            <div className="settingsSaveButtons">
                <button onClick={() => props.onSaveButtonClick(getNewSettings())}>Save</button>
                <button>Reset to default</button>
            </div>      
        </div>
    )
}

export default Settings;