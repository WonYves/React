import { createStore } from 'redux';
let defaultState = {
    counter: 0
}

function reducer(state = defaultState, action){
    switch (action.type){
        case "counter/incremented":{
            //  如果 state 是普通对象，永远不要修改它
            //  方式一
            let tempState = JSON.parse(JSON.stringify(state));
            tempState.counter += action.payload
            return tempState
        }
        case "counter/decremented":{
             return{
                 ...state,
                 counter:state.counter - action.payload
             }
        }
        default:{
            console.log("switch  默认")
            return state
        }
    }
}
let store = createStore(reducer)

export default store