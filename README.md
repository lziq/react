1. What is React? 

It is a javascript framework to build dynamic web pages (interacting with uesrs). 

2. How do we resolve the problem of css styles namespace collision? 

- We can assign globally different names to all css styles. 
- Use styled component to write local css styles in each javascript file. 
- Use css modules to import css styles, e.g. `import classes from './NewUser.module.css';`

3. What are `react` and `reactDOM` dependency in `package.json` file? 

`react` is the javascript framework for development. `reactDOM` is an adapter to apply the code on web browser (Alternatives can be phone app development). 

4. What is react fragment? 

Since we can't return multiple react components in one return clause, we can use react fragment to help us to do so. e.g. 
```
return (
    <>
        <Backdrop/>
        <ModalOverlay/>
    </>
)
```

5. What is react portal? 

React portal allows users to retrieve a html element globally and create react components under it. 

6. What is react ref? 

React ref can be used to manipulate states in react components. With the code in [NewUser.js](./username-age-validation/src/components/NewUser.js), we can use `useRef` to rewrite it: 

```
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
```
`useRef` links a variable to an actual html element. 

7. What is an uncontrolled component? 

"Uncontrolled" means the html element update is maintained by users, instead of React, such as the line `username.current.value = '';` in the above example. 

8. How is `useEffect` useful? 

We can use `useEffect` to wrap a block of code in, so it only executes once when browser loads the web page. e.g. 
```
const storedUserLoggoedInInformation = localStorage.getItem('isLoggedIn'); 

useEffect(() => {
    const storedUserLoggoedInInformation = localStorage.getItem('isLoggedIn); 
    if (storedUserLoggedInInformation === '1'){
        setIsLoggedIn(true); 
    }
}, [])
```
`useEffect` can also be used to change a state based on other state changes. e.g. 
```
const identifier = setTimeout(() => {
    setFormIsValid(
        enteredEmail.includes('@') &&enteredPassword.trim().length > 6 
    ); 
}, 500); 

return () => {
    clearTimeout(identifier); 
}; 
```
So we don't need to add the logic of `setFormIsValid` in component of email and password input box. 

9. What is `useReducer`? 

`useReducer` is useful when it comes to change a state according to multiple actions (object as state). e.g. 
```
import React, { useReducer } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error('Unsupported action type');
  }
}

function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  function handleIncrement() {
    dispatch({ type: 'increment' });
  }

  function handleDecrement() {
    dispatch({ type: 'decrement' });
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
```

10. What is a React context? 

A React context is used to pass data between 2 components directly, whereas `useState` needs to come through all the components to pass data. To use a React component: 
- First, define a context component using `React.createContext` 
- Second, define a `<Context.Provider>` in the data sender component. 
- Finally, use `useContext` to receive data in the data receiver component. 
Note that React context is not optimized in high frequency changes. (we should use Redux in this case)
