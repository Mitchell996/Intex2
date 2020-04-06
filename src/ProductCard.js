import React from 'react'
import * as bs from 'react-bootstrap'
import {BrowserRouter as  Route,Link } from "react-router-dom"

function ProductCard(product){
  let name = product.product.name.replace(" ", '_');
  let lower = name.toLowerCase()
return(
  <bs.Card style={{ width: '10rem', backgroundColor: "gray" }}>
 
    <bs.Card.Link href={"/product/" +product.product.id}  style = {{position: "absolute", top: "0px", right: "3px"}}>Detail</bs.Card.Link>
  <Route></Route>
  <bs.Card.Body>
    <bs.Card.Title>{product.product.name}</bs.Card.Title>
    <bs.Card.Text>
      {product.product.price}
    </bs.Card.Text>
    <Link className="btn btn-primary" to={"/campaign/"+product.product.id}>
    {/*<bs.Button variant="primary">Check it out</bs.Button>*/}
    check it out
    </Link>
    
  </bs.Card.Body>
</bs.Card>
  

)
}

export default ProductCard;