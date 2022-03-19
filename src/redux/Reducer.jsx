
// our redux reducer


let data= null;
// our initState objec
const initState = {
    redux_agents:data,
    redux_maps:data,
    redux_wepons:data
}

const Reducer = (state=initState,action) => {
    switch(action.type) {
    
    case 'AGENTS_ACTİON':
        return {
...state,redux_agents:action.payload
        }
        case 'MAPS_ACTİON':
            return {
                ...state,redux_maps:action.payload
            }
            case 'WEPONS_ACTİON':
                return {
                    ...state,redux_wepons:action.payload
                }
default:
    return state
    }
}
export default Reducer