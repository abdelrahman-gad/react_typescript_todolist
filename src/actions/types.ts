import { FetchTodosAction, CompleteTodoAction , AddTodoAction ,DeleteTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos,
  completeTodo,
  addTodo,
  deleteTodo
}

export type Action = FetchTodosAction | CompleteTodoAction | AddTodoAction  | DeleteTodoAction;
