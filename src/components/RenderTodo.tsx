import React from 'react'
import { Itask } from '../interfaces'
import TodoTask from './TodoTask'

interface Props {
    todoList : Itask[]
    completeTask(tasktoDelete:string): void
}

const RenderTodo= ({todoList, completeTask} : Props) => {
    return (
        <div>
            {
            todoList.map( (task: Itask, key:number) => { 
              return <TodoTask key={key} task={task} completeTask ={completeTask}/>
            })
        }
        </div>
    )
}

export default RenderTodo
