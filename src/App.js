import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import Home from './home';
//import MyHome from './myHome';
import CampaignDetail from './campaign-detail'
import HeaderContainer from './header-container'
import LeftContainer from './left-container'
import Form from './goFundMeForm'
import Account from './account'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Search from './search'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import history from './utils/history';
// import Callback from './callback';
// import Auth from './auth';

function App() {
  
  // const auth = new Auth();

  // const handleAuthentication = (nextState, replace) => {
  //   if (/access_token|id_token|error/.test(nextState.location.hash)) {
  //     auth.handleAuthentication();
  //   }
  // }

  return (
    <Router > {/* history={history} component={MyHome} */}
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

              <Route path="/home" /> {/* render={(props) => <MyHome auth={auth} {...props} />}  */}

              <Route path="/home/categories/:category">
                <Home />
              </Route>

              <Route path="/campaign/:campaign">
                <CampaignDetail />
              </Route>


              <Route path="/search">
                <Search />
              </Route>

              <Route path="/newcampaign">
                <Form />
              </Route>

              <Route path="/account">
                <Account />
              </Route>

              <Route path="/callback"  />
              {/* render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} />
              }} */}

              <Route path="/"  /> {/* render={(props) => <MyHome auth={auth} {...props} />} */}

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
