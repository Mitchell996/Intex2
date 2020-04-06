import axios from 'axios'
import AppContext from './context'
import App from './App'
import {produce} from 'immer'
//import ProductDetail from './ProductDetail'


export default class AppProvider extends React.Component{


    constructor(props){
        super(props)
        this.actions= {

        }
    this.actions = {
        addToCart: this.addToCart,
        removeFromCart: this.removeFromCart,
        getCartTotal: this.getCartTotal,
        updateList: this.updateList,
    }   

        this.state= {
            categories:{},
            campaigns:{},
            campaignDisplays:{},
            cart: {},
            numInCart: 0,
        }
    }

    updateList=(result)=> {

        if(result != 'undefined'){
            this.state.campaignDisplays = result;
        }
        else{
            console.log("error in result");
            this.state.campaignDisplays = campaigns;
        }

    }

    



    render(){
        return(
            <AppContext.Provider value={{...this.state, ...this.actions}}>
                <App />
            </AppContext.Provider>
        )
    }

    async componentDidMount(){
        //console.log("hello there!")
        const resp = await axios.get('/api/category/')
        const resp2 = await axios.get('/api/campaign/')
        //console.log("hello there!")
        //console.log(resp2.data)
        console.log("the public_url",process.env.PUBLIC_URL)
        const cats= {}
        for (const c of resp.data){
            cats[c.id] = c

        }
        const prods = {}
        for(const p of resp2.data){
            prods[p.id] = p
        }

        this.setState({
            categories: cats,
            campaigns: prods,
        })
    }
}