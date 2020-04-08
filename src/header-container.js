import React from 'react';
import './App.scss';
import * as bs from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import { Container } from 'react-bootstrap/lib/Tab';

function HeaderContainer(props) {
    //const context = React.useContext(AppContext);
    //let numInCart = context.numInCart;
    //const [count, setCounter] = useState(0);
    //setCounter(numInCart);
    //console.log("it's here!");
    //console.log(context.numInCart);
    
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
                    </bs.Nav>
                    <bs.Nav>
                        <Link to="/campaign"><i className="m-2 fas fa-donate" ></i>  </Link>
                        <bs.NavDropdown title="Welcome, User" id="basic-nav-dropdown">
                            <bs.NavDropdown.Item href="/">Campaigns</bs.NavDropdown.Item>
                            <bs.NavDropdown.Item href="/">My Campaigns</bs.NavDropdown.Item>
                            <bs.NavDropdown.Item href="/newcampaign">New Campaign</bs.NavDropdown.Item>
                            <bs.NavDropdown.Divider />
                            <bs.NavDropdown.Item href="/account">Log Out</bs.NavDropdown.Item>
                        </bs.NavDropdown>
                    </bs.Nav>
                </bs.Navbar.Collapse>
            </bs.Navbar>
        </bs.Container>
    )
}

export default HeaderContainer;