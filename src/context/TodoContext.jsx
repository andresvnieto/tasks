import { createcontext } from 'react';

const TodoContext = createcontext();

function TodoProvider({ children }) {
    return (
        <TodoContext.Provider>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };