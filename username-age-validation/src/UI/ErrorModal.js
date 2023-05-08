import classess from './ErrorModal.module.css'; 
import Card from './Card'; 
import Button from './Button'; 

export default function ErrorModal(props){
    return (
        <div>
            <div className={classess.backdrop} onClick={props.errorHandler}></div>
            <Card className={classess.modal}>
                <header className={classess.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classess.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classess.actions}>
                    <Button onClick={props.errorHandler}>OK</Button>
                </footer>
            </Card>
        </div>
    );
}; 
