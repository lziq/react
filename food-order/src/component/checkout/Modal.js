import Card from '../UI/Card';
import styles from './Modal.module.css';
import Cart from './Cart';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.cancelCheckout}></div>;
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop cancelCheckout={props.cancelCheckout}></Backdrop>, portalElement)}
            {ReactDOM.createPortal(
                <Card className={styles.modal}>
                    <Cart cancelCheckout={props.cancelCheckout}/>
                </Card>,
                portalElement
            )}
        </>
    );
}

export default Modal; 
