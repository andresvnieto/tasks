import React from 'react'

function TodoCount({ total, completed }) {
  return (
    <>
      <h1 className='text-4xl font-bold mt-8 text-center'>TodoCount</h1>
      <h3 className='text-2xl my-6 text-cyan-50 text-center'>Haz completado <span>{completed}</span> de <span>{total}</span></h3>
    </>
  )
}

export default TodoCount