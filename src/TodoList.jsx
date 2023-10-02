import React from 'react'
import './styles/TodoList.css'
function TodoList(props) {
  return (
    <ul className="lista-todos">
        {props.children}
    </ul>
  )
}

export { TodoList }