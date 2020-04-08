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
                        <Link to="/home" className="nav-link">Home</Link>
                        <Link to="/search" className="nav-link">Search</Link>
                        <Link to="/newcampaign" className="nav-link">Create</Link>
                    </bs.Nav>
                    <bs.Nav>
                        {/* <Link to="/campaign"><i className="m-2 fas fa-donate" ></i>  </Link> */}
                        <bs.NavDropdown title="Welcome, User" id="basic-nav-dropdown">
                            <bs.NavDropdown.Item href="/">Campaigns</bs.NavDropdown.Item>
                            <bs.NavDropdown.Item href="/search">Search</bs.NavDropdown.Item>
                            <bs.NavDropdown.Item href="/newcampaign">New Campaign</bs.NavDropdown.Item>
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