import React from 'react';
import './App.scss';
import * as bs from 'react-bootstrap'
import AppContext from './context';

//import { Container } from 'react-bootstrap/lib/Tab';

function HeaderContainer(props) {
    //const context = React.useContext(AppContext);
    //let numInCart = context.numInCart;
    //const [count, setCounter] = useState(0);
    //setCounter(numInCart);
    console.log("it's here!");
    //console.log(context.numInCart);
    return (
        <bs.Container  >
            <bs.Navbar bg="light">
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

                <bs.Navbar.Brand href="#home">GoFundMe</bs.Navbar.Brand>
                <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <bs.Navbar.Collapse id="basic-navbar-nav">
                    <bs.Nav className="mr-auto">
                        <bs.Nav.Link href="/home">Home</bs.Nav.Link>
                        <bs.Nav.Link href="/Help">Help</bs.Nav.Link>
                        <bs.Nav.Link href="/About">About</bs.Nav.Link>
                        <bs.Nav.Link href="/campaign" ><i className="fa fa-donate"></i></bs.Nav.Link>
                    </bs.Nav>
                    <bs.NavDropdown title="Welcome, User" id="basic-nav-dropdown">
                        <bs.NavDropdown.Item href="#action/3.1">Campaigns</bs.NavDropdown.Item>
                        <bs.NavDropdown.Item href="#action/3.2">My Campaigns</bs.NavDropdown.Item>
                        <bs.NavDropdown.Item href="/newcampaign">New Campaign</bs.NavDropdown.Item>
                        <bs.NavDropdown.Divider />
                        <bs.NavDropdown.Item href="#action/3.4">My Account</bs.NavDropdown.Item>
                    </bs.NavDropdown>
                </bs.Navbar.Collapse>
            </bs.Navbar>
        </bs.Container>
    )
}

export default HeaderContainer;