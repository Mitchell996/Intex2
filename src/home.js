import React, {/* useState */} from 'react'
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

function Home(props) {

    const context = React.useContext(AppContext);
    let campaigns = []
    //const [charitySort, setCharitySort] = useState(0);
    console.log("Why is there no context?", context.campaigns);
    for (let i = 1; i < (Object.keys(context.campaigns).length) + 1; i++) {
        campaigns.push(context.campaigns[Object.keys(context.campaigns)[i - 1]])
    }
    console.log("what is it? ", campaigns);
    let { category } = useParams();

    let organizedCampaigns = organize(category, campaigns);
    console.log("what do we have here?", organizedCampaigns);
    let count = 0;
    return (
        <bs.Container fluid className="p-0">
            <h2 className="my-4 text-center">Campaigns</h2>
            <bs.Row noGutters style={{ padding: "3rem 0" }}>

            <div>
                {/* list the objects, but make sure that we don't try and make a card for a campaign that isn't there.  */}
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

export default Home;
