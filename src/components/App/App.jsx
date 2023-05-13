import { useEffect, useState } from 'react'
import { defaultTodos } from '../../utils/todos'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import AppUI from './AppUI'

function App() {
  const { 
    data: todos, 
    completeItem, 
    removeItem, 
    completed: todosCompleted, 
    total: totalTodos, 
    loading, 
    error 
  } = useLocalStorage('TODOS', defaultTodos);
  const [search, setSearch] = useState('');
  const searchedTodos = todos.filter(todo => {
    const todoText = todo.title.toLocaleLowerCase();
    const todoSearch = search.toLocaleLowerCase();
    return todoText.includes(todoSearch);
  });

  return (
    <AppUI
      todos={
        todos
      }
      totalTodos={totalTodos}
      todosCompleted={todosCompleted}
      search={search}
      setSearch={setSearch}
      searchedTodos={searchedTodos}
      completeItem={completeItem}
      removeItem={removeItem}
      loading={loading}
      error={error}
    />
  )
}

export default App
