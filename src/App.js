import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import Home from './home';
import CampaignDetail from './campaign-detail'
import HeaderContainer from './header-container'
import LeftContainer from './left-container'
import Form from './goFundMeForm'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <Router>
      <Container fluid className="p-0  d-flex flex-column">
        <Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <Col className="px-3 py-2">
            <HeaderContainer />
          </Col>
        </Row>
        <Row noGutters className="flex-grow-1">
          <Col md="2" className="px-3 py-4 shadow" style={{ backgroundColor: "#99CCCC" }}>
            {/* <LeftContainer /> */}
          </Col>
          <Col md="8">
            <Switch>
              <Route path="/home/categories/:category">
                <Home />
              </Route>
              <Route path="/campaign/:campaign">
                <CampaignDetail />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/newcampaign">
                <Form/>
              </Route>
              <Route path="/cart">
                {/* <Cart /> */}
              </Route>
              <Route path="/">
                <Home/>{/* <About /> */}
              </Route>
            </Switch>
          </Col>
          {/*<Col md="2" className="px-3 py-4 shadow" style={{backgroundColor:"#CCCC99"}}>
              <RightContainer />
           </Col>*/}
        </Row>
        <Row noGutters className="flexGrow-0 flex-shrink-0">
          <Col className="px-3 py-2">
            {/* <FooterContainer /> */}
          </Col>
        </Row>
      </Container>



    </Router>
  );
}

export default App;
