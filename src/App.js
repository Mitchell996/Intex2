import React from 'react';
import './App.scss';
import Home from './home';
import CampaignDetail from './campaign-detail'
import HeaderContainer from './header-container'
//import LeftContainer from './left-container'
import Form from './goFundMeForm'
import Prediction from './prediction'
import Managers from './managers'
import Login from './login'
import Account from './account'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Search from './search'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchedCampaign from './searchedCampaign'

function App() {

  return (
    <Router >
      <Container fluid className="p-0  d-flex flex-column">
        <Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <Col className="px-3 py-2">
            <HeaderContainer />
          </Col>
        </Row>
        <Row noGutters className="flex-grow-1">
          <Col md="8">
            <Switch>

              <Route path="/home" >
                <Home />
              </Route>

              <Route path="/home/weekdays/:weekday">
                <Home />
              </Route>

              <Route path="/campaign/:campaign">
                <CampaignDetail/>
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

              <Route path="/managers">
                <Login />
              </Route>

              <Route path="/welcomemanager" >
                <Managers />
              </Route>

              <Route path="/">
                <Home />
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

    </Router >
  );
}

export default App;
