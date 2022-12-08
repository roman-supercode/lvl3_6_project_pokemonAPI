import './SearchBar.css';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import headingPic from '../../assets/img/heading.svg';
import daynight from '../../assets/img/daynight.svg';
import hamburger from '../../assets/img/hamburger.svg';

export default function SearchBar({ search }) {

    return (
        <div className='searchBarContainer'>
            <Link to={"/"}><img className='logoImg' src={headingPic}></img></Link>
            <div className='flexContainer'>
                <Link to={"/menu"}><img src={hamburger}></img></Link>
                <input placeholder='Pokemon name' onChange={(e) => search(e.target.value)}></input>
                <img src={daynight}></img>
            </div>
        </div>
    );
}
