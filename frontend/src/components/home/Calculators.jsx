import styles from '../../styles/home/Calculators.module.css'
import CompatibilityCalculator from './CompatibilityCalculator'
import SituationCalculator from './SituationCalculator'

export default function Calculators() {
  return (
    <section className={styles.main}>
        <CompatibilityCalculator />
        <SituationCalculator />
    </section>
    )
}