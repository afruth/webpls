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
                    <Link to="/">
                        <NavbarBrand>WebPLS</NavbarBrand>
                    </Link>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {this.props.userId ? 
                                <NavItem>
                                    <Link to="/project">
                                        <NavLink>Projects</NavLink>
                                    </Link>
                                </NavItem>
                            : null
                            }
                        
                        <NavItem>
                            <Link to="/auth">
                                <NavLink>
                                    {this.props.userId ? "Account" : "Login" }
                                </NavLink>
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