import React, { Component } from 'react';

function Header(props) {
    return (
        <div className="header">
            <div className="headerControls">
                <span className="logo">2048</span>
                <span>Game</span>
                <span>Settings</span>
            </div>
        </div>
    )
}

export default Header;