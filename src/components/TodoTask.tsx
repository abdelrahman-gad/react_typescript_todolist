import { Todo } from './../actions';


type TodoProps = {
  todo: Todo,
  completeTodo: (id: number) => void,
  deleteTodo: (id: number) => void
}

export const TodoTask = ({ todo, completeTodo , deleteTodo }: TodoProps) => {
  return (
    <div className="task">
      <div className="content">
        <span className={todo.completed?"completed":""} >{todo.title}</span>
      </div>
      <button
        
        onClick={() => {
          completeTodo(todo.id);
        }}
      >
        mark as done
      </button>

      <button
      
         className="danger"
         onClick={()=>deleteTodo(todo.id)}
         >
           delete
      </button>
    </div>
  );
}