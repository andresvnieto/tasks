import { useContext } from "react"
import TodoItem from "./TodoItem"
import { TodoContext } from "../../../context/TodoContext";
import Message from "../../Messages/Message";
import ListSkeleton from "./ListSkeleton";


function TodoList() {

    const { todos, loading, error, searchedTodos } = useContext(TodoContext);

    if (loading) return <ListSkeleton />
    if (error) return <Message type="error" msg="Ojo! hay un error" />
    if (!loading && searchedTodos.length === 0) return <Message msg="Debes crear un todo" />

    const todosData = searchedTodos.length > 0 ? searchedTodos : todos;
    return (
        <ul className='mb-10' >
            {todosData.map(todo => <TodoItem todo={todo} key={todo.id} />)}
        </ul>
    )
}

export default TodoList