import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../actions/todos';


export default function Todo({todo, setCurrentId}) {

  const dispatch = useDispatch()

  useEffect(() => {}, []);

  const checkboxHandler = () => {
    dispatch(updateTodo(todo._id, {...todo, completed: !todo.completed}))
  }

  const editHandler = () => {
    setCurrentId(todo._id)
  }

  const deleteHandler = () => {
    dispatch(deleteTodo(todo._id))
  }

  return (
    <div className="todo">
      <div className="todo-content">
        <input checked={todo.completed} type="checkbox" className="checkbox" onChange={checkboxHandler} />
        <p className="message">{todo.message}</p>
      </div>
      <div className="buttons">
        <button className="edit" onClick={editHandler}>edit</button>
        <button className="delete" onClick={deleteHandler}>delete</button>
      </div>
    </div>
  )
}
