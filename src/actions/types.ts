import { FetchTodosAction, CompleteTodoAction , AddTodoAction ,DeleteTodoAction , UpdateTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos,
  completeTodo,
  addTodo,
  deleteTodo,
  updateTodo
}

export type Action = FetchTodosAction | CompleteTodoAction | AddTodoAction  | DeleteTodoAction  | UpdateTodoAction;
