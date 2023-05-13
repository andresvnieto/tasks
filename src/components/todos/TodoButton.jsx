import { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io'

function TodoButton() {
    const [count, setCount] = useState(0);
    const sendTodo = (e) => {
        console.log('Hola');
        let newCount = count;
        newCount++;
        setCount(newCount)
    }
    return (
        <div className='flex justify-center'>
            <button
                className='flex items-center px-8 py-4 bg-emerald-400 text-cyan-950 font-bold rounded-2xl text-lg hover:bg-emerald-500'
                onClick={sendTodo}
            >
                Crear todo {count}<span className='text-emerald-100 px-2'><IoMdAddCircle /></span>
            </button>
        </div>
    )
}

export default TodoButton