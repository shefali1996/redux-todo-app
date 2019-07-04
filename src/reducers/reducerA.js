
const initialState={
    todos : [],
    text:""
}

const todo={
    text:"",
    check:false
}

function reducerA(state =initialState,action){
    switch(action.type){
        case 'GETVALUE':
        return {
            ...state,
            text:action.val,

        }

        case 'SUBMIT':
        return {
            ...state,
            todos:state.todos.concat(todo),
            

        }

            
    
    
}
return state
}
export default reducerA;