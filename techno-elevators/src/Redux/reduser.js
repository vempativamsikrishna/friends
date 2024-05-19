const state = {
    value : 10
}

const reduser = (state=state,action)=>{
    switch(action.type){
        case 'dataUpdate':
        return{state:state.value-1}
        default:
        return state;
    }
}
export default reduser