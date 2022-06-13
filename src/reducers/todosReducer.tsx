import { Todo, Action, ActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => { 
    switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.completeTodo:
      return state.map((todo: Todo) => {
          if(todo.id==action.payload){
              return {...todo, completed: true};
          }else return todo;
      });
    case ActionTypes.addTodo:
      return [...state, action.payload]; 
    default:
      return state;
  }
};
