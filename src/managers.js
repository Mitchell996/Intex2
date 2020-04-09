import React from 'react'
import * as bs from 'react-bootstrap'
import { useOktaAuth } from '@okta/okta-react';

const Manager = () => { 
    const { authState, authService } = useOktaAuth();
    
    const login = () => authService.login('/managers/view');
  
    if( authState.isPending ) { 
      return (
        <div>Loading authentication...</div>
      );
    } else if( !authState.isAuthenticated ) { 
      return (
        <div>
          <bs.Button variant="primary" className="my-4 mx-4" onClick={login}>Login</bs.Button>
        </div>
      );
    }
    
  };
export default Manager;

