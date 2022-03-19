
import React,{useEffect} from "react";
// we are importing our Component.madule.css files
import style from '../style/Component.module.css'

const MapComponent = (props) => {
 
    return ( 
        <div className={style.card_wrappermap}>
  
        <h1 className={style.agents_h1}>{props.data.displayName}</h1>
        <img className={style.agentsimgmap} src={props.data.splash}/>
        <img className={style.agentsimgmap} src={props.data.displayIcon}/>
  <p className={style.agents_p}>{props.data.description}</p>
    
        </div>
       );
  }
 
export default MapComponent;