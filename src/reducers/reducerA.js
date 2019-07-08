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
        check: false,
        save:false
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

      case "EDIT":
      cloneState.todos[action.id].edit = !cloneState.todos[action.id].edit;
      return {
        ...state,
        todos: cloneState.todos
      };

      case "SAVE":
      cloneState.todos[action.id].save = !cloneState.todos[action.id].save;
      cloneState.todos[action.id].edit = !cloneState.todos[action.id].edit;
      return {
        ...state,
        todos: cloneState.todos
      };

      case "GETVALUE1":
      cloneState.todos[action.boxId].text=action.val1;
      return {
        ...state,
        todos:cloneState.todos
      };

  }
  return state;
}
export default reducerA;
