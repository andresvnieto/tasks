import { createContext, useState } from 'react';
import { defaultTodos } from '../utils/todos';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

function TodoProvider({ children }) {
    const [modalState, setModalState] = useState(false);
    const {
        data: todos,
        saveData: saveTodos,
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
    const handleModal = () => {
        console.log('Click');
        let currentModalState = modalState;
        setModalState(!currentModalState);
    }
    const sortByProperty = (array, property) => array.sort((a, b) => a[property] - b[property])
    const addTodo = (e, todo) => {
        e.preventDefault();
        const updateTodos = [...todos];
        const sortTodos = sortByProperty(updateTodos, 'id');
        console.log(sortTodos);
        const newIndex = sortTodos[sortTodos.length - 1].id + 1;
        const newTodo = {
            id: newIndex,
            title: todo,
            completed: false
        };
        sortTodos.push(newTodo);
        saveTodos(sortTodos);
        setModalState(false)
    }
    return (
        <TodoContext.Provider value={{
            todos: todos,
            completeItem,
            removeItem,
            saveTodos,
            todosCompleted: todosCompleted,
            totalTodos: totalTodos,
            loading,
            error,
            search,
            setSearch,
            searchedTodos,
            modalState,
            handleModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };