import React from 'react';
import './App.scss';
import * as bs from 'react-bootstrap'
import {BrowserRouter as Route, Link } from "react-router-dom"

import AppContext from './context';
//import { Container } from 'react-bootstrap/lib/Tab';





function countCategories(pc){
  
   let categoryDictionary = {}
   categoryDictionary["total"] = 0;
   for (let p of pc){
       categoryDictionary[p] = (categoryDictionary[p] || 0) +1
       categoryDictionary["total"]++;
   }
  
   return categoryDictionary;
}

//here I think there's a few things besides categories we want to do: namely, 
//is it a charity?  money thresholds?  goal ranges?  I can do all this front end but
//let's see how much we can do here
function LeftContainer(props){
    const context = React.useContext(AppContext);
    

    let categories = [];
    console.log("the categories: ", context)
    
   
    
    categories.push("Sunday")
    categories.push("Monday")
    categories.push("Tuesday")
    categories.push("Wednesday")
    categories.push("Thursday")
    categories.push("Friday")
    categories.push("Saturday")
    
    //let campaignDays = []
    //let length =(Object.keys(context.campaigns).length)+1
    /*for(let i = 1; i < length; i++ )
    {
        campaignDays.push(context.campaigns[i].weekdays.day)
    }*/
   //campaignDays.push("")
    //let weekdayNum = countCategories(campaignDays);
    return(
        
        <bs.Container>
            <Route></Route>
            <h1> Filters</h1>
            <bs.Nav key="Nav1">
                <li key="Home#"><Link to={"/home"}>{"No Filter"} </Link></li>
                </bs.Nav>
            {
                
                Object.values(categories).map((weekday) =>
                {
                    return(
                      <bs.Nav key={"Nav" + weekday}>
                    <li key={weekday}><Link to={"/home/weekdays/" + weekday}>{weekday}</Link></li>
                    </bs.Nav>
                    )
                })
                
            }
        </bs.Container>
    )
   
}
export default LeftContainer;