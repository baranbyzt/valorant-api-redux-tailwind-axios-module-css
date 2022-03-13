


import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import WeaponryComponent from '../components/WeaponryComponent'
import style from '../style/Pages.module.css'

const WeaponryPage = () => {
  const getReduxDatas = useSelector(state => state.myCounter);

    return(
      <div className={style.pages_wrapper}>
        <WeaponryComponent/>
      </div>
    )
}

export default WeaponryPage