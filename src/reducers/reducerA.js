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
        text: action.val,
        error: "blue"
      };

    case "SUBMIT":
      if (state.text !== "") {
        let todo = cloneState.todos.concat({
          text: cloneState.text,
          edit: false,
          completed: false,
          save: false
        });
        return {
          ...state,
          todos: todo,
          text: ""
        };
      } else {
        return {
          ...state,
          error: "red"
        };
      }

    case "COMPLETED":
      cloneState.todos[action.i].completed = !cloneState.todos[action.i]
        .completed;
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
      cloneState.todos[action.boxId].text = action.val1;
      return {
        ...state,
        todos: cloneState.todos
      };

    case "DEL":
      return {
        ...state,
        todos: state.todos.filter(
          val => state.todos.indexOf(val) !== action.delId
        )
      };
  }
  return state;
}
export default reducerA;
