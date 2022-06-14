import { Todo, Action, ActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.completeTodo:
      return state.map((todo: Todo) => {
        if (todo.id == action.payload) {
          return { ...todo, completed: true };
        } else return todo;
      });
    case ActionTypes.addTodo:
      return [...state, action.payload];
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    case ActionTypes.updateTodo:
      console.log('update reducer');
      return state.map((todo: Todo) => {
        if (todo.id == action.payload.id) {
          return { ...todo, title:action.payload.title,completed:false};
        } else return todo;
      });
    default:
      return state;
  }
};
