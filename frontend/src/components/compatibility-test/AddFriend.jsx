import styles from '../../styles/CompatibilityTest.module.css'
import SliderController from '../home/SliderController'
import addSymbol from '../../static/addsymbol.png'

export default function AddFriend({ onAddFriend }) {

    return <div className={ styles.addFriendWrapper }>
        <button onClick={ onAddFriend } className={ styles.addFriend }>
            <img className={ styles.image } src={addSymbol}/>
        </button>
    </div>
}