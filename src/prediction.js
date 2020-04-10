import React from 'react'
import * as bs from 'react-bootstrap'
import { useState } from 'react'
import AppContext from './context'

export default function Prediction(props){
    const [show, setShow] = useState(true);
    const context = React.useContext(AppContext)

    return (
    <>
        <bs.Alert show={show} variant="success" className="mx-4 my-4">
        <bs.Alert.Heading>How Successful Will Your Campaign Be?</bs.Alert.Heading>
        <p>
            Based on the parameters you provided, your campaign is predicted to reach its goal in <b>{Math.round(context.currentEstimate)}</b> days. 
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
