
import React,{useEffect,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
// our component
import MapComponent from '../components/MapComponent'
// our style file
import style from '../style/Pages.module.css'

const MapsPage = () => {
   // It is used to use the data in the global store within the page.
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