import React, { Fragment } from 'react';
import './styles.css'

const Button = ({ className, onClick, text, icon }) => {
    return (
        <Fragment>
            <button className={className} onClick={onClick}>
                {text &&
                    <strong>{text}</strong>
                }
                {icon &&
                    <span>{icon}</span>
                }

            </button>
        </Fragment>
    )
}
export default Button;