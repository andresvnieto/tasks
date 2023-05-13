import TodoButton from '../../components/todos/TodoButton'
import TodoCount from '../../components/todos/TodoCount'
import TodoList from '../../components/todos/TodoList'
import TodoSearch from '../../components/todos/TodoSearch'
import TodoIcon from '../todos/TodoIcon'
import ListSkeleton from '../todos/skeletons/ListSkeleton'

function AppUI({ todos, totalTodos, todosCompleted, search, setSearch, searchedTodos, completeItem, removeItem, loading, error }) {
    return (
        <section
            className='container my-10 rounded-2xl mx-auto px-10 py-20 bg-slate-800 text-cyan-200 flex justify-center'>
            <article
                className='w-1/2'>


                <TodoCount
                    total={totalTodos}
                    completed={todosCompleted}
                    loading={loading}
                />

                <TodoSearch
                    search={search}
                    setSearch={setSearch}
                />
                {
                    loading && <ListSkeleton />
                }

                {error && <p className='text-slate-400 py-6 text-center'> Ojo! hay un error </p>}

                {
                    (!loading && searchedTodos.length === 0) && <p className='text-slate-400 py-6 text-center'> Debes crear un todo </p>
                }

                {
                    !loading && (todos.length > 0 || searchedTodos.length > 0) &&
                    <TodoList
                        todos={
                            searchedTodos.length > 0
                                ? searchedTodos
                                : todos
                        }
                        onCompleted={completeItem}
                        onRemove={removeItem}
                    />
                }

                {error && <p className='text-red-600 py-6 text-center'> Debes crear un todo </p>}


                <TodoButton />
            </article>
        </section>
    )
}

export default AppUI