import * as api from '../api';

export const getTodos = () => async (dispatch) => {
  try {
    const { data } = await api.getAllTodos()

    dispatch({ type: 'GET_ALL', payload: data.todos })
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