import { useLocation } from "react-router-dom"
import styles from '../../styles/Results.module.css'
import ResultsTitles from "./ResultsTitles"
import MainResults from "./MainResults"
import Characters from "../home/Characters"

export default function Results() {
    const location = useLocation()
    const data = location.state || {}
    const text = data.text
    const score = data.score
    
    return <main>
      <section className={ styles.titleContainer }>
        <ResultsTitles />
      </section>
      <section className={ styles.mainResults }>
        <MainResults score={ score } text={ text } />
      </section>
      <section className={ styles.charactersContainer }>
        <Characters />
      </section>
    </main>
}