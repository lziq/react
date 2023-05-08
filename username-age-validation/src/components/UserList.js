import Card from "../UI/Card";
import classes from './UserList.module.css';

export function UserList(props){
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>
                        {user.username + ' (' + user.age + ' years old)'}
                    </li>
                ))}
            </ul>
        </Card>
    ); 
}; 
