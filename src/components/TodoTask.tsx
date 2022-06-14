import { useRef, ChangeEvent , MouseEvent, useState, ButtonHTMLAttributes } from 'react';
import { Todo } from './../actions';
import { useDispatch} from 'react-redux';
import { updateTodo ,ActionTypes } from './../actions';



type TodoProps = {
  todo: Todo,
  completeTodo: (id: number) => void,
  deleteTodo: (id: number) => void,
  updateTodo: (id: number) => void
}


export const TodoTask = (props: TodoProps) => {

  console.log(props);
  type EditType= 'edit'|'update';
  const [todoInput, setTodoInput] = useState('');
  const refTodoItem = useRef<HTMLElement>(null);
  const refEditButton = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();

  const updateTodoUI=()=>{
    const element: HTMLElement = refTodoItem.current!;
    element.style.backgroundColor = '#007BFF';
    element.setAttribute('contenteditable', 'true');
    // element.style.textDecoration = 'none';
    element.focus();
    const editButtonElement: HTMLButtonElement = refEditButton.current!;
    
    editButtonElement.innerText='Update';
    editButtonElement.className ='btn-success';  
    editButtonElement.dataset.type='update';
  }

  const resetUI = ()=>{
    const element: HTMLElement = refTodoItem.current!;
    element.style.backgroundColor = 'tomato';
    element.setAttribute('contenteditable', 'false');
    const editButtonElement: HTMLButtonElement = refEditButton.current!;
    
    editButtonElement.innerText='Edit';
    editButtonElement.className='primary';
    editButtonElement.dataset.type='edit';
  }
  const handleEdit = (event:MouseEvent<HTMLButtonElement>) => {
   
    const type =event.currentTarget.dataset.type;
    
    if(type==='edit'){
       updateTodoUI();
    }else{
       handleUpdate();
    } 
  }
  const handleChange = (event: ChangeEvent<HTMLElement>) => {
    setTodoInput(event.target.innerText);
  }

  const handleUpdate =()=>{
   props.updateTodo(props.todo.id);
   console.log('RESET UI ');
   resetUI();
  }

  return (
    <div className="task">
      <div className="content">
        <span
          ref={refTodoItem}
          className={props.todo.completed ? "completed" : ""}
          onInput={handleChange}
        >{props.todo.title}</span>
      </div>
      <button

        onClick={() => {
          props.completeTodo(props.todo.id);
        }}
      >
        mark as done
      </button>

      <button

        className="danger"
        onClick={() => props.deleteTodo(props.todo.id)}
      >
        delete
      </button>
      <button
        data-type="edit"
        className="primary"
        onClick={handleEdit}
        ref={refEditButton}
      >
        edit
      </button>
    </div>
  );
}