import { Link } from 'react-router-dom';
import { Navbar, Nav, NavbarBrand, NavItem } from 'react-bootstrap';
import React from 'react';
import './Header.css'
export default class Header extends React.Component {
    render() {
        return (
            <Navbar fluid={false} >
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Home</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={2} href="/login">
                        Login
                    </NavItem>
                    <NavItem eventKey={3} href="/walter">
                        Walter
                    </NavItem>
                    <NavItem href="/pdf">
                        Pdf
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}