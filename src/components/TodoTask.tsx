import { ITask } from "../interfaces/ITask"


type TodoTaskProps={
    task:ITask,
    completeTask:(taskName:string)=>void
}

export const TodoTask = ( {task,completeTask}:TodoTaskProps  ) =>{
  return (
    <div className="task">
    <div className="content">
      <span>{task.taskName}</span>
      <span>{task.deadline}</span>
    </div>
    <button
      onClick={() => {
        completeTask(task.taskName);
      }}
    >
      X
    </button>
  </div>
  );
}