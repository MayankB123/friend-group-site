import styles from '../../styles/home/LandingText.module.css'

export function LandingText() {
    return (
        <div className={styles.mainText}>
            <h1 className={styles.title}>Test Your <span>Compatibility</span></h1>
            <h2 className={styles.description}>Ready to see how well your squad stacks up? Put your friend group to the test with our...</h2>
        </div>
    )
}