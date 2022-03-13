
import React,{useEffect,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import AgentsComponent from "../components/AgentsComponent";
import style from '../style/Pages.module.css'

const AgentsPage = () => {
    const getReduxDatas = useSelector(state => state.myCounter);
const [ffdata,setFfdata] = useState(null)



    useEffect(() => {
  setFfdata(getReduxDatas.redux_agents.data)
    }, []);


    return ( 
   <div className={style.pages_wrapper}>



{ffdata
        ? ffdata.map((news) => (
            <AgentsComponent data={news} key={news.uuid} />
          ))
        : "Loading"}


   </div>
    );
}
 
export default AgentsPage;

/*




*/