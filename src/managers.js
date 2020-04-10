import React from 'react'
import * as bs from 'react-bootstrap'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import AppContext from './context';

function Manager(props) {
    const [show, setShow] = useState(true);
    const history = useHistory();
    const context = React.useContext(AppContext);
    return (
        <>
            <bs.Alert show={show} variant="success" className="mx-4 my-4">
                <bs.Alert.Heading>Welcome to the Managers page!</bs.Alert.Heading>
                <p>
                    Click a button to view high or low quality campaigns, or select "View all" to see all the campaigns.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <bs.Button onClick={() => setShow(false)} variant="outline-success">
                        Dismiss
                    </bs.Button>
                </div>

            </bs.Alert>

            {!show && 
            <bs.Button 
                variant="outline-dark"
                className='my-4 mx-4' 
                onClick={() => setShow(true)}>
                Show Welcome
            </bs.Button>} 
            <br></br>
            <bs.Row>
            <bs.Col md="4" style={{margin: "0 auto", padding: "60px 0", maxWidth: "320px"}}>
                <bs.Button 
                    variant="success"
                    className='my-4 mx-4 text-center'
                    onClick={() => {
                        context.QualityCampaigns("high")
                        history.push("/searchedCampaign")
                        history.go(1)}} >
                    High Quality
                </bs.Button> 
                <br></br>
            </bs.Col>
            <bs.Col md="4" style={{margin: "0 auto", padding: "60px 0", maxWidth: "320px"}}>
                <bs.Button 
                    variant="success"
                    className='my-4 mx-4 text-center'
                    onClick={() => {
                        context.QualityCampaigns("low")
                        history.push("/searchedCampaign")
                        history.go(1)}} >
                    Low Quality
                </bs.Button>
                <br></br>
            </bs.Col>
            <bs.Col md="4" style={{margin: "0 auto", padding: "60px 0", maxWidth: "320px"}}>
                <bs.Button 
                    variant="success"
                    className='my-4 mx-4 text-center'
                    onClick={() => {
                        context.QualityCampaigns("none")
                        history.push("/searchedCampaign")
                        history.go(1)}} >
                    View All
                </bs.Button>
            </bs.Col>
            </bs.Row>
        </>
    )
}
export default Manager;

