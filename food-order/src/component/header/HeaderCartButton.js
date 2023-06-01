import style from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../store/cart-context';

const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext); 
    const totalNum = cartContext.totalNum; 
    const [cartBump, setCartBump] = useState(false); 
    const buttonStyle = `${style.button} ${cartBump && style.bump}`; 
    useEffect(() => {
        if (totalNum === 0){
            return; 
        }

        setCartBump(true); 
        const timer = setTimeout(() => {
            setCartBump(false); 
        }, 300); 

        return () => {
            clearTimeout(timer); 
        }; 
    }, [totalNum]); 

    return (
        <button className={`${buttonStyle}`} onClick={props.checkout}>
            <span className={style.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span className={style.badge}>{totalNum}</span>
        </button>
    )
};

export default HeaderCartButton; 