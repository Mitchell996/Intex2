import axios from 'axios';
import AppContext from './context';
import App from './App';
// import { produce } from 'immer';
//import ProductDetail from './ProductDetail'
import React from 'react';

export default class AppProvider extends React.Component {


    constructor(props) {
        super(props)
        this.actions = {

        }
        this.actions = {
            updateList: this.updateList,
            searchResults: this.searchResults,
            QualityCampaigns: this.QualityCampaigns,
        }

        this.state = {
            categories: {},
            campaigns: {},
            campaignDisplays: {},
            currentEstimate: 0,
        }
    }

    QualityCampaigns = (type) => {
        let highQuality = {};
        let lowQuality = {};
        let final = {};
        
        Object.values(this.state.campaigns).map((camps) => {
            let id = camps.campaign_id
            let days = parseInt(camps.days_active, 10);
            let current_amount = parseInt(camps.current_amount, 10);
            let goal = parseInt(camps.goal);
            let percentComplete = current_amount/goal;
            if(days < 100 && percentComplete > .74)
            {
                
                //searchedCampaigns[id] = camps;
                highQuality[id] =(camps);
            }
            else if(days > 200 && percentComplete < .51)
            {
                lowQuality[id] =(camps);
            }



        })
        if(type == "low"){
            final = lowQuality;
        }
        else if(type=="high"){
            final = highQuality;
        }
        else{
            final = this.state.campaigns;
        }
        this.setState({
            campaignDisplays:final
        });


    }


    searchResults = (values) => {

        //this.state.campaignDisplays = {};
        let searchedCampaigns = {};

        
        Object.values(this.state.campaigns).map((camps) => {
            
            let use = true;
            let goal = parseInt(camps.goal, 10);
            let donations = parseInt(camps.current_amount, 10);
            let donators = parseInt(camps.donators, 10);

            if (values.title !== undefined&&values.title!=="" && !camps.title.includes(values.title)) {
                use = false;
            }
            if (values.campaign_id !== undefined &&values.campaign_id!==""&& camps.campaign_id !== values.campaign_id) {
                //console.log("in campaign", use)
                use = false;
            }
            if (values.user_first_name !== undefined && values.user_first_name!=="" && !camps.user_first_name.includes(values.user_first_name)) {
                //console.log("first", use)
                use = false;
            }
            if (values.user_last_name !== undefined && values.user_first_name!=="" && !camps.user_last_name.includes(values.user_last_name)) {
                //console.log("last", use)
                use = false;
            }
            if (values.goal !== null&&values.goal !== undefined) {
                //console.log("goal", use)
                if (values.goal === 1000 && goal > 1000) {
                    use = false;
                }
                else if (values.goal === 10000 && (goal < 1000 || goal > 10000)) {
                    use = false;
                }
                else if (values.goal === 10001 && goal < 10001) {
                    use = false;
                }
            }
            if (values.donations !== null&& values.donations !== undefined) {
                //console.log("donations", use)
                if (values.donations === 1000 && donations > 1000) {
                    use = false;
                }
                else if (values.donations === 10000 && (donations < 1000 || donations > 10000)) {
                    use = false;
                }
                else if (values.donations === 10001 && donations < 10001) {
                    use = false;
                }
            }
            if (values.donators !== null&& values.donators !== undefined) {
                //console.log("donators", use)
                if (values.donators === 10 && donators > 10) {
                    use = false;
                }
                else if (values.donators === 50 && (donators < 10 || donators > 50)) {
                    use = false;
                }
                else if (values.donators === 51 && donators < 51) {
                    use = false;
                }
            }
            if (values.beneficiary !== null&& values.beneficiary !== undefined) {
                //console.log("beneficiary", use)
                if (values.beneficiary === true && camps.has_beneficiary === "FALSE") {
                    use = false;
                }
                else if (values.beneficiary === false && camps.has_beneficiary === "TRUE") {
                    use = false;
                }

            }
            if (values.charity !== null&&values.charity !== undefined ) {
                //console.log("charity", use)
                if (values.charity === true && camps.is_charity === "FALSE") {
                    use = false;
                }
                else if (values.charity === false && camps.is_charity === "TRUE") {
                    use = false;
                }

            }
            if(values.weekday !== null&&values.weekday!==undefined){
                if(camps.weekday.day !== values.weekday){
                    use = false;
                }

            }
            if (use === true) {
                //console.log("it happened!")
                let id = camps.campaign_id
                searchedCampaigns[id] = camps;
                //this.state.campaignDisplays[id]= camps;
            }


        })
        //console.log("what remains", this.state.campaignDisplays);
        this.setState({
            campaignDisplays: searchedCampaigns
        })
            
    }



    render() {
        return (
            <AppContext.Provider value={{ ...this.state, ...this.actions }}>
                <App />
            </AppContext.Provider>
        )
    }

    async componentDidMount() {
        //console.log("hello there!")
        const resp = await axios.get('http://127.0.0.1:8000/api/weekday/')
        const resp2 = await axios.get('http://127.0.0.1:8000/api/campaign/')
        
        //console.log("the public_url", resp2)
        const cats = {}
        for (const c of resp.data) {
            cats[c.id] = c

        }
        const prods = {}
        //let i = 0;
        for (const p of resp2.data) {
            prods[p.campaign_id] = p
            //i++;
        }
        

        this.setState({
            weekdays: cats,
            campaigns: prods,
        })
    }
}
