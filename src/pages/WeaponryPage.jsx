


import React,{useEffect,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import WeaponryComponent from '../components/WeaponryComponent'
import style from '../style/Pages.module.css'

const WeaponryPage = () => {
  const getReduxDatas = useSelector(state => state.myCounter);
  const [ffdata,setFfdata] = useState(null)
  
      useEffect(() => {
    setFfdata(getReduxDatas.redux_wepons.data)
      }, []);
  
  
      return ( 
     <div className={style.pages_wrapper}>
  
  
  
  {ffdata
          ? ffdata.map((news) => (
              <WeaponryComponent data={news} key={news.uuid} />
            ))
          : "Loading"}
  
  
     </div>
      );
}

export default WeaponryPage