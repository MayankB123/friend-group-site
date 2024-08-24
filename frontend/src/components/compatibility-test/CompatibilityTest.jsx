import { useState } from 'react'
import { useEffect } from 'react'
import CompatibilityTitles from './CompatibilityTitles'
import AddFriend from './AddFriend'
import FriendForm from './FriendForm'
import NoFriends from './NoFriends'
import styles from '../../styles/CompatibilityTest.module.css'

export default function CompatibilityTest() {
  const [friendsCount, setFriendsCount] = useState(0)

  function incrementFriendsCounter() {
    if (friendsCount < 8) {
      setFriendsCount(friendsCount + 1)
    }
  }
  
  const friendsForms = []

  for (let i = 0; i < friendsCount; i++) {
    friendsForms.push(<FriendForm key={i} />)
  }

  return <main>
      <section className={ styles.titleContainer }>
        <CompatibilityTitles />
      </section>
      <section className={ styles.friendForms }>
        {friendsForms}
        {friendsCount < 8 && <AddFriend onAddFriend={ incrementFriendsCounter } />}
      </section>
    </main>
}
