

import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import MapComponent from '../components/MapComponent'
import style from '../style/Pages.module.css'

const MapsPage = () => {
    const getReduxDatas = useSelector(state => state.myCounter);
    
    return(
<div className={style.pages_wrapper}>
    <MapComponent/>
</div>
    )
}


export default MapsPage;