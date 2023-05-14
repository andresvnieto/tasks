import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context/TodoContext'

function FormAddTodo() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useContext(TodoContext);
  return (
    <form
      className='rounded-2xl bg-slate-300 p-10'
      onSubmit={(e) =>{
        addTodo(e, todo);
        setTodo('')
      }}
    >
      <h3 className='text-2xl font-bold my-2 text-slate-500 text-center'> Añade un todo a la lista</h3>
      <textarea
        className='p-4 my-6 w-full rounded-xl text-cyan-950'
        type="text"
        placeholder='Acá va el todo'
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <div className='flex justify-center'>
        <button
          className='flex items-center px-8 py-4 bg-emerald-400 text-cyan-950 font-bold rounded-2xl text-lg hover:bg-emerald-500'
        >
          Crear todo<span className='text-emerald-100 px-2'></span>
        </button>
      </div>

    </form>
  )
}

export default FormAddTodo