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
                    <div key="1" className="notificationPanel">
                        <span>Notification message!</span>
                    </div> 
                : undefined }
            </CSSTransitionGroup>
        );
    }
}

export default NotificationPanel;