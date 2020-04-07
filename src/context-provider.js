//import axios from 'axios';
import AppContext from './context';
import App from './App';
// import { produce } from 'immer';
//import ProductDetail from './ProductDetail'
import React from 'react';
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";

export default class AppProvider extends React.Component {


    constructor(props) {
        super(props)
        this.actions = {
            updateList: this.updateList,
            onRedirectCallback: this.onRedirectCallback
        }

        this.state = {
            categories: {},
            campaigns: {},
            campaignDisplays: {},
        }
    }

    updateList = (result) => {

        if (result !== 'undefined') {
            this.state.campaignDisplays = result;
        }
        else {
            console.log("error in result");
            this.state.campaignDisplays = this.state.campaigns;
        }

    }


    onRedirectCallback = appState => {
        history.push(
            appState && appState.targetUrl
                ? appState.targetUrl
                : window.location.pathname
        );
    };


    render() {
        return (
            <Auth0Provider // this is for authentication purposes
                domain={config.domain}
                client_id={config.clientId}
                redirect_uri={window.location.origin}
                onRedirectCallback={onRedirectCallback}
            >
                <AppContext.Provider value={{ ...this.state, ...this.actions }}>
                    <App />
                </AppContext.Provider>
            </Auth0Provider>,
            document.getElementById("root")
        )
    }

    async componentDidMount() {
        //console.log("hello there!")
        //const resp = await axios.get('/api/category/')
        //const resp2 = await axios.get('/api/campaign/')
        const resp2 = {
            "campaign": [
                {
                    "campaign_id": 4611187,
                    "category": "Sports, Teams & Clubs",
                    "currencycode": "USD",
                    "current_amount": 1500.00,
                    "goal": 1500.00,
                    "days_active": 1758,
                    "title": "Andrew 'The lil Bull' Corona",
                    "description": "My name is Andrew Corona and I'm an ten year old amateur boxer. I've been learning the sport of boxing since I was six years old I started competing at the age of eight. I'm very dedicated to boxing and my academics. I work hard to be an honor student and a National Champion. I hope to inspire kids all around the world to work hard and do what they love as I have been inspired to do. As I continue on this journey I hope to achieve many great accomplishments and continue to be a great role and true inspiration to all those who contiue to follow me and stand by my side on this journey. My next stop is Junior Olympic Nationals in Charleston West Virgina. I would love and appreciate any support I receive as I head out on this journey. I truly appreciate my following and all the love and support from you all! I will make you all proud. -The Lil Bull",
                    "has_beneficiary": false,
                    "user_first_name": "Marlene",
                    "user_last_name": "Reynolds",
                    "status": 0,
                    "deactivated": true,
                    "location_city": "Laveen, AZ",
                    "location_zip": 85339,
                    "location_country": "US",
                    "is_charity": false,
                    "charity_valid": false,
                    "charity_npo_id": "",
                    "charity_name": ""
                },
                {
                    "campaign_id": 39914790,
                    "category": "unknown",
                    "currencycode": "USD",
                    "current_amount": 905.00,
                    "goal": 5000.00,
                    "days_active": 277,
                    "title": "CSU T-shirt for RMC Auction",
                    "description": "Want to join me in making a difference? Colorado State University Meat Science Department is raising money to benefit student activities within the American Meat Science Association (AMSA), specifically to support the Education Foundation. Any donation will help make an impact! AMSA is a leading agricultural organization that is involved in shaping the youth of today into the leaders of tomorrow.   This year, the shirt theme is 'Pioneering the Way'; to support this, our shirt reflects the journey west that pioneers made to establish the state of Colorado and our land-grant institution, CSU. It is a reference to the popular computer game, Oregon Trail. For a donation of only $25 or more, you will receive a shirt as a thank-you gift for your contribution! Shirts will be available at the information booth on the Monfort Quad at CSU on Tuesday of RMC.  Thank you in advance for your contribution to this cause that means so much to myself, CSU and an industry that fights to provide a safe and healthy product from farm to table. More information about American Meat Science Association: AMSA is a broad-reaching organization of individuals that develops and disseminates its collective food and animal science knowledge to provide meat science education and professional development. The AMSA Educational Foundation is a set of endowed funds within AMSA that are used to support educational programs and scholarships for students and scientists in meat science.",
                    "has_beneficiary": false,
                    "user_first_name": "Ashley",
                    "user_last_name": "Kristine Corona",
                    "status": 1,
                    "deactivated": false,
                    "location_city": "Fort Collins, CO",
                    "location_zip": 80525,
                    "location_country": "US",
                    "is_charity": true,
                    "charity_valid": true,
                    "charity_npo_id": "4534",
                    "charity_name": "American Meat Science Association"
                }
            ]
        }
        //console.log("hello there!")
        //console.log(resp2.data)
        console.log("the public_url", resp2)
        //const cats = {}
        /*for (const c of resp.data) {
            cats[c.id] = c

        }*/
        const prods = {}
        let i = 0;
        for (const p of resp2.campaign) {
            prods[p.campaign_id] = p
            i++;
        }
        let cats = ["nothing"];

        this.setState({
            categories: cats,
            campaigns: prods,
        })
    }
}