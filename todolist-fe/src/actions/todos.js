import * as api from '../api';

export const getTodos = () => async (dispatch) => {
  try {
    const { data } = await api.getAllTodos()

    dispatch({ type: 'GET_ALL', payload: data.todos })
  } catch (error) {
    console.log(error)
  }
}

export const createTodo = (newTodo) => async (dispatch) => {
  try {
    const { data } = await api.createTodo(newTodo)

    dispatch({ type: 'CREATE', payload: data })

  } catch (error) {
    console.log(error)
  }
}

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await api.deleteTodo(id)

    dispatch({ type: 'DELETE', payload: id })
  } catch (error) {
    console.log(error)
  }
}

export const updateTodoText = (id, updatedText) => async (dispatch) => {
  try {
    // console.log('updatedText', updatedText)
    const { data } = await api.updateTodo(id, updatedText)
    // console.log('data', data)

    dispatch({ type: 'UPD_TEXT', payload: data })
   } catch (error) {
    console.log(error)
  }
}