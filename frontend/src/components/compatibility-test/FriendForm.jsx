import styles from '../../styles/CompatibilityTest.module.css'
import SliderController from '../home/SliderController'

export default function FriendForm() {
    return <form className={styles.form}>
        <input type="text" placeholder="Name" className={ styles.friendName } />
        <h2>How open are you to change?</h2>
        <SliderController />
        <h2>How open are you to change?</h2>
        <SliderController />
        <h2>How open are you to change?</h2>
        <SliderController />
        <h2>How open are you to change?</h2>
        <SliderController />
        <h2>How open are you to change?</h2>
        <SliderController />
    </form>
}