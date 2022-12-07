import React from 'react';
import "./TypeCard.css";
import { Link } from "react-router-dom";

const TypeCard = (props) => {
    return (
        <Link to={`/typelist/${props.id}`}>
            <div className='typecard' key={props.index} style={{ backgroundColor: `${props.color}` }}>
                <p className='typeParag'>{props.type}</p>
            </div >
        </Link >
    );
};

export default TypeCard;