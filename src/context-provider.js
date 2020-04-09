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
        }

        this.state = {
            categories: {},
            campaigns: {},
            campaignDisplays: {},
        }
    }

    searchResults = (values) => {
        console.log("in searchResults: ", this.state.campaignDisplays);
        //this.state.campaignDisplays = {};
        let searchedCampaigns = {};
        Object.values(this.state.campaigns).map((camps) => {
            let use = true;
            if (values.title !== null && camps.title !== values.title) {
                use = false;
            }
            if (values.campaign_id !== null && camps.campaign_id !== values.campaign_id) {
                use = false;
            }
            if (values.user_first_name !== null && camps.user_first_name !== values.user_first_name) {
                use = false;
            }
            if (values.user_last_name !== null && camps.user_last_name !== values.user_last_name) {
                use = false;
            }
            if (values.goal !== null) {
                if (values.goal === 1000 && camps.goal > 1000) {
                    use = false;
                }
                else if (values.goal === 10000 && (camps.goal < 1000 || camps.goal > 10000)) {
                    use = false;
                }
                else if (values.goal === 10001 && camps.goal < 10001) {
                    use = false;
                }
            }
            if (values.donations !== null) {
                if (values.donations === 1000 && camps.current_amount > 1000) {
                    use = false;
                }
                else if (values.donations === 10000 && (camps.current_amount < 1000 || camps.current_amount > 10000)) {
                    use = false;
                }
                else if (values.donations === 10001 && camps.current_amount < 10001) {
                    use = false;
                }
            }
            if (values.donators !== null) {
                if (values.donators === 10 && camps.donators > 10) {
                    use = false;
                }
                else if (values.donators === 50 && (camps.donators < 10 || camps.current_amount > 50)) {
                    use = false;
                }
                else if (values.donators === 51 && camps.donators < 51) {
                    use = false;
                }
            }
            if (values.beneficiary !== null) {
                if (values.beneficiary === true && camps.has_beneficiary === false) {
                    use = false;
                }
                else if (values.beneficiary === false && camps.has_beneficiary === true) {
                    use = false;
                }

            }
            if (use === true) {
                console.log("it happened!")
                let id = camps.campaign_id
                searchedCampaigns[id] = camps;
                //this.state.campaignDisplays[id]= camps;
            }


        })
        console.log("what remains", this.state.campaignDisplays);
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
        
        console.log("hello there!", resp)
        console.log("resp2 data",resp2.data)
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