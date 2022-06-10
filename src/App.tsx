import React , {FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.css';
import './App.css';
import {fetchTodos,completeTodo} from './actions';
import { Todo } from './actions';
import { TodoTask } from './components/TodoTask';
export interface AppProps {
  todos?: Todo[];
  fetchTodos: Function;
  completeTodo: Function;
}

interface AppState {
  fetching: boolean;
}


function App<FC>(props:AppProps) {
 
  const dispatch = useDispatch();
 
  const handleFetchTodos = () => {  
   dispatch(props.fetchTodos());
  }

  const handleCompleteTodo = (id:number) => {
    dispatch(props.completeTodo(id));
  }
  const todos = useSelector((state:any)=>state.todos);
  
  return (
    // <div className="App">
    // <div className={styles.container}>
    //     <button className={styles.button} onClick={handleFetch} >Fetch</button>
    //     {/* {this.state.fetching ? 'LOADING' : null} */}
    //     <div className={styles.span}>To-Do List</div>
    //     <div className={styles.info}>click on a task to delete</div>
    //     <div className={styles.mainList}></div>
    //   </div>
    // </div>

    <div className="App">
    <div className="header">
       <button onClick={handleFetchTodos} >Fetch Todos</button>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Task..."
          name="task"
          // value={taskName}
          // onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Deadline (in Days)..."
          name="deadline"
          // value={deadline}
          // onChange={handleChange}
        />
      </div>
      {/* <button onClick={addTask} >Add Task</button> */}
    </div>
    <div className="todoList">
      {todos.map((todo: Todo, key: number) => {
        return <TodoTask key={key} todo={todo}   completeTodo={()=>handleCompleteTodo(todo.id)} />
      })}
    </div>

  </div>
  );
}

export default App;
