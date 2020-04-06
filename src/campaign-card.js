import React from 'react';
import * as bs from 'react-bootstrap';
import { Route, Link } from "react-router-dom";
//import CAMPAIGNS from './campaigns.js';

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

/* 
*****************
Not sure if this way is easier or not, but I created the card like this (below) and then in the home.js this is called to create the cards. 
*****************
*/

// export default function CampaignCard(props) {
//   return (
//     Object.values(CAMPAIGNS).map(campaign => {
//       return (
//         <bs.Col md="3" className="my-2">
//           <bs.Card>
//             {/* <bs.Card.Img variant="top" key={campaign.campaign_id} src={""} />    FIGURE OUT HOW TO GET PHOTO_URL ON HERE*/}
//             <bs.Card.ImgOverlay>
//               <Link
//                 to={"/campaign/" + campaign.campaign_id}
//                 className="btn btn-dark"
//                 key={campaign.campaign_id}
//                 style={{ position: "absolute", top: "5px", right: "5px", backgroundColor: "rgba(0,0,0,.8)" }}>
//                 Details
//               </Link>
//             </bs.Card.ImgOverlay>
//             <bs.Card.Body>
//               <bs.Card.Title>{campaign.title}</bs.Card.Title>
//               <bs.Card.Text>
//               {campaign.current_amount + campaign.currencycode} out of {campaign.goal + campaign.currencycode} raised.
//               </bs.Card.Text>
//             </bs.Card.Body>
//           </bs.Card>
//         </bs.Col>
//       )
//     })
//   )
// }