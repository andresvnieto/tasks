import { useContext } from 'react'
import TodoButton from '../../components/todos/TodoButton'
import TodoCount from '../../components/todos/TodoCount'
import TodoList from '../../components/todos/TodoList/TodoList'
import TodoSearch from '../../components/todos/TodoSearch'
import { TodoContext } from '../../context/TodoContext'
import FormAddTodo from '../Forms/FormAddTodo'
import Modal from '../Modal/Modal'

function AppUI() {
    const { modalState, handleModalState } = useContext(TodoContext);
    return (
        <section
            className='container my-10 rounded-2xl mx-auto px-10 py-20 bg-slate-800 text-cyan-200 flex justify-center'>
            <article className='w-1/2'>
                <TodoCount />
                <TodoSearch />
                <TodoList />
                <TodoButton />
                {
                    modalState &&
                    <Modal>
                        <FormAddTodo />
                    </Modal>
                }
            </article>
        </section>
    )
}

export default AppUI