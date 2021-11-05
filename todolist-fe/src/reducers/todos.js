const reducer = (todos = [], action) => {
  switch (action.type) {
    case 'GET_ALL':
      return action.payload;
    case 'DELETE':
    console.log(todos)
    console.log(action.payload)
      return todos.filter((todo) => todo._id !== action.payload)
    default:
      return todos;
  }
}

export default reducer