import React, { Component } from 'react';
import { connect } from 'react-redux';
import Settings from '../components/settings'
import { changeSettings } from '../actions'


class SettingsContainerComponent extends Component {
    constructor(props){
        super(props);
        this.updateSettings = this.updateSettings.bind(this);
    }

    updateSettings(newSettings) {
        this.props.dispatch(changeSettings(newSettings.amountOfTilesToSpawn))
    }
    render() {
        return (
            <div>
                <Settings onSaveButtonClick={this.updateSettings} amountOfTilesToSpawn={this.props.position.amountOfTilesToSpawn}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        position: state.position
    }
}

const SettingsContainer = connect(mapStateToProps)(SettingsContainerComponent);

export default SettingsContainer;