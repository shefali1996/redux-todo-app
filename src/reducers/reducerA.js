import cloneDeep from "lodash/cloneDeep";
const initialState = {
  todos: [],
  text: ""
};

function reducerA(state = initialState, action) {
  let cloneState = cloneDeep(state);

  switch (action.type) {
    case "GETVALUE":
      return {
        ...state,
        text: action.val
      };

    case "SUBMIT":
      let todo= cloneState.todos.concat({
        text: cloneState.text,
        edit: false,
        check: false
      });
      return {
        ...state,
        todos: todo,
        text: ""
      };

    case "CHECKED":
      cloneState.todos[action.i].check = !cloneState.todos[action.i].check;
      return {
        ...state,
        todos: cloneState.todos
      };

      case "CHECKED":
      cloneState.todos[action.i].edit = !cloneState.todos[action.i].edit;
      return {
        ...state,
        todos: cloneState.todos
      };
  }
  return state;
}
export default reducerA;
