import React , {FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.css';
import './App.css';
import {fetchTodos,deleteTodo} from './actions';
import { Todo } from './actions';
export interface AppProps {
  todos?: Todo[];
  fetchTodos: Function;
  deleteTodo?: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}


function App<FC>(props:AppProps) {
 
  const dispatch = useDispatch();
 
  const handleFetch = ()=>{  
   dispatch(props.fetchTodos());
  }

  const state = useSelector((state:any)=>state.todos);
  console.log(state);

  return (
    <div className="App">
    <div className={styles.container}>
        <button className={styles.button} onClick={handleFetch} >Fetch</button>
        {/* {this.state.fetching ? 'LOADING' : null} */}
        <div className={styles.span}>To-Do List</div>
        <div className={styles.info}>click on a task to delete</div>
        <div className={styles.mainList}></div>
      </div>
    </div>
  );
}

export default App;
