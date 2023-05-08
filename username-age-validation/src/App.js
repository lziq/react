import { useState } from 'react';
import { NewUser } from './components/NewUser';
import { UserList } from './components/UserList';

function App() {
  const [users, setUsers] = useState([
    {'id': Math.random(), 'username': 'Max', 'age': 31}, 
  ]); 

  const addUserHandler = user => {
    setUsers([...users, user])
  }

  return (
    <div>
      <NewUser addUserHandler={addUserHandler}></NewUser>   
      <UserList users={users}></UserList>   
    </div>
  );
}

export default App;
