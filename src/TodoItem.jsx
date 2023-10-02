import React from "react";
import "./styles/TodoItem.css";

import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";
function TodoItem(props){
    return (
      <li className={`todo-item ${props.completed && "todo-item__active"}`}>
        <AiFillCheckCircle 
        className={`icon-check ${props.completed && "icon-check__active"}`}
        onClick={props.onComplete}/>
        <p>{props.text}</p>
        <AiFillDelete className="icon-delete"
        onClick={props.onDelete}/>
      </li>
    );
}

export { TodoItem };