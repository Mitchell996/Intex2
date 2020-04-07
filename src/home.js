import React, { useState } from 'react'
import * as bs from 'react-bootstrap'
//import PRODUCTS from './product_images/src/products'
import CampaignCard from './campaign-card'
import { useParams } from 'react-router-dom';
import AppContext from './context';


function organize(name, campaigns) {
    //if it isn't null, then filter out anything not in the category
    if (name != null) {
        campaigns = campaigns.filter((val) => val.category.title === name)
    }

    let campaignHolder = [];
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


function Home(props) {

    const context = React.useContext(AppContext);
    let campaigns = []
    for (let i = 1; i < (Object.keys(context.campaigns).length) + 1; i++) {
        campaigns.push(context.campaigns[i])
    }

    let { category } = useParams();
    //const [sort, setSort] = useState(1);
    let organizedCampaigns = organize(category, campaigns);

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
                                <bs.ListGroup.Item sm={3} key={campaign[0].id} style={{ backgroundColor: "lightblue" }}> <CampaignCard campaign={campaign[0]} /> </bs.ListGroup.Item>
                            </bs.Col>
                            {campaign.length > 1 ?
                                (<bs.Col md="3">
                                    <bs.ListGroup.Item sm={3} key={campaign[1].id} style={{ backgroundColor: "lightblue" }}><CampaignCard campaign={campaign[1]} /></bs.ListGroup.Item>
                                </bs.Col>) : <div></div>}
                            {campaign.length > 2 ?
                                (<bs.Col md="3">
                                    <bs.ListGroup.Item sm={3} key={campaign[2].id} style={{ backgroundColor: "lightblue" }}><CampaignCard campaign={campaign[2]} /></bs.ListGroup.Item>
                                </bs.Col>) : <div></div>}
                            {campaign.length > 3 ?
                                (<bs.Col md="3">
                                    <bs.ListGroup.Item sm={3} key={campaign[3].id} style={{ backgroundColor: "lightblue" }}><CampaignCard campaign={campaign[3]} /></bs.ListGroup.Item>
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

export default Home;

/*
************************
NOTE: So idk if this is easier or more simple or just different, but for the home.js I organized by category and then I called the card from there
Basically this is just another way we could do this if we end up running into errors or something idk
************************
*/

// import React from 'react';
// import * as bs from 'react-bootstrap';
// import './index.scss';

// import CampaignCard from './campaign-card.js';
// import {useParams} from "react-router-dom";
// import AppContext from './context'

// function Home(props){
//     let { category }  = useParams();
//     const context = React.useContext(AppContext)

//     if (category === undefined){
//         return(
//             <>      
//                 <bs.Container fluid >
//                     <bs.Row noGutters style={{padding: "2rem 0"}}>
//                         {(context.campaigns).map((c) => {
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
//                     {context.campaigns.map(c => {

//                         if (c.category === (category)) {
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