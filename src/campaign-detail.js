import React from 'react';
//import { useRouteMatch } from 'react-router-dom';
import * as bs from 'react-bootstrap';
import AppContext from './context'
import {useParams} from "react-router-dom";

export default function ProductDetail(props) {
    //const match = useRouteMatch("/campaign/:campaign")
    const context = React.useContext(AppContext)
    let { campaign } = useParams();

    //campaign = context.campaigns.campaigns.find(({ campaign_id }) => campaign_id === parseInt(match.params.campaign_id)) //CAMPAIGNS[match.params.campaign_id]
    const allCampaigns = context.campaigns
    const unoCampaign = allCampaigns[campaign]
    console.log('The Campaign ',unoCampaign)
    
    //booleans do not show up, so changed it so they will display something
    let beneficiary = unoCampaign.has_beneficiary
    let charity = unoCampaign.is_charity
    let facebook = unoCampaign.auto_fb_post_mode
    let search = unoCampaign.visible_in_search

    if (unoCampaign.has_beneficiary === false){
        beneficiary = 'No'
    } else{
        beneficiary = 'Yes'
    }
    if (unoCampaign.is_charity === false){
        charity = 'No'
    } else{
        charity = 'Yes'
    }
    if (unoCampaign.auto_fb_post_mode === false){
        facebook = 'No'
    } else{
        facebook = 'Yes'
    }
    if (unoCampaign.visible_in_search === false){
        search = 'No'
    } else{
        search = 'Yes'
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
                    </bs.Col>
                    <bs.Col md="4" className="my-4">
                        <h4>{unoCampaign.current_amount +' '+ unoCampaign.currencyCode} out of {unoCampaign.goal +' '+ unoCampaign.currencyCode} raised. {console.log(unoCampaign.currencyCode)}</h4>
                        <p>This campaign has been active for {unoCampaign.days_active} days.</p>
                        <p>Donators: {unoCampaign.donators}</p>
                        <p>Campaign Hearts: {unoCampaign.campaign_hearts}</p>
                        <p>Total Shares on Social Media: {unoCampaign.social_share_total} </p>
                        <p>Campaign URL: {unoCampaign.url} {console.log(unoCampaign.url)}</p>
                    </bs.Col>
                </bs.Row>
                <bs.Row>
                    <bs.Col md='8' className="my-4">
                    <h3>Additional Info:</h3> 
                    <ul>
                        <li>Are there beneficiaries?  <em>{beneficiary}</em></li>
                        <li>Is the creator a charity?  <em>{charity}</em></li>
                        <li>Are updates automatically posted to FaceBook?  <em>{facebook}</em></li>
                        <li>Is it available in search?  <em>{search}</em></li>
                    </ul>
                    </bs.Col>
                </bs.Row>
            </bs.Container>
        )
    }
}