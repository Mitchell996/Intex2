import React from 'react'
import * as bs from 'react-bootstrap'
import { BrowserRouter as Route, Link } from "react-router-dom"

function CampaignCard(campaign) {
  let name = campaign.campaign.name.replace(" ", '_');
  //let lower = name.toLowerCase()
  return (
    <bs.Card style={{ width: '10rem', backgroundColor: "gray" }}>

      <bs.Card.Link href={"/campaign/" + campaign.campaign.id} style={{ position: "absolute", top: "0px", right: "3px" }}>Detail</bs.Card.Link>
      <Route></Route>
      <bs.Card.Body>
        <bs.Card.Title>{campaign.campaign.title}</bs.Card.Title>
        <bs.Card.Text>
          {campaign.campaign.current_amount}/{campaign.campaign.goal}
        </bs.Card.Text>
        <Link className="btn btn-primary" to={"/campaign/" + campaign.campaign.campaign_id}>
          {/*<bs.Button variant="primary">Check it out</bs.Button>*/}
    
    </Link>

      </bs.Card.Body>
    </bs.Card>


  )
}

export default CampaignCard;