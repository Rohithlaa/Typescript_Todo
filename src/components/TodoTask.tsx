import React from "react";
import { Itask } from "../interfaces";
interface Props {
  task: Itask;
  completeTask(tasktToDelete:string):void
}
const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskname}</span>
        <span>{task.Deadline}</span>
      </div>
      <button onClick={() => { completeTask(task.taskname)}}>X</button>
    </div>
  );
};

export default TodoTask;
