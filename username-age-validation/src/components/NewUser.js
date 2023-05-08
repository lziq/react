import { useState, useRef } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal'
import Button from '../UI/Button'; 

import classes from './NewUser.module.css';

export function NewUser (props){
    const username = useRef(); 
    const age = useRef(); 
    const [validInput, setValidInput] = useState(true); 
    const [errorMessage, setErrorMessage] = useState(''); 

    const submitHandler = event => {
        event.preventDefault();
        const usernameValue = username.current.value.trim(); 
        const ageValue = age.current.value.trim(); 

        if (usernameValue.length === 0 || ageValue.length === 0){
            setErrorMessage('username and age must not be empty'); 
            setValidInput(false); 
            return; 
        }
        if (+ageValue < 1){
            setErrorMessage('age must be a positive integer'); 
            setValidInput(false); 
            return; 
        }

        props.addUserHandler({'id': Math.random(), 'username': usernameValue, 'age': ageValue});  
        username.current.value = '';
        age.current.value = '';
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
                    <input id="username" type="text" ref={username}></input>
                    <label htmlFor="age">Age(Years): </label>
                    <input id="age" type="text" ref={age}></input>
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </>
    ); 
}