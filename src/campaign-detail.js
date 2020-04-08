import React from 'react';
//import { useRouteMatch } from 'react-router-dom';
import * as bs from 'react-bootstrap';
//import CAMPAIGNS from './campaigns.js';
import AppContext from './context'
import {useParams} from "react-router-dom";

export default function ProductDetail(props) {
    //const match = useRouteMatch("/campaign/:campaign")
    const context = React.useContext(AppContext)
    let { campaign } = useParams();

    //campaign = context.campaigns.campaigns.find(({ campaign_id }) => campaign_id === parseInt(match.params.campaign_id)) //CAMPAIGNS[match.params.campaign_id]
    const allCampaigns = context.campaigns
    const unoCampaign = allCampaigns[campaign]
    
    //booleans do not show up, so changed it so they will display something
    let deactivate = unoCampaign.deactivated 
    let beneficiary = unoCampaign.has_beneficiary
    let charity = unoCampaign.is_charity
    let name = unoCampaign.charity_name
    let valid = unoCampaign.charity_valid

    if (unoCampaign.deactivated === false){
        deactivate = 'Campaign is active';
    }
    else {
        deactivate = 'Campaign is not active';
    }

    if (unoCampaign.has_beneficiary === false){
        beneficiary = 'No'
    } else{
        beneficiary = 'Yes'
    }
    if (unoCampaign.is_charity === false){
        charity = 'No'
        name = 'Not applicable'
    } else{
        charity = 'Yes'
        name = unoCampaign.charity_name
    }
    if (unoCampaign.charity_valid === false){
        valid = 'Not a valid charity'
    } else{
        valid = 'Yes'
    }
    
    if (!allCampaigns[campaign]) {
        return (
            <bs.Container>
                <h3 className="m-4 text-center">Campaign not found.</h3>
            </bs.Container>
        )
    }
    else {
        return (
            <bs.Container>
                <bs.Row>
                    <bs.Col md="8" className="my-4">
                        <h3>{unoCampaign.title}</h3>
                        <h6>Posted by {unoCampaign.user_first_name + ' ' + unoCampaign.user_last_name}</h6>
                        <p>{unoCampaign.description}</p>
                        <p>Campaign Status: <b>{deactivate}</b></p>
                    </bs.Col>
                    <bs.Col md="4" className="my-4">
                        <h4>{unoCampaign.current_amount +' '+ unoCampaign.currencycode} out of {unoCampaign.goal +' '+ unoCampaign.currencycode} raised.</h4>
                        <p>This campaign has been active for {unoCampaign.days_active} days.</p>
                        <p>Location: {unoCampaign.location_city + '  ' + unoCampaign.location_country + '  ' + unoCampaign.location_zip}</p><br></br>

                    </bs.Col>
                </bs.Row>
                <bs.Row>
                    <bs.Col md='8' className="my-4">
                    <h3>Additional Info:</h3> 
                    <ul>
                        <li>Are there beneficiaries?  <em>{beneficiary}</em></li>
                        <li>Is the creator a charity?  <em>{charity}</em></li>
                        <li>What is the charity name?  <em>{name}</em></li>
                        <li>Is the charity valid?  <em>{valid}</em></li>
                    </ul>
                    </bs.Col>
                </bs.Row>
            </bs.Container>
        )
    }
}