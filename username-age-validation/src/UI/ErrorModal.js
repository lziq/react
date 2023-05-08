import ReactDOM from 'react-dom'; 
import classess from './ErrorModal.module.css'; 
import Card from './Card'; 
import Button from './Button'; 

const Backdrop = (props) => {
    return <div className={classess.backdrop} onClick={props.onClick}></div>; 
}
const ModalOverlay = (props) => {
    return (
        <Card className={classess.modal}>
            <header className={classess.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classess.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classess.actions}>
                <Button onClick={props.onClick}>OK</Button>
            </footer>
        </Card>
    ); 
}

export default function ErrorModal(props){
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.errorHandler}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onClick={props.errorHandler}/>, document.getElementById('modal-root'))}
        </>
    );
}; 
