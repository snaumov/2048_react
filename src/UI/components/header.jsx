import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="header">
            <div className="headerControls">
                <span className="logo">2048</span>
                <Link to="/" className="headerButton">Game</Link>
                <Link to="/saves" className="headerButton">Saved Games</Link>
                <Link to="/settings" className="headerButton">Settings</Link>
            </div>
        </div>
    )
}

export default Header;