import React from 'react'
import * as bs from 'react-bootstrap'
//import PRODUCTS from './product_images/src/products'
import ProductCard from './ProductCard'
import { useParams } from 'react-router-dom';
import AppContext from './context';


function organize(name, products){
    //let products = Object.values(PRODUCTS);
    //if it isn't null, then filter out anything not in the category
    if(name != null){
        products = products.filter((val)=> val.category.title === name)
    }

    let productHolder = [];
    //first loop is going through every product
    for(let i = 0; i < products.length; i+=4){
        let fourSlots = [];
        //breaking up the products into groups of 4
        for(let j = i; j < i+4 && j <products.length; j++){
            fourSlots.push(products[j]);
        }
        productHolder.push(fourSlots);
    }
    return productHolder;
}


function Home(props){
    
    const context = React.useContext(AppContext);
    let products = []
    for(let i = 1; i < (Object.keys(context.products).length) +1; i++){
        products.push(context.products[i])
    }
    
    let{category} = useParams();
    const [sort, setSort] = useState(1);
   let organizedProducts = organize(category, products);

   let count = 0;
return(
    <bs.Container fluid className="p-0">
        <bs.Row noGutters style={{ padding: "6rem 0"}}>
            
            <div className="text-center mt-5">
            {/* 
                list the objects, but make sure that we don't try and make a card for 
                a product that isn't there.
            */}
            {Object.values(organizedProducts).map((product) => {
                return(<bs.ListGroup  key={product[0]+count++}  horizontal>
                  <bs.Col md="3">
                    <bs.ListGroup.Item sm={3} key={product[0].id} style={{ backgroundColor: "lightblue"}}> <ProductCard product={product[0]}/> </bs.ListGroup.Item>
                    </bs.Col>
                    {product.length > 1?
                    (<bs.Col md="3">
                    <bs.ListGroup.Item sm={3} key={product[1].id} style={{ backgroundColor: "lightblue"}}><ProductCard product={product[1]}/></bs.ListGroup.Item>
                    </bs.Col>):<div></div>}
                    {product.length >2?
                    (<bs.Col md="3">
                    <bs.ListGroup.Item sm={3} key={product[2].id} style={{ backgroundColor: "lightblue"}}><ProductCard product={product[2]}/></bs.ListGroup.Item>
                    </bs.Col>):<div></div>}
                    {product.length >3?
                    (<bs.Col md="3">
                        <bs.ListGroup.Item sm={3} key={product[3].id} style={{ backgroundColor: "lightblue"}}><ProductCard product={product[3]}/></bs.ListGroup.Item>
                    </bs.Col>):<div></div>}
                  </bs.ListGroup>)})}
            </div>
                


           
        </bs.Row>
        <bs.Row noGutters style={{ padding: "4rem 0"}} className="bg-info shadow">
            <bs.Col>
                <p>I am putting stuff here. lolz</p>
            </bs.Col>
        </bs.Row>
    </bs.Container>
)

}

export default Home;