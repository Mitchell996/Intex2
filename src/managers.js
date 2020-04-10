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
                    How are we going to display the highest and lowest quality campaigns here????
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <bs.Button onClick={() => setShow(false)} variant="outline-success">
                        Dismiss
            </bs.Button>
                </div>
                <bs.Button onClick={() => {
                 context.QualityCampaigns("high")
                history.push("/searchedCampaign")
                history.go(1)}} >
                        View High quality Campaigns
            </bs.Button>
            <bs.Button onClick={ () => {
                 context.QualityCampaigns("low")
                history.push("/searchedCampaign")
                history.go(1)}} >
                        View Low Quality Campaigns
            </bs.Button>
            <bs.Button onClick={ () => {
                 context.QualityCampaigns("none")
                history.push("/searchedCampaign")
                history.go(1)}} >
                        View all
            </bs.Button>

            </bs.Alert>

            {!show && <bs.Button className='my-4 mx-4' onClick={() => setShow(true)}>Show Prediction</bs.Button>}
        </>
    )
}
export default Manager;

