import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'

function TodoCount() {
  const { loading, todosCompleted, totalTodos} = useContext(TodoContext);
  return (
    <>
      <h1 className='text-4xl font-bold mt-8 text-center'>TodoCount</h1>
      {
        !loading &&
        <h3 className='text-2xl my-6 text-cyan-50 text-center'> Haz completado <span>{todosCompleted}</span> de <span>{totalTodos}</span></h3>
      }
    </>
  )
}

export default TodoCount