import React from 'react'
import { TodoItem } from './TodoItem'

export default function Todos(props) {

  return (
    <div className="container my-3">
      <div>       Todo List</div>

      {
        // using map for showing all data just like array
        props.todos.length==0 ? "No Todos to display..." :
        props.todos.map((todo) => {
          return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
    
          )
        })

      }

    </div>
  )
}

