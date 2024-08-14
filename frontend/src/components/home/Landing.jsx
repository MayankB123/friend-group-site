import styles from '../../styles/home/Landing.module.css'
import { LandingText } from './LandingText'

export default function Landing() {
  return (
    <section className={styles.main}>
        <LandingText />
    </section>
    )
}
