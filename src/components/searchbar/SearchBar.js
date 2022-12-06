import './SearchBar.css';
import React, { useRef } from 'react';
import headingPic from '../../assets/img/heading.svg';
import daynight from '../../assets/img/daynight.svg';
import hamburger from '../../assets/img/hamburger.svg';

export default function SearchBar() {
    useRef();
    return (
        <div>
            <img src={headingPic}></img>
            <div>
                <img src={hamburger}></img>
                <input ></input>
                <img src={daynight}></img>
            </div>
        </div>
    );
}
