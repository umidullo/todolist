const reducer = (todos = [], action) => {
  switch (action.type) {
    case 'GET_ALL':
      return action.payload;
    case 'DELETE':
      return todos.filter((todo) => todo._id !== action.payload);
    case 'CREATE':
      return [...todos, action.payload]
    case 'UPD_TEXT':
      return todos.map((todo) => todo._id === action.payload._id ? action.payload : todo)
    default:
      return todos;
  }
}

export default reducer