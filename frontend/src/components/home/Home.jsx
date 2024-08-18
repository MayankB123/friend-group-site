import { useState } from 'react'
import { useEffect } from 'react'
import HomeTitles from './HomeTitles'
import StartCompatibilityTest from './StartCompatibilityTest'
import StartSituationTest from './StartSituationTest'
import Tutorial from './Tutorial'
import Characters from './Characters'
import styles from '../../styles/home/Home.module.css'

export default function Home() {
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
    <main>
      <section className={ styles.titleContainer }>
        <HomeTitles />
      </section>
      <section className={ styles.startQuizzes }>
        <StartCompatibilityTest />
        <StartSituationTest />
      </section>
      <article className= {styles.tutorial}>
        <Tutorial />
      </article>
      <section className={ styles.charactersContainer }>
        <Characters />
      </section>
    </main>
  </>
}
