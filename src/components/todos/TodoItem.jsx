import React from 'react'
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";


function TodoItem({ todo }) {
    return (
        <li className={`p-6 my-6 ${todo.completed ? 'bg-slate-700' : 'bg-cyan-400 hover:bg-cyan-500'}  rounded-3xl text-cyan-950 flex justify-between align-middle cursor-pointer transition ease-in-out delay-150 hover:drop-shadow-xl `}>
            <div className='flex gap-3 items-center'>
                <div className={`rounded-full cursor-pointer 
                ${todo.completed ? 'bg-slate-800' : 'bg-cyan-100'} w-10 h-10 flex items-center justify-center text-2xl text-emerald-500 hover:drop-shadow-md`}>
                    {
                        todo.completed &&
                        <AiFillCheckCircle />
                    }
                </div>
                <span className={`font-regular text-lg ${todo.completed ? 'line-through text-slate-800' : ' text-white'}`}>
                    {todo.title}
                </span>
            </div>
            <div className={`rounded-full ${todo.completed ? 'bg-slate-800' : 'bg-white'} w-10 h-10 flex items-center justify-center text-2xl text-rose-500 cursor-pointer hover:drop-shadow-md`}>
                <AiFillCloseCircle />
            </div>
        </li>
    )
}

export default TodoItem