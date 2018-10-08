import { Link } from 'react-router-dom';
import { Navbar, Nav, NavbarBrand, NavItem } from 'react-bootstrap';
import React from 'react';
import './Header.css'
export default class Header extends React.Component {
    render() {
        return (
            <Navbar >
                <Nav>
                    <NavItem eventKey={1}>
                        <Link to='/'>Home</Link>
                    </NavItem>
                    <NavItem eventKey={2}>
                        <Link to='/login'>Login</Link>
                    </NavItem>
                    <NavItem eventKey={3}>
                        <Link to='/walter'>Walter</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}