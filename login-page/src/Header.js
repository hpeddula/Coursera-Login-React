import { Link } from 'react-router-dom';
import { Navbar, Nav, NavbarBrand, NavItem } from 'react-bootstrap';
import React from 'react';
import './Header.css'
export default class Header extends React.Component {
    render() {
        return (
            <Navbar className="nav-header">
                <Nav>
                    <NavItem eventKey={1}>
                        <div>
                            <Link to='/'>Home</Link>
                        </div>
                    </NavItem>
                    <NavItem eventKey={2}>
                        <div>
                            <Link to='/login'>Login</Link>
                        </div>
                    </NavItem>
                    <NavItem eventKey={3}>
                        <div>
                            <Link to='/walter'>Walter</Link>
                        </div>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}