import { Todo, Action, ActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => { 
    switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.completeTodo:
        console.log('reducer'+action.payload);
      return state.map((todo: Todo) => {
          if(todo.id==action.payload){
              return {...todo, completed: true};
          }else return todo;
      });
    default:
      return state;
  }
};
