
import React,{useEffect,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import AgentsComponent from "../components/AgentsComponent";
import style from '../style/Pages.module.css'

const AgentsPage = () => {
    const getReduxDatas = useSelector(state => state.myCounter);
const [ffdata,setFfdata] = useState(null)

    useEffect(() => {
    
     // setFfdata(getReduxDatas.redux_agents)
      
    }, []);

 // console.log(ffdata.data)

    return ( 
   <div className={style.pages_wrapper}>

<AgentsComponent/>

   </div>
    );
}
 
export default AgentsPage;

/*


{
 ffdata.map((data,id) => (
    <AgentsComponent data={data} id={id}/> 
  ))
}
    



{
  getReduxDatas.redux_agents.data.map((data,id) => (
    <AgentsComponent data={data} id={id}/> 
  ))
}


*/