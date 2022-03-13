
import React,{useEffect,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import MapComponent from '../components/MapComponent'
import style from '../style/Pages.module.css'

const MapsPage = () => {
    const getReduxDatas = useSelector(state => state.myCounter);
    const [ffdata,setFfdata] = useState(null)
    
        useEffect(() => {
      setFfdata(getReduxDatas.redux_maps.data)
        }, []);
    
    
        return ( 
       <div className={style.pages_wrapper}>
    
    
    
    {ffdata
            ? ffdata.map((news) => (
                <MapComponent data={news} key={news.uuid} />
              ))
            : "Loading"}
    
    
       </div>
        );
    }


export default MapsPage;