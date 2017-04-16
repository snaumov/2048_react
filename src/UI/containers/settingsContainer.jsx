import React, { Component } from 'react';
import { connect } from 'react-redux';
import Settings from '../components/settings'
import NotificationPanel from '../components/notificationPanel'
import { changeSettingsAndShowNotification } from '../actions'



class SettingsContainerComponent extends Component {
    constructor(props){
        super(props);
        this.updateSettings = this.updateSettings.bind(this);
    }

    updateSettings(newSettings) {
        this.props.dispatch(changeSettingsAndShowNotification(newSettings.amountOfTilesToSpawn, 'Settings updated'));
    }
    render() {
        return (
            <div>
                <Settings onSaveButtonClick={this.updateSettings} amountOfTilesToSpawn={this.props.position.amountOfTilesToSpawn}/>
                <NotificationPanel showNotification={this.props.ui.showNotification} notificationText={this.props.ui.notificationText}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        position: state.position,
        ui: state.UI
    }
}

const SettingsContainer = connect(mapStateToProps)(SettingsContainerComponent);

export default SettingsContainer;