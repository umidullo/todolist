import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodoText } from '../actions/todos';


export default function Todo({todo}) {

  const dispatch = useDispatch()

  useEffect(() => {}, []);

  const checkboxHandler = () => {
    dispatch(updateTodoText(todo._id, {...todo, completed: !todo.completed}))
  }

  const editHandler = () => {
    console.log('editTodo')
  }

  const deleteHandler = () => {
    dispatch(deleteTodo(todo._id))
  }

  return (
    <div className="todo">
      <div className="todo-content">
        <input checked={todo.completed} type="checkbox" className="checkbox" onChange={checkboxHandler} />
        <p className="message">{todo.message} / {todo._id}</p>
      </div>
      <div className="buttons">
        <button className="edit" onClick={editHandler}>edit</button>
        <button className="delete" onClick={deleteHandler}>delete</button>
      </div>
    </div>
  )
}
