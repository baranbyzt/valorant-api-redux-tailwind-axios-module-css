

import React from "react";
// style file
import style from '../style/Component.module.css'

const AgentsComponent = (props) => {
    return ( 
      <div className={style.card_wrapper}>

      <h1 className={style.agents_h1}>{props.data.displayName}</h1>
      <img className={style.agentsimg} src={props.data.displayIcon}/>
<p className={style.agents_p}>{props.data.description}</p>
  
      </div>
     );
}
 
export default AgentsComponent;

