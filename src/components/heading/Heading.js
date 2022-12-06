import React from 'react';
import headingImg from "../../assets/img/heading.svg";

const Heading = () => {
    return (
        <div className='headingContainer'>
            <img src={headingImg} alt="pokemon" className='headingImg'></img>
        </div>
    );
};

export default Heading;