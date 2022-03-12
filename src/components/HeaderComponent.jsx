


import React from "react";
// we are importing our madule.css files
import style from '../style/HeaderComponent.module.css'
// we are importing our logo img
import img from '../assets/img/logo.png';
// our router library
import { useNavigate } from "react-router-dom";


const HeaderComponent = () => {

    let navigate = useNavigate()

    return ( 
      <div className={style.header_wrapper}>

<ul className={style.menu_ul}>
<div className={style.menu_inner_item_1}>
<p>Valorant Api App</p>
<img className={style.img} src={img}/>
</div>
<div className={style.menu_inner_item_2}>
<li className={style.menu_li} onClick={() => navigate('/weapons')} >weaponry</li>
<li className={style.menu_li} onClick={() => navigate('/agents')}>Agents</li>
<li className={style.menu_li} onClick={() => navigate('/maps')}>Maps</li>
</div>
</ul>

      </div>
     );
}
 
export default HeaderComponent;