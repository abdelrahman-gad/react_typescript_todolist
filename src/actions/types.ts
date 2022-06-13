import { FetchTodosAction, CompleteTodoAction , AddTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos,
  completeTodo,
  addTodo
}

export type Action = FetchTodosAction | CompleteTodoAction | AddTodoAction;
