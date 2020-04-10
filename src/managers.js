import React from 'react'
import * as bs from 'react-bootstrap'
import { useState } from 'react'

function Manager(props) {
    const [show, setShow] = useState(true);
    return (
        <>
            <bs.Alert show={show} variant="success" className="mx-4 my-4">
                <bs.Alert.Heading>Welcome to the Managers page!</bs.Alert.Heading>
                <p>
                    How are we going to display the highest and lowest quality campaigns here????
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
    )
}
export default Manager;

