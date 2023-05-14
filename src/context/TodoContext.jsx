import { createContext, useState } from 'react';
import { defaultTodos } from '../utils/todos';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

function TodoProvider({ children }) {
    const [modalState, setModalState] = useState(false);
    const {
        data: todos,
        completeItem,
        removeItem,
        completed: todosCompleted,
        total: totalTodos,
        loading,
        error
    } = useLocalStorage('TODOS', defaultTodos);
    const [search, setSearch] = useState('');
    const searchedTodos = todos.filter(todo => {
        const todoText = todo.title.toLocaleLowerCase();
        const todoSearch = search.toLocaleLowerCase();
        return todoText.includes(todoSearch);
    });
    const handleModal = () =>{
        setStateModal(!modalState);
    }
    return (
        <TodoContext.Provider value={{
            todos: todos,
            completeItem,
            removeItem,
            todosCompleted: todosCompleted,
            totalTodos: totalTodos,
            loading,
            error,
            search,
            setSearch,
            searchedTodos,
            modalState,
            handleModal
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };