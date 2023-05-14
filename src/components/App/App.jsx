import { useEffect, useState } from 'react'
import { defaultTodos } from '../../utils/todos'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import AppUI from './AppUI'
import { TodoProvider } from '../../context/TodoContext'

function App() {
  return (
    <TodoProvider >
      <AppUI/>
    </TodoProvider>
  )
}

export default App
