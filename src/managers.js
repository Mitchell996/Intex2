import React from 'react'
import * as bs from 'react-bootstrap'
import { useState } from 'react'

export default function Prediction(props){
    const [show, setShow] = useState(true);

    return (
    <>
        <bs.Alert show={show} variant="success">
        <bs.Alert.Heading>Hello Manager!</bs.Alert.Heading>
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