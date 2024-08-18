import female1 from '../../static/blackfemale.png'
import male1 from '../../static/whitemale.png'
import female2 from '../../static/asianfemale.png'
import male2 from '../../static/indianmale.png'
import styles from '../../styles/home/Home.module.css'

export default function Characters() {

  return <>
        <img className={ styles.image } src={ female1 } />
        <img className={ styles.image } src={ male1 } />
        <img className={ styles.image } src={ male2 } />
        <img className={ styles.image } src={ female2 } />
    </>
}
