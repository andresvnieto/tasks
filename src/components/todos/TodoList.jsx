import TodoItem from "./TodoItem"


function TodoList({ todos, onCompleted, onRemove }) {
    return (
        <ul className='mb-10' >
            {todos.map(todo => <TodoItem todo={todo} key={todo.id} onCompleted={onCompleted} onRemove={onRemove}/>)}
        </ul>
    )
}

export default TodoList