import React from 'react';
import './App.scss';
import * as bs from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeaderContainer(props) { 
    return (
        <bs.Container  >
            <bs.Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Link to="/">
                    <bs.Image src="/favicon.png" height="80rem"></bs.Image>
                </Link>
                <bs.Navbar.Brand href="/">  GoFundMe </bs.Navbar.Brand>
                <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <bs.Navbar.Collapse id="basic-navbar-nav">
                    <bs.Nav className="mr-auto">
                        <Link to="/search" className="nav-link">Search</Link>
                        <Link to="/predictmycampaign" className="nav-link">Predict</Link>
                        <Link to="/managers" className="nav-link">Managers</Link>
                    </bs.Nav>
                    <bs.Nav>
                        <bs.NavDropdown title="Welcome" id="basic-nav-dropdown">
                            <bs.NavDropdown.Item href="/">Campaigns</bs.NavDropdown.Item>
                            <bs.NavDropdown.Item href="/search">Search</bs.NavDropdown.Item>
                            <bs.NavDropdown.Item href="/predictmycampaign">Predict</bs.NavDropdown.Item>
                            <bs.NavDropdown.Divider />
                            <bs.NavDropdown.Item href="/account">Account</bs.NavDropdown.Item>
                        </bs.NavDropdown>
                    </bs.Nav>
                </bs.Navbar.Collapse>
            </bs.Navbar>
        </bs.Container>
    )
}

export default HeaderContainer;