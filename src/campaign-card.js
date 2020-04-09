import React from 'react';
import * as bs from 'react-bootstrap';
import { Link } from "react-router-dom";

function CampaignCard(campaign) {

  return (
    <bs.Card>
      <bs.Card.Header>ID: {campaign.campaign.campaign_id}</bs.Card.Header>
      <bs.Card.Body>
        <bs.Card.Title>{campaign.campaign.title}</bs.Card.Title>
        <bs.Card.Text>
          {campaign.campaign.current_amount} / {campaign.campaign.goal} {campaign.campaign.currencycode} raised
        </bs.Card.Text>
        <Link className="btn btn-primary" to={"/campaign/" + campaign.campaign.campaign_id} key={campaign.campaign.campaign_id}>
          View
        </Link>
      </bs.Card.Body>
    </bs.Card>
  )
}

export default CampaignCard;
