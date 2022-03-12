import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";

const AgentsComponent = () => {
  
    const getReduxDatas = useSelector(state => state.myCounter);
    
  useEffect(() => {
    console.log(getReduxDatas.redux_agents)
    console.log(getReduxDatas.redux_maps)
    console.log(getReduxDatas.redux_wepons)
  }, []);

    return ( 
        <>
        burası AgentsComponent
        </>
     );
}
 
export default AgentsComponent;



/*

    const getReduxDatas = useSelector(state => state.myCounter);
    console.log(getReduxDatas)

*/