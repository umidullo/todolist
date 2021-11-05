import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, updateTodo } from '../actions/todos';

export default function Input({ currentId, setCurrentId }) {
  const [newTodo, setNewTodo] = useState({ message: '', completed: false })

  const oneTodo = useSelector((state) => currentId ? state.todos.find((t) => t._id === currentId) : null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (oneTodo) setNewTodo(oneTodo)
  }, [oneTodo])


  const addHandler = () => {
    if (currentId) {
      dispatch(updateTodo(currentId, newTodo))
    } else {
      dispatch(createTodo(newTodo))
    }
    setNewTodo({ message: '', completed: false })
    setCurrentId(null)
  }

  return (
    <div className="create-block">
      <input type="text" className="create-message" value={newTodo.message} onChange={(e) => setNewTodo({ ...newTodo, message: e.target.value })} />
      <button className="add-todo" disabled={!newTodo.message} onClick={addHandler}>{currentId ? 'update' : 'add'}</button>
    </div>
  )
}
