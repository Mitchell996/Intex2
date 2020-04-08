import React from 'react';
import * as bs from 'react-bootstrap';
//import { useAuth0 } from "./react-auth0-spa";

export default function Account(props) {
    // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <bs.Container fluid className="p-4">
            <bs.Row noGutters>
                <h4 className="m-4 text text-center"> Account Information: </h4>
                <bs.Col className="m-4">
                    <p>If you make it absolutely clear that Your version of this BeOpen Python License Agreement, PSF hereby grants Recipient a 
                        non-exclusive, royalty-free, perpetual, irrevocable license, under Your choice of the license contains terms which say 
                        what you want it, that you distribute are governed by the terms and conditions of this Package, but belong to whomever 
                        generated them, and may be fees involved in handling the item. It also means that the distribution and/or use of 
                        Modifications made by that Participant. If You create or to use it under the GFDL. Thank you Legal Ipsum.</p>
                    <br></br>
                    {/* {!isAuthenticated && (
                        <bs.Button className="btn btn-primary" onClick={() => loginWithRedirect({})}>Log in</bs.Button>
                    )}
                    {isAuthenticated && <bs.Button className="btn btn-primary" onClick={() => logout()}>Log out</bs.Button>} */}
                </bs.Col>
            </bs.Row>
        </bs.Container>
    )
}