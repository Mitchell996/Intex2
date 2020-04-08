import React from 'react'
import * as bs from 'react-bootstrap'
import { useState } from 'react'

export default function Prediction(props){
    const [show, setShow] = useState(true);

    return (
    <>
        <bs.Alert show={show} variant="success">
        <bs.Alert.Heading>How Successful is Your Campaign?</bs.Alert.Heading>
        <p>
            Based on the parameters you provided, your campaign is predicted to be XX% successful. 
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
