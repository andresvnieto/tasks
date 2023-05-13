import { useEffect, useState } from 'react'
import { defaultTodos } from '../../utils/todos'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import AppUI from './AppUI'

function App() {
  
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
