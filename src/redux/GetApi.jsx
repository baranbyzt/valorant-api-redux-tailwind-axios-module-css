


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

    const [agents,setAgents] = useState(null)
    const [maps,setMaps] = useState(null)
    const [wepons,setWepons] = useState(null)

    const fecthAgents = () => {
      axios
        .get(
          ApiAgents
        )
        .then((response) => setAgents(response.data))
        .catch((error) => console.log(error));
  
       
    }

    const fecthMaps = () => {
      axios
        .get(
          ApiMap
        )
        .then((response) => setMaps(response.data))
        .catch((error) => console.log(error));
  
       
    }

    const fecthWepons = () => {
      axios
        .get(
          ApiWepons
        )
        .then((response) => setWepons(response.data))
        .catch((error) => console.log(error));
  
        
    }


        useEffect(() => {
          
          fecthAgents()
          fecthMaps()
          fecthWepons()
          
           
          dispatch({ 
            type: 'MAPS_ACTİON',
            payload:maps
          }) 
          dispatch({ 
            type: 'AGENTS_ACTİON',
            payload:agents
          })
       
          dispatch({ 
            type: 'WEPONS_ACTİON',
            payload:wepons
          })  
            }, []);

     
            console.log(getReduxDatas)
           

    return ( 
      <App/>
     );
}
 
export default GetApi;

/*
 dispatch({ 
              type: 'MAPS_ACTİON',
              payload:maps
            }) 
            dispatch({ 
              type: 'AGENTS_ACTİON',
              payload:agents
            })
         
            dispatch({ 
              type: 'WEPONS_ACTİON',
              payload:wepons
            })





             fecthAgents()
            fecthMaps()
            fecthWepons()

            
*/