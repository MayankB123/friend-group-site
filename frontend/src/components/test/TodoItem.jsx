import styles from '../../styles/test/Test.module.css';

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li>
            <label>
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
                {title}
            </label>
            <button onClick={() => deleteTodo(id)} className={`${styles.btn} ${styles.btnDanger}`}>Delete</button>
        </li>
    )
}