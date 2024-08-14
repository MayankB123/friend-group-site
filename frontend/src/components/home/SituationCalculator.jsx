import styles from '../../styles/home/SituationCalculator.module.css'

export default function SituationCalculator() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}><span>Situation</span> Calculator</h1>
            <div className={styles.calculator}>
            </div>
        </section>
    )
}