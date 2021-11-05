import axios from 'axios'

const url = 'http://localhost:3001/todos'

export const getAllTodos = () => axios.get(url);

export const deleteTodo = (id) => axios.delete(`${url}/${id}`)

export const createTodo = (newTodo) => axios.post(url, newTodo)

export const updateTodo = (id, updatedTodo) => axios.patch(`${url}/${id}`, updatedTodo)
