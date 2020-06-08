import React from 'react';
import './styles.css';

const Card = ({ title, children }) => {
    return (
        <div className="card">
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="text-content">
                <p>{children}</p>
            </div>
        </div>
    )
}

export default Card;