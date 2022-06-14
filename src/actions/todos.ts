import axios from 'axios';
import { AnyAction, Dispatch } from 'redux';
import { TodoTask } from '../components/TodoTask';
import { ActionTypes } from './types';
// import { ThunkDispatch } from 'redux-thunk';
const url:string = process.env.REACT_APP_API_URL!;
const limit:string = `?_limit=${process.env.REACT_APP_PAGE_LIMIT}`!;

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

export interface AddTodoAction {
    type:ActionTypes.addTodo;
    payload:Todo;
}

export interface DeleteTodoAction{
    type:ActionTypes.deleteTodo;
    payload:number
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

export const addTodo = (todo:Todo) => {
   
    return async (dispatch:Dispatch)=>{
        const response =  await fetch(
            url,
            {
                method: 'POST',
                body:JSON.stringify(todo),
                headers:{
                    'Content-type': 'application/json; charset=UTF-8'
                }
            }
        );
        const data = await response.json();
    
        dispatch<AddTodoAction>({
            type:ActionTypes.addTodo,
            payload:data
        })
    }
}

export const deleteTodo = (id:number)=>{
    return async(dispatch:Dispatch)=>{
        const response = await fetch(
            url+'/'+id,
            {
                method:'DELETE'
            }
        );
        const data = await response.json();
        dispatch<DeleteTodoAction>({
            type:ActionTypes.deleteTodo,
            payload:id
        })
    }
}




