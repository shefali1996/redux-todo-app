
const initialState={
    todos : [],
    text:"",
}

function reducerA(state =initialState,action){
    let cloneState={...state}

    switch(action.type){
        case 'GETVALUE':
        return {
            ...state,
            text:action.val,
        }

        case 'SUBMIT':
            cloneState.todos.push({text:cloneState.text,checked:false,edit:false,completed:false})
        return {
            ...state,
            todos:cloneState.todos,
            text:""
        }
}
return state
}
export default reducerA;