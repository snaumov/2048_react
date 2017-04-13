import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="header">
            <div className="headerShowCase">
                <div className="headerLogo">
                    <span className="logo">2048</span>
                </div>
                <div className="headerControls">
                    <div className="headerButton">
                        <i className="fa fa-th headerIcon" aria-hidden="true"></i>
                        <Link to="/" className="headerButtonText">Game</Link>
                    </div>
                    <div className="headerButton">
                        <i className="fa fa-floppy-o headerIcon" aria-hidden="true"></i>
                        <Link to="/saves" className="headerButtonText">Saved Games</Link>
                    </div>
                    <div className="headerButton">
                        <i className="fa fa-sliders headerIcon" aria-hidden="true"></i>
                        <Link to="/settings" className="headerButtonText">Settings</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;