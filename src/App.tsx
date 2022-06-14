import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.css';
import './App.css';
import { fetchTodos, completeTodo, addTodo  , deleteTodo} from './actions';
import { Todo } from './actions';
import { TodoTask } from './components/TodoTask';
export interface AppProps {
  todos?: Todo[];
  fetchTodos: Function;
  completeTodo: Function;
  addTodo: Function;
  deleteTodo:Function;

}

interface AppState {
  fetching: boolean;
}


function App(props: AppProps, state: AppState) {

  const dispatch = useDispatch();

  const todos = useSelector((state: any) => state.todos);

  const [todoTitle, setTodoTitle] = useState('');


  const handleFetchTodos = () => {
    dispatch(props.fetchTodos());
  }

  const handleCompleteTodo = (id: number) => {
    dispatch(props.completeTodo(id));
  }

  const handleDeleteTodo = (id:number)=>{
       dispatch(props.deleteTodo(id));
  }
 
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(event.target.value);
    console.log(todoTitle);
  }

  const handleAddTodo = () => {
    dispatch(
      props.addTodo(
        {
          title: todoTitle,
          completed: false
        }));
    setTodoTitle('');
  }

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
            value={todoTitle}
            onChange={handleTitleChange}
          />

        </div>
        <button onClick={handleAddTodo} >Add Task</button>
      </div>
      <div className="todoList">
        {todos.map((todo: Todo, key: number) => {
          return <TodoTask
                       key={key}
                       todo={todo} 
                       completeTodo={() => handleCompleteTodo(todo.id)}
                       deleteTodo={()=>handleDeleteTodo(todo.id)}
                       />
        })}
      </div>

    </div>
  );
}

export default App;
