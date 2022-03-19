


import React,{useEffect,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
// component
import WeaponryComponent from '../components/WeaponryComponent'
// we are importing our style file
import style from '../style/Pages.module.css'

const WeaponryPage = () => {
   // It is used to use the data in the global store within the page.
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