import React from 'react';
import "./TypeCard.css";

const TypeCard = (props) => {
    return (
        <div className='typecard' style={{ backgroundColor: `${props.color}` }}>
            <p className='typeParag' key={props.key}>{props.type}</p>
        </div >
    );
};

export default TypeCard;