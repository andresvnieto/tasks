import { useContext, useState } from 'react'
import { TodoContext } from '../../context/TodoContext'

function TodoSearch() {
    const { search, setSearch} = useContext(TodoContext)
    const handleSearch = ({ target: { value } }) => setSearch(value)
    return (
        <>
            <input
                className='p-4 my-6 w-full rounded-xl text-cyan-950'
                type='text'
                placeholder='Todo search'
                name="todo"
                value={search}
                onChange={handleSearch}
            />
        </>
    )
}

export default TodoSearch