import { FetchTodosAction, CompleteTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos,
  completeTodo
}

export type Action = FetchTodosAction | CompleteTodoAction;
