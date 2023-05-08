import React from 'react'; 

import classess from './Button.module.css'; 

const Button = props => { 
    return (
        <button 
            className={classess.button} 
            type={props.type || 'button'} 
            onClick={props.onClick}>
                {props.children}
        </button>
    ); 
}; 

export default Button;  