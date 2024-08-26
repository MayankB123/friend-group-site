import styles from '../../styles/Results.module.css'

export default function TraitsBreakdown({ text }) {
    return <>
        <h2>Approaching New Experiences</h2>
        <p>
            {text.experiences}
        </p>
        <h2>Handling Social Situations</h2>
        <p>
            {text.social}
        </p>
        <h2>Dealing With Conflict</h2>
        <p>
            {text.conflict}
        </p>
        <h2>Decision Making</h2>
        <p>
            {text.decisionMaking}
        </p>
        <h2>Importance of shared interests</h2>
        <p>
            {text.sharedInterests}
        </p>
    </>
}