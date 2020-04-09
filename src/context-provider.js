//import axios from 'axios';
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
        //const resp = await axios.get('/api/category/')
        //const resp2 = await axios.get('/api/campaign/')
        const resp2 = {
            "campaign": [
                {
                    "url": "https://www.gofundme.com/f/ut4tx8",
                    "campaign_id": 4611187,
                    "donators": 22,
                    "currencycode": "USD",
                    "current_amount": 1500.00,
                    "goal": 1500.00,
                    "days_active": 1758,
                    "title": "Andrew 'The lil Bull' Corona",
                    "description": "My name is Andrew Corona and I'm an ten year old amateur boxer. I've been learning the sport of boxing since I was six years old I started competing at the age of eight. I'm very dedicated to boxing and my academics. I work hard to be an honor student and a National Champion. I hope to inspire kids all around the world to work hard and do what they love as I have been inspired to do. As I continue on this journey I hope to achieve many great accomplishments and continue to be a great role and true inspiration to all those who contiue to follow me and stand by my side on this journey. My next stop is Junior Olympic Nationals in Charleston West Virgina. I would love and appreciate any support I receive as I head out on this journey. I truly appreciate my following and all the love and support from you all! I will make you all proud. -The Lil Bull",
                    "has_beneficiary": false,
                    "user_first_name": "Marlene",
                    "user_last_name": "Reynolds",
                    "visible_in_search": false,
                    "created_at": "2019-10-19T23:31:21-05:00",
                    "is_charity": false,
                    "campaign_hearts": 18,
                    "social_share_total": 21,
                    "auto_fb_post_mode": false
                },
                {
                    "url": "https://www.gofundme.com/f/CSU-RMC-shirt-auction",
                    "campaign_id": 39914790,
                    "donators": 8,
                    "currencycode": "USD",
                    "current_amount": 905.00,
                    "goal": 5000.00,
                    "days_active": 277,
                    "title": "CSU T-shirt for RMC Auction",
                    "description": "Want to join me in making a difference? Colorado State University Meat Science Department is raising money to benefit student activities within the American Meat Science Association (AMSA), specifically to support the Education Foundation. Any donation will help make an impact! AMSA is a leading agricultural organization that is involved in shaping the youth of today into the leaders of tomorrow.   This year, the shirt theme is 'Pioneering the Way'; to support this, our shirt reflects the journey west that pioneers made to establish the state of Colorado and our land-grant institution, CSU. It is a reference to the popular computer game, Oregon Trail. For a donation of only $25 or more, you will receive a shirt as a thank-you gift for your contribution! Shirts will be available at the information booth on the Monfort Quad at CSU on Tuesday of RMC.  Thank you in advance for your contribution to this cause that means so much to myself, CSU and an industry that fights to provide a safe and healthy product from farm to table. More information about American Meat Science Association: AMSA is a broad-reaching organization of individuals that develops and disseminates its collective food and animal science knowledge to provide meat science education and professional development. The AMSA Educational Foundation is a set of endowed funds within AMSA that are used to support educational programs and scholarships for students and scientists in meat science.",
                    "has_beneficiary": false,
                    "user_first_name": "Ashley",
                    "user_last_name": "Kristine Corona",
                    "visible_in_search": true,
                    "created_at": "2019-06-13T11:34:27-05:00",
                    "is_charity": true,
                    "campaign_hearts": 9,
                    "social_share_total": 32,
                    "auto_fb_post_mode": false
                },
                {
                    "url": "https://www.gofundme.com/f/1p5yn9we5c",
                    "campaign_id": 40688092,
                    "donators": 0,
                    "currencycode": "EUR",
                    "current_amount": 0,
                    "goal": 1000,
                    "days_active": 2,
                    "title": "Anzola-Lontani per essere vicini - COVID19",
                    "description": "  http://www.comune.anzoladellemilia.bo.it/   In un momento importante e difficile come quello che ci sta toccando con il 'Coronavirus' Ã¨ importante sostenerci ed essere vicini, seppur fisicamente lontani perchÃ rispettosi delle norme. Ho pensato a questa raccolta fondi destinata al mio comune: 'Anzola Dell'Emilia'. CiÃ² che verrÃ  raccolto sarÃ  devoluto interamente all'ente, questi a sua volta potrÃ  utilizzare le risorse a sostegno del territorio, delle famiglie, delle aziende ecc... che con difficoltÃ  (e coraggio) affrontano e vivono una realtÃ  mai vista. Siamo piccoli (11.000 abitanti circa) ma non vogliamo cedere e soprattutto non vogliamo gravare su Regione e Governo. Per questi motivi: chi puÃ² e lo desidera DONI, basta poco, il costo di un caffÃ¨ che adesso Ã¨ meglio non uscire a bere. Grazie immensamente a chi mi, /CI, aiuterÃ  in questo progetto. Grazie ancora!!! -Michela",
                    "has_beneficiary": false,
                    "user_first_name": "Michela",
                    "user_last_name": "Ferrari",
                    "visible_in_search": true,
                    "created_at": "2019-07-16T23:34:32-05:00",
                    "is_charity": false,
                    "campaign_hearts": 0,
                    "social_share_total": 0,
                    "auto_fb_post_mode": false
                },
                {
                    "url": "https://www.gofundme.com/f/saving-the-lives-and-support-for-transgender-people",
                    "campaign_id": 34791666,
                    "donators": 27,
                    "currencycode": "USD",
                    "current_amount": 3720,
                    "goal": 25000,
                    "days_active": 479,
                    "title": "COVID-19 Emergency Outreach &Relief Fund for Trans",
                    "description": "$10, $30, $50, $100 Up,     This is a urgent request for your donations   support due to this nation   International  COVID-19  aka coronavirus  Emergency Epidemic, knowing that your donations   support will help save the lives of our most vulnerable Transgender Community.  Our Nonprofit Organization is Strictly dedicated to the Safety, Security, Protection   Well-being of Transgender Individuals, ages 18, 25 , 65   Up. , By Supporting our Nonprofit Organization is saving the lives of the world most vulnerable.  ( Global transgender safety tasks force. USA inc (EIN 36-4910216 ) . your donation will help us respond Quickly in this  COVID-19  epidemic to our most vulnerable Trans youth, Trans Elders,  Trans Young adults  and keep our office doors open. Respectfully: Grace Lawrence. www.globaltrans-safetytasksforce.org",
                    "has_beneficiary": false,
                    "user_first_name": "Grace",
                    "user_last_name": "F Lawrence",
                    "visible_in_search": true,
                    "created_at": "2019-08-17T09:33:35-05:00",
                    "is_charity": false,
                    "campaign_hearts": 15,
                    "social_share_total": 243,
                    "auto_fb_post_mode": false
                },
                {
                    "url": "https://www.gofundme.com/f/dpi-roe-protezionecivile",
                    "campaign_id": 42824334,
                    "donators": 0,
                    "currencycode": "EUR",
                    "current_amount": 0,
                    "goal": 10000,
                    "days_active": 2,
                    "title": "#coronavirus DPi per il ROE Protezione Civile",
                    "description": "Il R.O.E., Raggruppamento Operativo Emergenze Colonna Mobile Nazionale O.n.l.u.s., Ã¨ una struttura operativa del Servizio Nazionale della PROTEZIONE CIVILE che sta fronteggiando, con i suoi 150 operatori volontari, lâ€™emergenza Coronavirus - Covid19 a Roma e nel Lazio attraverso:  Â·Â Â Â Â Â Â Â Â  Presidi presso Stazioni, Porti ed Aeroporti 24 ore su 24;  Â·Â Â Â Â Â Â Â Â  Supporto alle Strutture Ospedaliere con trasporto di materiale sanitario;  Â·Â Â Â Â Â Â Â Â  Fornitura ed allestimento di attrezzatura campale (tende, tensostrutture, lettini) presso gli Ospedali in emergenza.  Per fare tutto questo nel migliore dei modi e in maniera sempre piÃ¹ incisiva Ã¨ necessario raccogliere fondi destinati a:  Â·Â Â Â Â Â Â Â Â  Acquistare i dispositivi di protezione individuale per i propri volontari;  Â·Â Â Â Â Â Â Â Â  Acquistare tende, tensostrutture, effetti letterecci e letti;  Â·Â Â Â Â Â Â Â Â  Acquistare mezzi per il supporto logistico degli Ospedali;  Quello che potrete fare anche con un piccolo gesto Vi renderÃ  parte attiva nellâ€™aiutare, insieme a noi e a tutti gli operatori coinvolti volontari e non, lâ€™Italia ad uscire da questo difficile momento.  Grazie per quello che farete.  Le donazioni saranno certificate e scaricabili sul 730 ed inoltre tutti gli acquisti saranno di volta in volta pubblicati con le relative fatture.",
                    "has_beneficiary": false,
                    "user_first_name": "Roe",
                    "user_last_name": "Protezione Civile",
                    "visible_in_search": true,
                    "created_at": "2019-10-19T23:31:21-05:00",
                    "is_charity": false,
                    "campaign_hearts": 0,
                    "social_share_total": 0,
                    "auto_fb_post_mode": false
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