import { useState } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal'
import Button from '../UI/Button'; 

import classes from './NewUser.module.css';

export function NewUser (props){
    const [username, setUsername] = useState(''); 
    const [age, setAge] = useState(''); 
    const [validInput, setValidInput] = useState(true); 
    const [errorMessage, setErrorMessage] = useState(''); 

    const usernameHandler = event => {
        setUsername(event.target.value); 
    }; 
    const ageHandler = event => {
        setAge(event.target.value); 
    }; 
    const submitHandler = event => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0){
            setErrorMessage('username and age must not be empty'); 
            setValidInput(false); 
            return; 
        }
        if (+age < 1){
            setErrorMessage('age must be a positive integer'); 
            setValidInput(false); 
            return; 
        }

        props.addUserHandler({'id': Math.random(), 'username': username, 'age': age});  
        setUsername(''); 
        setAge(''); 
    }; 
    const errorHandler = event => {
        setValidInput(true); 
    }; 

    return (
        <>
            {!validInput && <ErrorModal title="Invalid input" message={errorMessage} errorHandler={errorHandler}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">Username: </label>
                    <input id="username" type="text" value={username} onChange={usernameHandler}></input>
                    <label htmlFor="age">Age(Years): </label>
                    <input id="age" type="text" value={age} onChange={ageHandler}></input>
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </>
    ); 
}