import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


class NotificationPanel extends Component {
    render() {
        return (
            <CSSTransitionGroup
                transitionName="notification"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {this.props.showNotification ? 
                    <div className="notificationPanel">
                        <span key="1">Notification message!</span>
                    </div> 
                : undefined }
            </CSSTransitionGroup>
        );
    }
}

export default NotificationPanel;