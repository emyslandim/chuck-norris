import React from 'react';
import './styles.css';

const Card = ({ children, onChange }) => {
    return (
        <>
            <select onChange={onChange}>
                {children}
            </select>
        </>
    )
}

export default Card;