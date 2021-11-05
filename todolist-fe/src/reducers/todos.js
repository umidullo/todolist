const reducer = (todos = [], action) => {
  switch (action.type) {
    case 'GET_ALL':
      return action.payload;
    case 'DELETE':
      return todos.filter((todo) => todo._id !== action.payload);
    case 'CREATE':
      console.log(todos)
      console.log(action.payload)
      return [...todos, action.payload]
    default:
      return todos;
  }
}

export default reducer