import React from 'react'
import * as bs from 'react-bootstrap'
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

function SearchedCampaign(props) {
    
    const context = React.useContext(AppContext);
    let campaigns = []
    //const [charitySort, setCharitySort] = useState(0);
    for (let i = 1; i < (Object.keys(context.campaignDisplays).length) + 1; i++) {
        campaigns.push(context.campaignDisplays[Object.keys(context.campaignDisplays)[i-1]])
    }
    let { category } = useParams();
    let organizedCampaigns = organize(category, campaigns);
    let count = 0;
    return (
        <bs.Container fluid className="p-0">
            <h2 className="my-4 mx-4 text-center">Search Results</h2>
            <bs.Row noGutters style={{ padding: "3rem 0" }}>
                <div className="text-center mt-5">
                    {/* list the objects, but make sure that we don't try and make a card for a campaign that isn't there.  */}
                    {Object.values(organizedCampaigns).map((campaign) => {
                        let md = 12 / campaign.length;
                        return (<bs.ListGroup key={campaign[0] + count++} horizontal>
                            <bs.Col md={md}>
                                <bs.ListGroup.Item sm={3} key={campaign[0].campaign_id}> <CampaignCard campaign={campaign[0]} /> </bs.ListGroup.Item>
                            </bs.Col>
                            {campaign.length > 1 ?
                                (<bs.Col md={md}>
                                    <bs.ListGroup.Item sm={3} key={campaign[1].campaign_id} ><CampaignCard campaign={campaign[1]} /></bs.ListGroup.Item>
                                </bs.Col>) : <bs.Col md="1"></bs.Col>}
                            {campaign.length > 2 ?
                                (<bs.Col md={md}>
                                    <bs.ListGroup.Item sm={3} key={campaign[2].campaign_id} ><CampaignCard campaign={campaign[2]} /></bs.ListGroup.Item>
                                </bs.Col>) : <bs.Col md="1"></bs.Col>}
                            {campaign.length > 3 ?
                                (<bs.Col md={md}>
                                    <bs.ListGroup.Item sm={3} key={campaign[3].campaign_id} ><CampaignCard campaign={campaign[3]} /></bs.ListGroup.Item>
                                </bs.Col>) : <bs.Col md="1"></bs.Col>}
                        </bs.ListGroup>)
                    })}
                </div>
            </bs.Row>
        </bs.Container>
    )

}

export default SearchedCampaign;
