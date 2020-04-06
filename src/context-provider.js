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
    }   

        this.state= {
            categories:{},
            products:{},
            cart: {},
            numInCart: 0,
        }
    }

    addToCart =(pid) => {
        //get current quantity from this.state.cart
        //set the new cart
        //const qty = this.state.cart[pid]
        this.setState(state => produce(state, draft=>{
            const qty = draft.cart[pid]
            if (!qty) {
                draft.cart[pid] = 0
            }
            draft.cart[pid]++;
            draft.numInCart++;
        }
            
        ))
    }

    getCartTotal=() =>{  
            let cartTotal = 0
            for (let key in this.state.cart){
                let product = this.state.products[key];
                let number = this.state.cart[key];
                cartTotal += product.price * number;
            }
            return cartTotal;
    }

    clearCart=() =>{
        this.setState(state => produce(state, draft=>{
            draft.cart = {};
            draft.numInCart = 0;
        }))
        

    }

    removeFromCart=(pid) =>{

        //const qty = this.state.cart[pid]
        this.setState(state => produce(state, draft=>{
            const qty = draft.cart[pid]
            draft.cart[pid] = undefined
            delete draft.cart[pid];
            draft.numInCart -= qty;
        }))
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
        const resp2 = await axios.get('/api/product/')
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
            products: prods,
        })
    }
}