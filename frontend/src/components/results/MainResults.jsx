import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Results.module.css'
import TraitsBreakdown from './TraitsBreakdown'

export default function MainResults({ score, text }) {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return <div className={ styles.mainResults }>
    <h2>
        Your Score
    </h2>
    <h1>
        { score }
    </h1>
    <h2>
        Breakdown
    </h2>
    <article className={ styles.traitsBreakdown }>
        <TraitsBreakdown text={ text } />
    </article>
    <button onClick={handleClick} className={ styles.backToHome }>Back to Home</button>
    </div>
}