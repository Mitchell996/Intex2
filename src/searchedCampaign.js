import React, { useState } from 'react'
import * as bs from 'react-bootstrap'

import CampaignCard from './campaign-card'
import { useParams } from 'react-router-dom';
import AppContext from './context';


function organize(name, campaigns) {
    //if it isn't null, then filter out anything not in the category
    if (name != null) {
        campaigns = campaigns.filter((val) => val.category.title === name)
    }
   /* if(charitySort==1){
        campaigns = campaigns.filter((val) => val.is_charity===1)
    }
    else if(charitySort==2){
        campaigns = campaigns.filter((val) => val.is_charity===2)
    }*/
    let campaignHolder = [];
    console.log("the campaigns:", campaigns);
    //first loop is going through every campaign
    for (let i = 0; i < campaigns.length; i += 4) {
        let fourSlots = [];
        //breaking up the campaigns into groups of 4
        for (let j = i; j < i + 4 && j < campaigns.length; j++) {
            fourSlots.push(campaigns[j]);
        }
        campaignHolder.push(fourSlots);
    }
    return campaignHolder;
}



function SearchedCampaign(props) {
    
    const context = React.useContext(AppContext);
    console.log("hello there", context.campaignDisplays);
    let campaigns = []
    //const [charitySort, setCharitySort] = useState(0);
    console.log("Why is there no context?", context.campaigns);
    for (let i = 1; i < (Object.keys(context.campaignDisplays).length) + 1; i++) {
        campaigns.push(context.campaignDisplays[Object.keys(context.campaignDisplays)[i-1]])
    }
    console.log("what is it? ", campaigns);
    let { category } = useParams();
    
    let organizedCampaigns = organize(category, campaigns);
    console.log("what do we have here?",organizedCampaigns);
    let count = 0;
    return (
        <bs.Container fluid className="p-0">
            <bs.Row noGutters style={{ padding: "6rem 0" }}>

                <div className="text-center mt-5">
                    {/* 
                list the objects, but make sure that we don't try and make a card for 
                a campaign that isn't there.
            */}
                    {Object.values(organizedCampaigns).map((campaign) => {
                        return (<bs.ListGroup key={campaign[0] + count++} horizontal>
                            <bs.Col md="3">
                                <bs.ListGroup.Item sm={3} key={campaign[0].campaign_id}> <CampaignCard campaign={campaign[0]} /> </bs.ListGroup.Item>
                            </bs.Col>
                            {campaign.length > 1 ?
                                (<bs.Col md="3">
                                    <bs.ListGroup.Item sm={3} key={campaign[1].campaign_id} ><CampaignCard campaign={campaign[1]} /></bs.ListGroup.Item>
                                </bs.Col>) : <div></div>}
                            {campaign.length > 2 ?
                                (<bs.Col md="3">
                                    <bs.ListGroup.Item sm={3} key={campaign[2].campaign_id} ><CampaignCard campaign={campaign[2]} /></bs.ListGroup.Item>
                                </bs.Col>) : <div></div>}
                            {campaign.length > 3 ?
                                (<bs.Col md="3">
                                    <bs.ListGroup.Item sm={3} key={campaign[3].campaign_id} ><CampaignCard campaign={campaign[3]} /></bs.ListGroup.Item>
                                </bs.Col>) : <div></div>}
                        </bs.ListGroup>)
                    })}
                </div>

            </bs.Row>
            <bs.Row noGutters style={{ padding: "4rem 0" }} className="bg-info shadow">
                <bs.Col>
                    <p>I am putting stuff here. lolz</p>
                </bs.Col>
            </bs.Row>
        </bs.Container>
    )

}

export default SearchedCampaign;

/*
************************
NOTE: So idk if this is easier or more simple or just different, but for the home.js I organized by category and then I called the card from there
Basically this is just another way we could do this if we end up running into errors or something idk
************************
*/

// import React from 'react';
// import * as bs from 'react-bootstrap';
// import './index.scss';
// import CAMPAIGNS from './campaigns'
// import CampaignCard from './campaign-card.js';
// import {useParams} from "react-router-dom";
// //import AppContext from './context'

// function Home(props){
//     let { category }  = useParams();
//     console.log('Category:',category);
//     //const context = React.useContext(AppContext)

//     if (category === undefined){
//         return(
//             <>      
//                 <bs.Container fluid >
//                     <bs.Row noGutters style={{padding: "2rem 0"}}>
//                         {Object.values(CAMPAIGNS).map((c) => {
//                             return (
//                                 <CampaignCard campaign={c} key={c.campaign_id}/> 
//                             ) 
//                         })} 
//                     </bs.Row>
//                 </bs.Container>
//             </>
//         ) 
//     }
//     else {
//         return(
//             <bs.Container>
//                 <bs.Row noGutters style={{padding: "2rem 0"}}>
//                     {Object.values(CAMPAIGNS).map(c => {

//                         if (c.category === parseInt(category)) {
//                             return (
//                                 <CampaignCard campaign={c} key={c.campaign_id}/>
//                             )
//                         }
//                         else{
//                             return(null)
//                         }
//                     })} 
//                 </bs.Row>
//             </bs.Container>
//         )
//     } 
// }

// export default Home;