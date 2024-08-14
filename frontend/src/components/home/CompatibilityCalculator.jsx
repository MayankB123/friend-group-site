import styles from '../../styles/home/CompatibilityCalculator.module.css'
import SliderController from './SliderController'

export default function CompatibilityCalculator() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}><span>Compatibility</span> Calculator</h1>
            <div className={styles.calculator}>
            <SliderController />
            </div>
        </section>
    )
}