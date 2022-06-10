import axios from 'axios';
import { AnyAction, Dispatch } from 'redux';
import { ActionTypes } from './types';
// import { ThunkDispatch } from 'redux-thunk';
const url = 'https://jsonplaceholder.typicode.com/todos';
const limit = '?_limit=10'

// type Dispatcher = ThunkDispatch<undefined, AnyAction>;
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

export interface CompleteTodoAction {
    type: ActionTypes.completeTodo;
    payload: number;
}

export const fetchTodos = () => {

    return async (dispatch: Dispatch) => {

        const response = await axios.get<Todo[]>(url+limit);

        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data,
        });
    };
};

export const completeTodo = (id: number) => {

    return async (dispatch: Dispatch) => {
        const response = await axios.put(
           url+'/'+id,
           {
            data:{
                completed: true
            }
           }
        );
            
        dispatch<CompleteTodoAction>({
            type: ActionTypes.completeTodo,
            payload: id,
        });
    }
};



