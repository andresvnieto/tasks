import { useContext, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io'
import { TodoContext } from '../../context/TodoContext';

function TodoButton() {
    const { handleModal } = useContext(TodoContext);
    return (
        <div className='flex justify-center'>
            <button
                className='flex items-center px-8 py-4 bg-emerald-400 text-cyan-950 font-bold rounded-2xl text-lg hover:bg-emerald-500'
                onClick={handleModal}
            >
                Crear todo<span className='text-emerald-100 px-2'><IoMdAddCircle /></span>
            </button>
        </div>
    )
}

export default TodoButton