import { useState } from 'react'
import CurrentFriend from './CurrentFriend'
import CompatibilityTitles from './CompatibilityTitles'
import FriendForm from './FriendForm'
import styles from '../../styles/CompatibilityTest.module.css'

export default function CompatibilityTest() {
  const [friends, setFriends] = useState([])
  const [error, setError] = useState()

  function addFriend(newFriend) {
    if (friends.length >= 8) {
      return
    }
    setFriends((currentFriends) => {
      return [
        ...currentFriends, {
          id: crypto.randomUUID(),
          name: newFriend.name,
          attribute1: newFriend.attribute1,
          attribute2: newFriend.attribute2,
          attribute3: newFriend.attribute3,
          attribute4: newFriend.attribute4,
          attribute5: newFriend.attribute5,
        }
      ]
    })
  }

  function handleSubmit() {
    console.log(friends)
  }

  function deleteFriend(id) {
    setFriends(currentFriends => {
      return currentFriends.filter(friend => friend.id !== id)
    })
  }

  function handleError(error) {
      setError(error);
      setTimeout(() => {
          setError('')
        }, 5000);
  }

  return <main>
      <section className={ styles.titleContainer }>
        <CompatibilityTitles />
      </section>
      {friends.length < 8 && (
        <section className={ styles.friendForms }>
        <FriendForm addFriend={addFriend} handleError={ handleError } />
      </section>
      )}
      <section className={ styles.currentFriendsContainer }>
      {friends.map(friend => {
        return <CurrentFriend {...friend} deleteFriend={deleteFriend} key={friend.id}/>
      })}
      </section>
      {friends.length >= 2 && (
        <div className={ styles.getResultsWrapper }>
          <button type="submit" className={ styles.getResults } onClick={handleSubmit}>Get your results!</button>
        </div>
      )}
      {error && (
        <div className={ styles.error }>
        {error}
        </div>
      )}
    </main>
}
