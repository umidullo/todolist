import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../actions/todos';
import Icon from '../components/Icon';


export default function Todo({ todo, setCurrentId }) {

  const dispatch = useDispatch()

  useEffect(() => { }, []);

  const checkboxHandler = () => {
    dispatch(updateTodo(todo._id, { ...todo, completed: !todo.completed }))
  }

  const editHandler = () => {
    setCurrentId(todo._id)
  }

  const deleteHandler = () => {
    dispatch(deleteTodo(todo._id))
  }

  // <Icon type='check' />

  return (
    <div className="todo">
      <div className="todo-content">
        <input checked={todo.completed} type="checkbox" className="checkbox" onChange={checkboxHandler} />
        <p className={todo.completed ? "message message_completed" : "message"}>{todo.message}</p>
      </div>
      <div className="buttons">
        <button
          className="edit"
          onClick={editHandler}><Icon type='edit' /></button>
        <button
          className="delete"
          onClick={deleteHandler}><Icon type='trash' /></button>
      </div>
    </div>
  )
}
