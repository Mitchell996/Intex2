import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import Home from './home';
//import MyHome from './myHome';
import CampaignDetail from './campaign-detail'
import HeaderContainer from './header-container'
//import LeftContainer from './left-container'
import Form from './goFundMeForm'
import Prediction from './prediction'
import Managers from './managers'
import Account from './account'
import ManagersView from './manager-view'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Search from './search'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchedCampaign from './searchedCampaign'
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react'

function App() {

  const config = {
    clientId: '{0oa5k4vtvovh4qftW4x6}',
    issuer: 'https://${dev-273788.okta.com}/oauth2/default',
    redirectUri: 'http://localhost:8080/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true
  };

  return (
    <Router > 
      <Container fluid className="p-0  d-flex flex-column">
        <Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <Col className="px-3 py-2">
            <HeaderContainer />
          </Col>
        </Row>
        <Row noGutters className="flex-grow-1">
          <Col md="2" className="px-3 py-4 shadow-sm" >
            {/* <LeftContainer /> */}
          </Col>
          <Col md="8">
            <Switch>
              <Security {...config}>
                <Route path="/home" > 
                  <Home />
                </Route>

                <Route path="/home/categories/:category">
                  <Home />
                </Route>

                <Route path="/campaign/:campaign">
                  <CampaignDetail />
                </Route>

                <Route path="/searchedCampaign">
                  <SearchedCampaign />
                </Route>

                <Route path="/search">
                  <Search />
                </Route>

                <Route path="/predictmycampaign">
                  <Form />
                </Route>

                <Route path="/prediction">
                  <Prediction />
                </Route>

                <Route path="/account">
                  <Account />
                </Route>

                <SecureRoute path="/managers">
                  <Managers/>
                </SecureRoute>
                
                <SecureRoute path="/managers/view" >
                  <ManagersView/>
                </SecureRoute>

                <Route path="/callback" component={LoginCallback} />
                
                <Route path="/"> 
                  <Home />
                </Route>
              </Security>

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

    </Router >
  );
}

export default App;
