import styles from '../../styles/CompatibilityTest.module.css'

export default function CurrentFriend({ id, name, attribute1, attribute2, attribute3, attribute4, attribute5, deleteFriend}) {
    return <div className={ styles.currentFriend }>
        <h1>{name}</h1>
        <h2>Openness to change: {attribute1}</h2>
        <h2>Comfort in social gatherings: {attribute2}</h2>
        <h2>Combativeness: {attribute3}</h2>
        <h2>Decision analysis: {attribute4}</h2>
        <h2>Importance of shared interests: {attribute5}</h2>
        <button onClick={() => deleteFriend(id)} className={ styles.deleteFriend }>Delete Friend</button>
    </div>
}