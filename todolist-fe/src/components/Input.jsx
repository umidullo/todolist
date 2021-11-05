import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTodo } from '../actions/todos';

export default function Input() {

  const dispatch = useDispatch()

  const [newTodo, setNewTodo] = useState({ message: '', completed: false })

  const addHandler = () => {
    dispatch(createTodo(newTodo))
    setNewTodo({ message: '', completed: false })
  }

  return (
    <div className="create-block">
      <input type="text" className="create-message" value={newTodo.message} onChange={(e) => setNewTodo({ ...newTodo, message: e.target.value })} />
      <button className="add-todo" onClick={addHandler}>add todo</button>
    </div>
  )
}
