import React from 'react';
import { Navbar, Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light toggleable>
                    <NavbarToggler right onClick={this.toggle} />
                    <Link className="navbar-brand" to="/">
                        WebPLS
                    </Link>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {this.props.userId ? 
                                <NavItem>
                                    <Link className="nav-link" to="/projects">
                                        Projects
                                    </Link>
                                </NavItem>
                            : null
                            }
                        
                        <NavItem>
                            <Link className="nav-link" to="/auth">
                                {this.props.userId ? "Account" : "Login" }
                            </Link>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default createContainer(() => {
    return {
        userId: Meteor.userId(),
        isLoggingIn: Meteor.loggingIn()
    }
}, NavBar);