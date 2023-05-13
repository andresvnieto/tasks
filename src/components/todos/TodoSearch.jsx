import { useState } from 'react'

function TodoSearch({ search, setSearch }) {
    const handleSearch = ({ target: { value } }) => setSearch(value)
    return (
        <>
            <input
                className='p-4 w-full rounded-xl text-cyan-950'
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