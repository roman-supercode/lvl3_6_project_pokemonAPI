import './SearchBar.css';
import React, { useRef } from 'react';
import headingPic from '../../assets/img/heading.svg';
import daynight from '../../assets/img/daynight.svg';
import hamburger from '../../assets/img/hamburger.svg';

export default function SearchBar() {
    const inputref = useRef();
    return (
        <div className='searchBarContainer'>
            <img className='logoImg' src={headingPic}></img>
            <div className='flexContainer'>
                <img src={hamburger}></img>
                <input placeholder='Pokemon name' ref={inputref}></input>
                <img src={daynight}></img>
            </div>
        </div>
    );
}
