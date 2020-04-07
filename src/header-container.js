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
<<<<<<< HEAD
            <bs.Navbar bg="light">
            <img
        alt=""
        src={`${process.env.PUBLIC_URL}/logo192.png`}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
            
                <bs.Navbar.Brand  href="#home">Northwest</bs.Navbar.Brand>
                <bs.Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <bs.Navbar.Collapse  id="basic-navbar-nav">
                <bs.Nav className="mr-auto">
                <bs.Nav.Link href="/home">Home</bs.Nav.Link>
                    <bs.Nav.Link href="/search">Search</bs.Nav.Link>
                </bs.Nav>
                <bs.NavDropdown style={{color: "#FFF0FF" }} title="Welcome, Mitchell" id="basic-nav-dropdown">
                    <bs.NavDropdown.Item href="#action/3.1">Action</bs.NavDropdown.Item>
                    <bs.NavDropdown.Item href="#action/3.2">Another action</bs.NavDropdown.Item>
                    <bs.NavDropdown.Item href="#action/3.3">Something</bs.NavDropdown.Item>
                    <bs.NavDropdown.Divider />
                    <bs.NavDropdown.Item href="#action/3.4">Separated link</bs.NavDropdown.Item>
                </bs.NavDropdown>
            </bs.Navbar.Collapse>
=======
            <bs.Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Link to="/">
                    <bs.Image src="/favicon.png" height="80rem"></bs.Image>
                </Link>
                {/* <img
                    alt=""
                    src={`${process.env.PUBLIC_URL}/logo192.png`}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '} */}

                <bs.Navbar.Brand href="#home">  GoFundMe </bs.Navbar.Brand>
                <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <bs.Navbar.Collapse id="basic-navbar-nav">
                    <bs.Nav className="mr-auto">
                        <Link to="/home" className="nav-link">Home</Link>
                        <Link to="/home" className="nav-link">About</Link>
                        <Link to="/home" className="nav-link">Help</Link>
                    </bs.Nav>
                    <bs.Nav>
                        <Link to="/campaign"><i className="m-2 fas fa-donate" ></i>  </Link>
                        <bs.NavDropdown title="Welcome, User" id="basic-nav-dropdown">
                            <bs.NavDropdown.Item href="#action/3.1">Campaigns</bs.NavDropdown.Item>
                            <bs.NavDropdown.Item href="#action/3.2">My Campaigns</bs.NavDropdown.Item>
                            <bs.NavDropdown.Item href="/newcampaign">New Campaign</bs.NavDropdown.Item>
                            <bs.NavDropdown.Divider />
                            <bs.NavDropdown.Item href="/account">My Account</bs.NavDropdown.Item>
                        </bs.NavDropdown>
                    </bs.Nav>
                </bs.Navbar.Collapse>
>>>>>>> b6a52f251566d6d97daa520eee5e725089963218
            </bs.Navbar>
        </bs.Container>
    )
}

export default HeaderContainer;