

import React from "react";
// style for component
import style from '../style/Component.module.css'

const WeaponryComponent = (props) => {

    return ( 
     
      <div className={style.card_wrapper_weapon}>
        <h1 className={style.agents_h1}>{props.data.displayName}</h1>
        <img className={style.agentsimg} src={props.data.displayIcon}/>
  
  <div className={style.inner_div_component}>
  <p>{`category: ${props.data.category}`}</p>
  </div>

        </div>
     );
}

export default WeaponryComponent;
