
import React,{useEffect,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
// our component
import AgentsComponent from "../components/AgentsComponent";
// our style file
import style from '../style/Pages.module.css'

const AgentsPage = () => {
  // It is used to use the data in the global store within the page.
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