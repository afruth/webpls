import React from 'react';
import '@blueprintjs/core/dist/blueprint.css';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="pt-navbar .modifier">
                <div className="pt-navbar-group pt-align-left">
                    <div className="pt-navbar-heading">WebPLS</div>
                </div>
                <div className="pt-navbar-group pt-align-right">
                    <button className="pt-button pt-minimal pt-icon-home">Home</button>
                    <button className="pt-button pt-minimal pt-icon-document">Projects</button>
                    <span className="pt-navbar-divider"></span>
                    <button className="pt-button pt-minimal pt-icon-user"></button>
                    <button className="pt-button pt-minimal pt-icon-notifications"></button>
                    <button className="pt-button pt-minimal pt-icon-cog"></button>
                </div>
            </nav>
        )
    }
}

export default NavBar;