import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <nav class="pt-navbar .modifier">
                <div class="pt-navbar-group pt-align-left">
                    <div class="pt-navbar-heading">WebPLS</div>
                </div>
                <div class="pt-navbar-group pt-align-right">
                    <button class="pt-button pt-minimal pt-icon-home">Home</button>
                    <button class="pt-button pt-minimal pt-icon-document">Projects</button>
                    <span class="pt-navbar-divider"></span>
                    <button class="pt-button pt-minimal pt-icon-user"></button>
                    <button class="pt-button pt-minimal pt-icon-notifications"></button>
                    <button class="pt-button pt-minimal pt-icon-cog"></button>
                </div>
            </nav>
        )
    }
}

export default NavBar;