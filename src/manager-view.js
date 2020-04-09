import React, { useState, useEffect } from 'react'
import { useOktaAuth } from '@okta/okta-react';
import * as bs from 'react-bootstrap'

export default function ManagerView(props){
    const { authState, authService } = useOktaAuth();
    const [show, setShow] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    
    useEffect(() => {
        if (!authState.isAuthenticated) {
          // When user isn't authenticated, forget any user info
          setUserInfo(null);
        } else {
          authService.getUser().then((info) => {
            setUserInfo(info);
          });
        }
      }, [authState, authService]); // Update if authState changes
      
      
    return (
    <>
        <bs.Alert show={show} variant="success">
        <bs.Alert.Heading>{ userInfo && 
              <p>Welcome, {userInfo.name}!</p>
          }</bs.Alert.Heading>
        <p>
            I will configure this page after I figure out authentication stuff. 
        </p>
        <hr />
        <div className="d-flex justify-content-end">
            <bs.Button onClick={() => setShow(false)} variant="outline-success">
            Dismiss
            </bs.Button>
        </div>
        </bs.Alert>

        {!show && <bs.Button className='my-4 mx-4' onClick={() => setShow(true)}>Show Prediction</bs.Button>}
    </>
    );
}