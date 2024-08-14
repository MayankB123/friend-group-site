import { useState } from 'react'
import { useEffect } from 'react'
import styles from '../../styles/test/Test.module.css'
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'

export default function Test() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(newItem) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos, {
          id: crypto.randomUUID(), 
          title: newItem, 
          completed: false
        }
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed} // Change state using state object instead
        } else {
          return todo
        } 
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return <>
  <NewTodoForm addTodo={addTodo}/>
  <h1 className={styles.header}>Todo List</h1>
  <TodoList toggleTodo={toggleTodo} deleteTodo={deleteTodo} todos={todos}/>
  </>
}
