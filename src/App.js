import {useReducer, useState, useEffect} from 'react';
import todoReducer from './useReducer/todoReducer';
import filterFn from './utils/filterFn';
import './App.css';
import Form from './components/form';
import List from './components/list'
import Filter from './components/filter';
import Message from './components/message';

const App = () => {

  const initArray = () => JSON.parse(localStorage.getItem('items')) || [];

  const [filter, setFilter] = useState('all');
  const [exist, setExist] = useState(false);
  const [todos, dispatch] = useReducer(todoReducer, [], initArray);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todos))
  }, [todos])
  
  const handleAdd = (value) => {
    const allReadyExist = todos.some(todo => 
      todo.description.toLowerCase() === value.toLowerCase());
    
    if(allReadyExist) {
      setExist(true);
      return;
    }

    dispatch({
      type: 'add',
      payload: value,
    });

    setExist(false);
  }

  const handleDelete = (id) => {
    dispatch({
      type: 'delete',
      payload: id,
    });
  }

  const handleToggle = (id) => {
    dispatch({
      type: 'toggle',
      payload: id,
    });
  }

  return (
    <div className="App">
      <Filter setFilter={setFilter} state={filter}/>
      <h1>To-do List</h1>
      <Form 
      addItem={handleAdd}
      setExist={setExist}
      />
      {exist && <Message/>}
      <List 
      deleteItem={handleDelete}
      toggleSelect={handleToggle}
      todos={filterFn(todos, filter)}
      />
    </div>
  );
}

export default App;
