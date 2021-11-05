import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from './actions/todos';
import Todo from './components/Todo';

function App() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return (
    <div className="App">
      <div className="todo-wrapper">
        {todos.map((todo) => <Todo key={todo._id} todo={todo}/>)}
      </div>
    </div>
  );
}

export default App;
