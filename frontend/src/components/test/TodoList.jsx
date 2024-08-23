import { TodoItem } from "./TodoItem"
import styles from '../../styles/Test.module.css'

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className={styles.list}>
        {todos.length === 0 && "No todos"}
        {todos.map(todo => {
        return <TodoItem {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id}/>
        })}
    </ul>
    )
}