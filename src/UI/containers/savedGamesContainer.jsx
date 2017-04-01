import React, { Component } from 'react';
import SavedGamesView from '../components/savedGames';

class SavedGamesComponent extends Component {
    render() {
        return (
            <div>
                <SavedGamesView savedGames={this.props.savedGames}/>
            </div>
        );
    }
}



export default SavedGamesComponent;