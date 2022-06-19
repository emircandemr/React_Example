import React, { useState } from 'react';
import clsx from "clsx";
import {GrFormClose , GrFormEdit , GrFormCheckmark} from "react-icons/gr"
import { useTodoLayerValue } from '../context/TodoContext'

const Todo = ({todo}) => {

  const [{ },dispatch] = useTodoLayerValue();
  const [editable , setEditable] = useState(false)
  const [content, setContent] = useState(todo.content)

  const removeTodo = (todoID) => {
    dispatch({
      type:"REMOVE_TODO",
      payload:todoID
    })
  }

  const completeTodo = (ID) => {
    dispatch({
      typle:"COMPLETE_TODO",
      payload:ID
    })
  }

  const updateTodo = ({todoID,newValue}) => {
    dispatch({
      type: "UPDATE_TODO",
      payload : {
        todoID,
        newValue,
      }
    })
  }

  const todoStyle = clsx({
    ['todo-row'] : true,
    ['completed'] : todo.isCompleted,
  })

  return (
    <div className={todoStyle}>
      <div onClick={() => completeTodo(todo.id)}> 
       {
        editable ? 
        <input className='todo-input-edit' 
        type="text" value={content} onChange={(e) => {setContent(e.target.value)}}  />
         : todo.content
       }
      </div>
      <div className='todo-icons'>
        <GrFormClose className="todo-icon" onClick={()=> {removeTodo(todo.id)}}/>

        {editable ?
          <GrFormCheckmark className="todo-icon" onClick={()=> {
            updateTodo({
              todoID: todo.id,
              newValue : content
            })
            setEditable(false)
          }}/>
        : <GrFormEdit className="todo-icon" onClick={()=> {setEditable(true)}}/>
      }

        
      </div>
    </div>
  )
}

export default Todo