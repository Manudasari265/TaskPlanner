import { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import TodoInput from './components/Todoinput';

function App() {
  var [todoItems, setTodoItems] = useState(['Buy egss!', 'Hit the gym', 'Take a shower']);
  var [completedItems, setCompletedItems] = useState([])
    function addTodo(todoItem) {
    setTodoItems([...todoItems, todoItem])
  }
  function deleteTodo(todoItem) {
    setTodoItems(todoItems.filter(e => e != todoItem))
  }

  function completedTodo(todoItem) {
    setTodoItems(todoItems.filter(e => e!= todoItem));
    setCompletedItems([...completedItems, todoItem]);
  }
  return (
    <div className='App'>
      <h1 className='title'>TaskPlanner</h1>
      <div>
        <TodoInput onAddItem={addTodo} />
      </div>
      <div className='list-block'>
        <h2 className='title'>Tasks to be done</h2>
        <hr/>
        {
          todoItems.map(todo => <TodoItem key={todo} title={todo} onDelete={deleteTodo} onComplete={completedTodo}/>)
        }
      </div>
      <div className='list-block'>
        <h2 className='title'>Completed</h2>
        <hr/>
        {
          completedItems.map(todo => <TodoItem key={todo} title={todo} onDelete={deleteTodo} isCompleted/>)
        }
      </div>
    </div>
  )
}

export default App
