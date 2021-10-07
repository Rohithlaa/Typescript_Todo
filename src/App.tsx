import React, { ChangeEvent, FC , useState} from "react";
import "./App.css";
import RenderTodo from "./components/RenderTodo";
import { Itask } from "./interfaces";

const App:FC = () => {
  const[task, setTask] = useState<string>("")
  const[Deadline, setDeadline] = useState<number>(0)
  const[todoList, setTodolist] = useState<Itask[]>([])
  

  const handleChange = (event : ChangeEvent<HTMLInputElement>): void =>{
    if(event.target.name === 'taskname'){
      setTask(event.target.value)
    } else{
      setDeadline(parseInt(event.target.value))
    }
  }
   const addTask = () => {
     if(task.length > 0  && Deadline >= 0){
      const newTask = {taskname: task, Deadline: Deadline}
      setTodolist([...todoList, newTask])
      setTask("")
      setDeadline(0)
      console.log(todoList)
     } else{
       alert("please enter the task ")
     }
      
   }

   const completeTask = (taskToDelete :string): void => {
    setTodolist( todoList.filter( (task) => {
      return task.taskname !== taskToDelete
   }))   
   }
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
        <input type="text" placeholder="Task name" name="taskname" value={task} onChange={handleChange}/>
        <input type="number" placeholder="Deadline in Days" name="Deadline" value={Deadline} onChange={handleChange}/>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">{
       todoList.length > 0 ?  <RenderTodo todoList={todoList} completeTask={completeTask}/> : <h1>Please Add tasks</h1>
      }  
      </div>
    </div>
  );
}

export default App;
