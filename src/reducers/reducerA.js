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
      let x = cloneState.todos.concat({
        text: cloneState.text,
        edit: false,
        check: false
      });
      return {
        ...state,
        todos: x,
        text: ""
      };

    case "CHECKED":
      cloneState.todos[action.i].check = !cloneState.todos[action.i].check;
      return {
        ...state,
        todos: cloneState.todos
      };
  }
  return state;
}
export default reducerA;
