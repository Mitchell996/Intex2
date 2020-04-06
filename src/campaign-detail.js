import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import * as bs from 'react-bootstrap';
import CAMPAIGNS from './campaigns.js';

export default function ProductDetail(props) {
    const match = useRouteMatch("/campaign/:campaign")
    //const context = React.useContext(AppContext)

    //when add the context, change campaign to = context.campaigns.find(({ campaign_id }) => campaign_id === parseInt(match.params.campaign_id))
    const campaign = CAMPAIGNS[match.params.campaign_id]

    //when add the context, change this parenthesis to (campaign == null)
    if (!CAMPAIGNS[match.params.campaign_id]) {
        return (
            <bs.Container>
                Campaign not found.
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
                        <h2>{campaign.current_amount + campaign.currencycode} out of {campaign.goal + campaign.currencycode} raised.</h2>
                        <p>This campaign has been active for {campaign.days_active} days.</p>
                        <p>Location: {campaign.location_city + ' ' + campaign.location_country + ' ' + campaign.location_zip}</p><br></br>

                    </bs.Col>
                </bs.Row>
                <bs.Row>
                    <h3>Additional Info:</h3>
                    <ul>
                        <li>Are there beneficiaries? {campaign.has_beneficiary}</li>
                        <li>Is there a charity linked with this campaign? {campaign.is_charity}</li>
                        <li>If so, what is the charity name? {campaign.charity_name}</li>
                        <li>Charity valid? {campaign.charity_valid}</li>
                    </ul>
                </bs.Row>
            </bs.Container>
        )
    }
}