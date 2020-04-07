import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import * as bs from 'react-bootstrap';
import CAMPAIGNS from './campaigns.js';
//import AppContext from './context'

export default function ProductDetail(props) {
    const match = useRouteMatch("/campaign/:campaign")
    //const context = React.useContext(AppContext)

    //campaign = context.campaigns.campaigns.find(({ campaign_id }) => campaign_id === parseInt(match.params.campaign_id))
    const campaign = CAMPAIGNS[match.params.campaign_id]
    console.log('campaigns ', campaign)
    
    if (!CAMPAIGNS[match.params.campaign_id]) {
        return (
            <bs.Container>
                <h3 className="m-4 text-center">Container not found.</h3>
            </bs.Container>
        )
    }
    else {
        return (
            <bs.Container>
                <bs.Row>
                    <bs.Col md="8" className="my-4">
                        <h3>{campaign.title}</h3>
                        <h4>{campaign.user_first_name + ' ' + campaign.user_last_name}</h4>
                        <p>{campaign.description}</p>
                        <p>Campaign Deactivated: <b>{campaign.deactivated}</b></p>
                    </bs.Col>
                    <bs.Col md="4">
                        <h2>{props.campaign.current_amount + props.campaign.currencycode} out of {props.campaign.goal + props.campaign.currencycode} raised.</h2>
                        <p>This campaign has been active for {props.campaign.days_active} days.</p>
                        <p>Location: {props.campaign.location_city + ' ' + props.campaign.location_country + ' ' + props.campaign.location_zip}</p><br></br>

                    </bs.Col>
                </bs.Row>
                <bs.Row>
                    <h3>Additional Info:</h3>
                    <ul>
                        <li>Are there beneficiaries? {props.campaign.has_beneficiary}</li>
                        <li>Is there a charity linked with this campaign? {props.campaign.is_charity}</li>
                        <li>If so, what is the charity name? {props.campaign.charity_name}</li>
                        <li>Charity valid? {props.campaign.charity_valid}</li>
                    </ul>
                </bs.Row>
            </bs.Container>
        )
    }
}