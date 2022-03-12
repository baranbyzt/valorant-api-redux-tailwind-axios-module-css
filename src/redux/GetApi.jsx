
import React, { useEffect, useState } from "react";
import axios from "axios";
import App from "../App";

import { useSelector,useDispatch } from "react-redux";

const ApiAgents = 'https://valorant-api.com/v1/agents/'
const ApiMap = 'https://valorant-api.com/v1/maps'
const ApiWepons = 'https://valorant-api.com/v1/weapons'


const GetApi = () => {

    const getReduxDatas = useSelector(state => state.myCounter);
    const dispatch = useDispatch();


    const fecthAgents = () => {
      axios
        .get(
          ApiAgents
        )
        .then((response) => dispatch({ 
          type: 'AGENTS_ACTİON',
          payload:response.data
        }) )
        .catch((error) => console.log(error));
  
       
    }

    const fecthMaps = () => {
      axios
        .get(
          ApiMap
        )
        .then((response) => 
         dispatch({ 
          type: 'MAPS_ACTİON',
          payload:response.data
        }))
        .catch((error) => console.log(error));
  
       
    }

    const fecthWepons = () => {
      axios
        .get(
          ApiWepons
        )
        .then((response) =>  
          dispatch({ 
          type: 'WEPONS_ACTİON',
          payload:response.data
        }))
        .catch((error) => console.log(error));
  
        
    }


        useEffect( async() => {
          
         await fecthAgents()
         await fecthMaps()
         await fecthWepons()
          
  
            }, []);

   
           

    return ( 
      <App/>
     );
}
 
export default GetApi;


/*

const [agents,setAgents] = useState(null)
    const [maps,setMaps] = useState(null)
    const [wepons,setWepons] = useState(null)
    
*/