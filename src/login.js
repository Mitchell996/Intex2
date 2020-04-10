import React, { useState } from 'react'
import * as bs from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function Verify(username, password) {
    const managerUser = "rootbeer"
    const managerPass = "purplemonkeydishwater"
    const user = "neo"
    const pass = "kettlesdonuts"
    let message = ""
    
    if (managerUser === username && managerPass === password) {
        message = "Welcome Manager!";
    }
    else if (username === user && password === pass) {
        message = "You do not have access to the managers view.";
    }
    else {
        message = "Sorry, you do not have an account.";
    }
    
    return message;
}

function Login(props) {
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");
    let verify = ''
    const history = useHistory()
    
    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <bs.Form className="my-4 mx-4" onSubmit={handleSubmit}>
            <bs.Col md="6" style={{margin: "0 auto", padding: "60px 0", maxWidth: "320px"}}>
                <bs.FormGroup controlId="username" >
                    <bs.FormLabel>Username</bs.FormLabel>
                    <bs.FormControl
                        autoFocus
                        type="text"
                        value={username}
                        placeholder="Enter username"
                        onChange={e => setUser(e.target.value)}
                    />
                </bs.FormGroup>
                <bs.FormGroup controlId="password" >
                    <bs.FormLabel>Password</bs.FormLabel>
                    <bs.FormControl
                        value={password}
                        placeholder="Enter password"
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </bs.FormGroup>
                <h4>{verify}</h4>
                <bs.Button
                    variant="success"
                    className="btn btn-success"
                    block
                    to="/welcomemanager"
                    bssize="large"
                    disabled={!validateForm()}
                    
                    onClick={() => {
                        verify = Verify(username, password)
                        console.log('Alert: ',verify)
                        if (verify === "Welcome Manager!") {
                            history.push("/welcomemanager")
                        }
                        else if (verify === "You do not have access to the managers view."){
                            alert(verify)
                        }
                        else{
                            alert(verify)
                        }
                    }}>
                    Login
                    </bs.Button>
            </bs.Col>
        </bs.Form>
    )
}
export default Login;
