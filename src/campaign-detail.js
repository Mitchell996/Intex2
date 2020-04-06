import React, { useState } from 'react';

import { useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import * as bs from 'react-bootstrap';
import AppContext from './context'

// export default function ProductDetail(props) {
//     const match = useRouteMatch("/product/:id")
//     const context = React.useContext(AppContext)

//     const product = context.products.find(({ id }) => id === parseInt(match.params.id))
    
//     const [num, setImg] = useState('-1')

//     const history = useHistory()

//     if (product == null) {
//         return (
//             <bs.Container>
//                 Item not found.
//             </bs.Container>
//         )
//     }
//     else {
//         return (
//             <bs.Container>
//                 <bs.Row>
//                     <bs.Col md="8" className="my-4">
//                         <h2>{product.name}</h2>
//                         <h4>${product.price}</h4>
//                         <p>{product.description}</p>
//                         <br></br>
//                         <bs.Button 
//                             to={"/cart"}
//                             variant="primary" 
//                             onClick={e => {
//                                 context.addToCart(match.params.id)
//                                 history.push("/cart")
//                             }}>
//                                 Add to Cart
//                         </bs.Button>
//                     </bs.Col>
//                     <bs.Col md="4">
//                         <bs.Image
//                             src={"/products/" + product.filename + num + ".png"}
//                             className="border float-right my-4"
//                             style={{ width: "300px", height: "300px" }}>
//                         </bs.Image>
//                         <bs.Image
//                             src={"/products/" + product.filename + "-1.png"}
//                             className="border my-1"
//                             style={{ width: "30px", height: "30px" }}
//                             onMouseEnter={() => setImg('-1')}>
//                         </bs.Image>
//                         <bs.Image
//                             src={"/products/" + product.filename + "-2.png"}
//                             className="border my-1 mx-2"
//                             style={{ width: "30px", height: "30px" }}
//                             onMouseEnter={() => setImg('-2')}>
//                         </bs.Image>
//                         <bs.Image
//                             src={"/products/" + product.filename + "-3.png"}
//                             className="border my-1"
//                             style={{ width: "30px", height: "30px" }}
//                             onMouseEnter={() => setImg('-3')}>
//                         </bs.Image>
//                         <bs.Image
//                             src={"/products/" + product.filename + "-4.png"}
//                             className="border my-1 mx-2"
//                             style={{ width: "30px", height: "30px" }}
//                             onMouseEnter={() => setImg('-4')}>
//                         </bs.Image>
//                     </bs.Col>
//                 </bs.Row>
//                 <bs.Row>

//                 </bs.Row>
//             </bs.Container>
//         )
//     }
// }