import { useState } from 'react'
import TodoButton from './components/todos/TodoButton'
import TodoCount from './components/todos/TodoCount'
import TodoItem from './components/todos/TodoItem'
import TodoList from './components/todos/TodoList'
import TodoSearch from './components/todos/TodoSearch'

function App() {
  const defaultTodos = [
    {
      id: 1,
      title: 'Hacer tareas',
      completed: true
    },
    {
      id: 2,
      title: 'Preparar almuerzo',
      completed: false
    },
    {
      id: 3,
      title: 'Estudiar Platzi',
      completed: true
    },
    {
      id: 4,
      title: 'Dibujar',
      completed: true
    }
  ];
  const [todos, setTodos] = useState(defaultTodos);
  const [search, setSearch] = useState('');
  const todosCompleted = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => {
    const todoText = todo.title.toLocaleLowerCase();
    const todoSearch = search.toLocaleLowerCase();
    return todoText.includes(todoSearch);
  });
  return (
    <section
      className='container my-10 rounded-2xl mx-auto px-10 py-20 bg-slate-800 text-cyan-200 flex justify-center'>
      <article
        className='w-1/2'>
        <TodoCount
          total={totalTodos}
          completed={todosCompleted}
        />
        <TodoSearch
          search={search}
          setSearch={setSearch}
        />
        <TodoList
          todos={
            searchedTodos.length
              ? searchedTodos
              : todos
          }
        />
        <TodoButton />
      </article>
    </section>
  )
}

export default App
