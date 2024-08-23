import styles from '../../styles/CompatibilityTest.module.css'
import SliderController from '../home/SliderController'

export default function CompatbilityForm() {
    return <form className={styles.form}>
        <h1>How it works</h1>
        <h2>You'll be given 5 questions for each group member...</h2>
        <h3>Rate your openness to trying new things.</h3>
        <h2>Answer each question on a scale of 0-10...</h2>
        <SliderController />
        <h2>And see how you score!</h2>
    </form>
}