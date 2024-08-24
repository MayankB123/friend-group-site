import { useState } from 'react'
import styles from '../../styles/CompatibilityTest.module.css'
import SliderController from '../home/SliderController'

export default function FriendForm({ addFriend, handleError }) {
    const initialState = {
        name: '',
        attribute1: 5,
        attribute2: 5,
        attribute3: 5,
        attribute4: 5,
        attribute5: 5,
    }
    
    const [friend, setFriend] = useState(initialState)
    
    function handleNameChange(e) {
        setFriend((prevFriend) => ({
            ...prevFriend,
            name: e.target.value
        }));
    }

    function handleAttribute1Change(value) {
        setFriend((prevFriend) => ({
            ...prevFriend,
            attribute1: value
        }));
    }

    function handleAttribute2Change(value) {
        setFriend((prevFriend) => ({
            ...prevFriend,
            attribute2: value
        }));
    }

    function handleAttribute3Change(value) {
        setFriend((prevFriend) => ({
            ...prevFriend,
            attribute3: value
        }));
    }

    function handleAttribute4Change(value) {
        setFriend((prevFriend) => ({
            ...prevFriend,
            attribute4: value
        }));
    }
    
    function handleAttribute5Change(value) {
        setFriend((prevFriend) => ({
            ...prevFriend,
            attribute5: value
        }));
    }

    function handleSumbit(e) {
        e.preventDefault()

        if (!friend.name) {
            handleError('Name is required');
            return;
        }

        addFriend(friend)
        setFriend(initialState)
    }
    
    return <form className={ styles.form }>
        <section className={ styles.formWrapper }>
            <h1>New Friend</h1>
            <input onChange={e => handleNameChange(e)} type="text" placeholder="Name" className={ styles.friendName } value={ friend.name } required/>
            <h2>Answer these 5 questions about this friend.</h2>
            <h3>Approaching new experiences.</h3>
            <h4>How open are you to change?</h4>
            <div className={ styles.ratingsText }>
                <h5>Prefer routine</h5>
                <h5>Love novelty</h5>
            </div>
            <SliderController attribute={ friend.attribute1 } handleAttributeChange={ handleAttribute1Change }/>
            <h3>Handling social situations.</h3>
            <h4>How comfortable are you in social gatherings?</h4>
            <div className={ styles.ratingsText }>
                <h5>Uncomfortable</h5>
                <h5>Very Comfortable</h5>
            </div>
            <SliderController attribute={ friend.attribute2 } handleAttributeChange={ handleAttribute2Change }/>
            <h3>Dealing with conflict.</h3>
            <h4>How combative are you?</h4>
            <div className={ styles.ratingsText }>
                <h5>Avoid conflict</h5>
                <h5>Confront directly</h5>
            </div>
            <SliderController attribute={ friend.attribute3 } handleAttributeChange={ handleAttribute3Change }/>
            <h3>Decison making.</h3>
            <h4>How deeply do you analyze decisions?</h4>
            <div className={ styles.ratingsText }>
                <h5>Not at all</h5>
                <h5>Analyze thoroughly</h5>
            </div>
            <SliderController attribute={ friend.attribute4 } handleAttributeChange={ handleAttribute4Change }/>
            <h3>Importance of shared interests.</h3>
            <h4>How important is having shared interests to you?</h4>
            <div className={ styles.ratingsText }>
                <h5>Not important</h5>
                <h5>Very important</h5>
            </div>
            <SliderController attribute={ friend.attribute5 } handleAttributeChange={ handleAttribute5Change }/>
            <button type="submit" className={ styles.submit } onClick={e => handleSumbit(e)}>Add Friend</button>
        </section>  
    </form>
}