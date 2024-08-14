import { useState } from "react"
import styles from '../../styles/test/Test.module.css'

export function NewTodoForm({ addTodo}) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        
        if (newItem == "") return
        addTodo(newItem)
        
        setNewItem("")
      }

    return (
    <form onSubmit={handleSubmit} className={styles.newItemForm}>
        <div className={styles.formRow}>
        <label htmlFor="item">New Item</label>
        <input 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)} 
        type="text" 
        id="item"/>
        </div>
        <button className={styles.btn}>Add</button>
    </form>
    )
}