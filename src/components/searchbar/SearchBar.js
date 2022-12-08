import './SearchBar.css';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import headingPic from '../../assets/img/heading.svg';
import daynight from '../../assets/img/daynight.svg';
import hamburger from '../../assets/img/hamburger.svg';

export default function SearchBar({ search }) {
    const [darkmode, setDarkMode] = useState(false);

    let dayNight = () => darkmode ? setDarkMode(false) : setDarkMode(true);
    useEffect(() => {
        if (darkmode == true) {
            document.body.style = 'background: #000000';
        } else {
            document.body.style = 'background: #CCDADD';
        }
    }, [darkmode]);

    return (
        <div className='searchBarContainer'>
            <Link to={"/"}><img className='logoImg' src={headingPic}></img></Link>
            <div className='flexContainer'>
                <Link to={"/menu"}><img src={hamburger}></img></Link>
                <input placeholder='Pokemon name' onChange={(e) => search(e.target.value)}></input>
                <img onClick={dayNight} src={daynight}></img>
            </div>
        </div>
    );
}
