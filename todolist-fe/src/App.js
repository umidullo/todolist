import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from './actions/todos';
import Todo from './components/Todo';
import Input from './components/Input';

function App() {

  const [currentId, setCurrentId] = useState(null)

  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return (
    <div className="App">
      <div className="todo-wrapper">
        <Input setCurrentId={setCurrentId} currentId={currentId} />
        {todos.map((todo) => <Todo setCurrentId={setCurrentId} key={todo._id} todo={todo} />)}
      </div>
    </div>
  );
}

export default App;
