import React from 'react';
import * as bs from 'react-bootstrap';
import { useAuth0 } from "./react-auth0-spa";

export default function Account(props) {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <bs.Container fluid className="p-4">
            <bs.Row noGutters>
                <h4 className="m-4 text text-center"> Account Information: </h4>
                <bs.Col>
                    {!isAuthenticated && (
                        <bs.Button className="btn btn-primary" onClick={() => loginWithRedirect({})}>Log in</bs.Button>
                    )}
                </bs.Col>
                <bs.Col>
                    {isAuthenticated && <bs.Button className="btn btn-primary" onClick={() => logout()}>Log out</bs.Button>}
                </bs.Col>
            </bs.Row>
        </bs.Container>
    )
}